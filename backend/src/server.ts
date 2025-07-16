import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

// Import routes
import productsRouter from './routes/products';
import categoriesRouter from './routes/categories';
import brandsRouter from './routes/brands';

// Import middleware
import { errorHandler, notFound, requestLogger } from './middleware';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 1000 requests per windowMs
  message: {
    success: false,
    error: 'Too Many Requests',
    message: 'Too many requests from this IP, please try again later.'
  }
});
app.use(limiter);

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    process.env.FRONTEND_URL || 'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Compression middleware
app.use(compression());

// Logging middleware
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined'));
  app.use(requestLogger);
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Luxury E-commerce API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API routes
app.use('/api/products', productsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/brands', brandsRouter);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to the Luxury E-commerce API',
    version: '1.0.0',
    documentation: '/api/docs',
    endpoints: {
      products: '/api/products',
      categories: '/api/categories',
      brands: '/api/brands',
      health: '/health'
    }
  });
});

// API documentation endpoint
app.get('/api/docs', (req, res) => {
  res.json({
    success: true,
    message: 'Luxury E-commerce API Documentation',
    version: '1.0.0',
    endpoints: {
      products: {
        'GET /api/products': 'Get all products with optional filtering and pagination',
        'GET /api/products/featured': 'Get featured products',
        'GET /api/products/new': 'Get new products',
        'GET /api/products/sale': 'Get sale products',
        'GET /api/products/search?q={query}': 'Search products',
        'GET /api/products/brand/{brand}': 'Get products by brand',
        'GET /api/products/category/{category}': 'Get products by category',
        'GET /api/products/{id}': 'Get product by ID'
      },
      categories: {
        'GET /api/categories': 'Get all categories',
        'GET /api/categories/main': 'Get main categories',
        'GET /api/categories/{id}': 'Get category by ID',
        'GET /api/categories/{id}/subcategories': 'Get subcategories of a category'
      },
      brands: {
        'GET /api/brands': 'Get all brands',
        'GET /api/brands/featured': 'Get featured brands',
        'GET /api/brands/luxury': 'Get luxury brands',
        'GET /api/brands/{id}': 'Get brand by ID'
      }
    },
    parameters: {
      products: {
        category: 'Filter by category',
        brand: 'Filter by brand',
        minPrice: 'Minimum price filter',
        maxPrice: 'Maximum price filter',
        inStock: 'Filter by stock availability (true/false)',
        isNew: 'Filter by new products (true/false)',
        isSale: 'Filter by sale products (true/false)',
        rating: 'Minimum rating filter',
        sortBy: 'Sort by (name, price, rating, newest, popularity)',
        sortOrder: 'Sort order (asc, desc)',
        page: 'Page number for pagination',
        limit: 'Items per page (max 100)',
        search: 'Search term'
      }
    }
  });
});

// 404 handler
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Luxury E-commerce API server is running on port ${PORT}`);
  console.log(`📍 Server URL: http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api/docs`);
  console.log(`💎 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('💎 Luxury E-commerce API server closed.');
    process.exit(0);
  });
});

export default app;