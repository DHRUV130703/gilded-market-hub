import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Brand from '../models/Brand.js';

// Get all products with filters
export const getProducts = async (req, res) => {
  try {
    const {
      category,
      brand,
      minPrice,
      maxPrice,
      isSale,
      isNew,
      isFeatured,
      search,
      sort = '-createdAt',
      page = 1,
      limit = 12
    } = req.query;

    // Build query
    const query = {};
    
    if (category) query.category = category;
    if (brand) query.brand = brand;
    if (isSale === 'true') query.isSale = true;
    if (isNew === 'true') query.isNew = true;
    if (isFeatured === 'true') query.isFeatured = true;
    
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }
    
    if (search) {
      query.$text = { $search: search };
    }

    // Execute query with pagination
    const skip = (page - 1) * limit;
    const products = await Product.find(query)
      .populate('brand', 'name slug logo')
      .populate('category', 'name slug')
      .sort(sort)
      .skip(skip)
      .limit(Number(limit));

    const total = await Product.countDocuments(query);

    res.json({
      products,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single product
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('brand')
      .populate('category');

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get featured products
export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ isFeatured: true })
      .populate('brand', 'name slug logo')
      .populate('category', 'name slug')
      .limit(8)
      .sort('-createdAt');

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get products on sale
export const getSaleProducts = async (req, res) => {
  try {
    const products = await Product.find({ isSale: true })
      .populate('brand', 'name slug logo')
      .populate('category', 'name slug')
      .sort('-createdAt');

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get new arrivals
export const getNewArrivals = async (req, res) => {
  try {
    const products = await Product.find({ isNew: true })
      .populate('brand', 'name slug logo')
      .populate('category', 'name slug')
      .limit(12)
      .sort('-createdAt');

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create product (admin only)
export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    await product.populate(['brand', 'category']);
    
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update product (admin only)
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate(['brand', 'category']);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete product (admin only)
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};