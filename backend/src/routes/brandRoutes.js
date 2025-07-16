import express from 'express';
import {
  getBrands,
  getBrand,
  getBrandBySlug,
  getFeaturedBrands,
  createBrand,
  updateBrand,
  deleteBrand
} from '../controllers/brandController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.get('/', getBrands);
router.get('/featured', getFeaturedBrands);
router.get('/:id', getBrand);
router.get('/slug/:slug', getBrandBySlug);

// Admin routes
router.post('/', authenticate, authorize('admin'), createBrand);
router.put('/:id', authenticate, authorize('admin'), updateBrand);
router.delete('/:id', authenticate, authorize('admin'), deleteBrand);

export default router;