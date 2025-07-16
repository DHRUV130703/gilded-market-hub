import { Router, Request, Response } from 'express';
import { ProductService } from '../services/productService';
import { SearchFilters, ApiResponse, Product } from '../types';
import { validatePagination } from '../middleware';

const router = Router();

// GET /api/products - Get all products with optional filtering and pagination
router.get('/', validatePagination, (req: Request, res: Response<ApiResponse<Product[]>>): void => {
  try {
    const filters: SearchFilters = {
      category: req.query.category as string,
      brand: req.query.brand as string,
      minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
      maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
      inStock: req.query.inStock ? req.query.inStock === 'true' : undefined,
      isNew: req.query.isNew ? req.query.isNew === 'true' : undefined,
      isSale: req.query.isSale ? req.query.isSale === 'true' : undefined,
      rating: req.query.rating ? Number(req.query.rating) : undefined,
      sortBy: req.query.sortBy as any,
      sortOrder: req.query.sortOrder as 'asc' | 'desc',
      page: Number(req.query.page),
      limit: Number(req.query.limit),
      search: req.query.search as string
    };

    const result = ProductService.getAllProducts(filters);
    
    if (!result.success) {
      res.status(400).json(result);
      return;
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch products'
    });
  }
});

// GET /api/products/featured - Get featured products
router.get('/featured', (req: Request, res: Response<ApiResponse<Product[]>>) => {
  try {
    const result = ProductService.getFeaturedProducts();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch featured products'
    });
  }
});

// GET /api/products/new - Get new products
router.get('/new', (req: Request, res: Response<ApiResponse<Product[]>>) => {
  try {
    const result = ProductService.getNewProducts();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch new products'
    });
  }
});

// GET /api/products/sale - Get sale products
router.get('/sale', (req: Request, res: Response<ApiResponse<Product[]>>) => {
  try {
    const result = ProductService.getSaleProducts();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch sale products'
    });
  }
});

// GET /api/products/search - Search products
router.get('/search', (req: Request, res: Response<ApiResponse<Product[]>>): void => {
  try {
    const query = req.query.q as string;
    
    if (!query) {
      res.status(400).json({
        success: false,
        error: 'Validation Error',
        message: 'Search query is required'
      });
      return;
    }

    const result = ProductService.searchProducts(query);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to search products'
    });
  }
});

// GET /api/products/brand/:brand - Get products by brand
router.get('/brand/:brand', (req: Request, res: Response<ApiResponse<Product[]>>) => {
  try {
    const { brand } = req.params;
    const result = ProductService.getProductsByBrand(brand);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch products by brand'
    });
  }
});

// GET /api/products/category/:category - Get products by category
router.get('/category/:category', (req: Request, res: Response<ApiResponse<Product[]>>) => {
  try {
    const { category } = req.params;
    const result = ProductService.getProductsByCategory(category);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch products by category'
    });
  }
});

// GET /api/products/:id - Get product by ID
router.get('/:id', (req: Request, res: Response<ApiResponse<Product>>): void => {
  try {
    const { id } = req.params;
    const result = ProductService.getProductById(id);
    
    if (!result.success) {
      res.status(404).json(result);
      return;
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch product'
    });
  }
});

export default router;