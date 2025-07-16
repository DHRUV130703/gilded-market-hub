import Brand from '../models/Brand.js';
import Product from '../models/Product.js';

// Get all brands
export const getBrands = async (req, res) => {
  try {
    const { featured } = req.query;
    const query = { isActive: true };
    
    if (featured === 'true') {
      query.isFeatured = true;
    }

    const brands = await Brand.find(query).sort('order name');
    
    // Add product count for each brand
    const brandsWithCount = await Promise.all(
      brands.map(async (brand) => {
        const productCount = await Product.countDocuments({ brand: brand._id });
        return {
          ...brand.toObject(),
          productCount
        };
      })
    );

    res.json(brandsWithCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single brand
export const getBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    const productCount = await Product.countDocuments({ brand: brand._id });

    res.json({
      ...brand.toObject(),
      productCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get brand by slug
export const getBrandBySlug = async (req, res) => {
  try {
    const brand = await Brand.findOne({ slug: req.params.slug });

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    const productCount = await Product.countDocuments({ brand: brand._id });

    res.json({
      ...brand.toObject(),
      productCount
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get featured brands
export const getFeaturedBrands = async (req, res) => {
  try {
    const brands = await Brand.find({ isActive: true, isFeatured: true })
      .sort('order name')
      .limit(8);

    res.json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create brand (admin only)
export const createBrand = async (req, res) => {
  try {
    const { name } = req.body;
    
    // Generate slug from name
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    const brand = new Brand({
      ...req.body,
      slug
    });
    
    await brand.save();
    res.status(201).json(brand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update brand (admin only)
export const updateBrand = async (req, res) => {
  try {
    const { name } = req.body;
    
    // Generate new slug if name is updated
    if (name) {
      req.body.slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    
    const brand = await Brand.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    res.json(brand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete brand (admin only)
export const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);

    if (!brand) {
      return res.status(404).json({ message: 'Brand not found' });
    }

    res.json({ message: 'Brand deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};