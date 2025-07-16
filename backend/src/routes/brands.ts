import { Router, Request, Response } from 'express';
import { brands } from '../data/brands';
import { Brand, ApiResponse } from '../types';

const router = Router();

// GET /api/brands - Get all brands
router.get('/', (req: Request, res: Response<ApiResponse<Brand[]>>) => {
  try {
    res.json({
      success: true,
      data: brands
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch brands'
    });
  }
});

// GET /api/brands/featured - Get featured brands
router.get('/featured', (req: Request, res: Response<ApiResponse<Brand[]>>) => {
  try {
    const featuredBrands = brands.filter(b => b.isFeatured);
    
    res.json({
      success: true,
      data: featuredBrands
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch featured brands'
    });
  }
});

// GET /api/brands/luxury - Get luxury brands
router.get('/luxury', (req: Request, res: Response<ApiResponse<Brand[]>>) => {
  try {
    const luxuryBrands = brands.filter(b => b.isLuxury);
    
    res.json({
      success: true,
      data: luxuryBrands
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch luxury brands'
    });
  }
});

// GET /api/brands/:id - Get brand by ID
router.get('/:id', (req: Request, res: Response<ApiResponse<Brand>>): void => {
  try {
    const { id } = req.params;
    const brand = brands.find(b => b.id === id || b.slug === id);
    
    if (!brand) {
      res.status(404).json({
        success: false,
        error: 'Brand not found',
        message: `Brand with ID ${id} does not exist`
      });
      return;
    }

    res.json({
      success: true,
      data: brand
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch brand'
    });
  }
});

export default router;