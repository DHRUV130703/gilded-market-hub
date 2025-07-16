import express from 'express';
import {
  register,
  login,
  getProfile,
  updateProfile,
  changePassword,
  addToWishlist,
  removeFromWishlist,
  updateCart
} from '../controllers/authController.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, updateProfile);
router.put('/password', authenticate, changePassword);
router.post('/wishlist', authenticate, addToWishlist);
router.delete('/wishlist/:productId', authenticate, removeFromWishlist);
router.put('/cart', authenticate, updateCart);

export default router;