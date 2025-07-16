import { Router, Request, Response } from 'express';
import { categories } from '../data/categories';
import { Category, ApiResponse } from '../types';

const router = Router();

// GET /api/categories - Get all categories
router.get('/', (req: Request, res: Response<ApiResponse<Category[]>>) => {
  try {
    const activeCategories = categories.filter(c => c.isActive);
    
    res.json({
      success: true,
      data: activeCategories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch categories'
    });
  }
});

// GET /api/categories/main - Get main categories (no parent)
router.get('/main', (req: Request, res: Response<ApiResponse<Category[]>>) => {
  try {
    const mainCategories = categories.filter(c => c.isActive && !c.parentId);
    
    res.json({
      success: true,
      data: mainCategories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch main categories'
    });
  }
});

// GET /api/categories/:id - Get category by ID
router.get('/:id', (req: Request, res: Response<ApiResponse<Category>>): void => {
  try {
    const { id } = req.params;
    const category = categories.find(c => c.id === id && c.isActive);
    
    if (!category) {
      res.status(404).json({
        success: false,
        error: 'Category not found',
        message: `Category with ID ${id} does not exist`
      });
      return;
    }

    res.json({
      success: true,
      data: category
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch category'
    });
  }
});

// GET /api/categories/:id/subcategories - Get subcategories of a category
router.get('/:id/subcategories', (req: Request, res: Response<ApiResponse<Category[]>>) => {
  try {
    const { id } = req.params;
    const subcategories = categories.filter(c => c.parentId === id && c.isActive);
    
    res.json({
      success: true,
      data: subcategories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to fetch subcategories'
    });
  }
});

export default router;