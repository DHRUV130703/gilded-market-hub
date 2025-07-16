import express from 'express';
import {
  createOrder,
  getUserOrders,
  getOrder,
  updateOrderStatus,
  getAllOrders,
  getOrderStats
} from '../controllers/orderController.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = express.Router();

// Protected routes (customer)
router.post('/', authenticate, createOrder);
router.get('/my-orders', authenticate, getUserOrders);
router.get('/:id', authenticate, getOrder);

// Admin routes
router.get('/', authenticate, authorize('admin'), getAllOrders);
router.get('/stats/summary', authenticate, authorize('admin'), getOrderStats);
router.put('/:id/status', authenticate, authorize('admin'), updateOrderStatus);

export default router;