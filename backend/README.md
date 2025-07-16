# Luxury E-commerce Backend API

This is a complete backend API for a luxury e-commerce website built with Node.js, Express, and MongoDB.

## Features

- **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Customer/Admin)
  - Secure password hashing

- **Product Management**
  - Full CRUD operations for products
  - Advanced filtering (category, brand, price range, sale items)
  - Search functionality
  - Featured products
  - Stock management

- **Category & Brand Management**
  - Dynamic categories with item counts
  - Featured brands showcase
  - SEO-friendly slugs

- **Order Management**
  - Complete order lifecycle
  - Stock management integration
  - Order tracking
  - Order statistics

- **User Management**
  - User profiles
  - Wishlist functionality
  - Shopping cart
  - Address management

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - The `.env` file is already created with default values
   - Update `MONGODB_URI` if you're using a different MongoDB instance
   - Change `JWT_SECRET` for production use

## Running the Application

1. Make sure MongoDB is running on your system

2. Seed the database with sample data:
```bash
npm run seed
```

This will create:
- 8 luxury brands
- 4 categories
- 10+ sample products
- Admin and customer accounts

3. Start the server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (auth required)
- `PUT /api/auth/profile` - Update profile (auth required)
- `PUT /api/auth/password` - Change password (auth required)
- `POST /api/auth/wishlist` - Add to wishlist (auth required)
- `DELETE /api/auth/wishlist/:productId` - Remove from wishlist (auth required)
- `PUT /api/auth/cart` - Update cart (auth required)

### Products
- `GET /api/products` - Get all products with filters
  - Query params: category, brand, minPrice, maxPrice, isSale, isNew, isFeatured, search, sort, page, limit
- `GET /api/products/featured` - Get featured products
- `GET /api/products/sale` - Get sale products
- `GET /api/products/new` - Get new arrivals
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/:id` - Get category by ID
- `GET /api/categories/slug/:slug` - Get category by slug
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/:id` - Update category (admin only)
- `DELETE /api/categories/:id` - Delete category (admin only)

### Brands
- `GET /api/brands` - Get all brands
- `GET /api/brands/featured` - Get featured brands
- `GET /api/brands/:id` - Get brand by ID
- `GET /api/brands/slug/:slug` - Get brand by slug
- `POST /api/brands` - Create brand (admin only)
- `PUT /api/brands/:id` - Update brand (admin only)
- `DELETE /api/brands/:id` - Delete brand (admin only)

### Orders
- `POST /api/orders` - Create new order (auth required)
- `GET /api/orders/my-orders` - Get user's orders (auth required)
- `GET /api/orders/:id` - Get order details (auth required)
- `GET /api/orders` - Get all orders (admin only)
- `GET /api/orders/stats/summary` - Get order statistics (admin only)
- `PUT /api/orders/:id/status` - Update order status (admin only)

### Health Check
- `GET /api/health` - API health check

## Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Default Credentials

After seeding the database, you can use these credentials:

**Admin Account:**
- Email: admin@luxurystore.com
- Password: admin123456

**Customer Account:**
- Email: customer@example.com
- Password: customer123456

## Sample API Calls

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"customer@example.com","password":"customer123456"}'
```

### Get Featured Products
```bash
curl http://localhost:5000/api/products/featured
```

### Get Products with Filters
```bash
curl "http://localhost:5000/api/products?category=CATEGORY_ID&minPrice=1000&maxPrice=5000&sort=-price"
```

## Frontend Integration

To integrate with the frontend:

1. Update the frontend API configuration to point to `http://localhost:5000/api`
2. Ensure CORS is properly configured (already set up in the backend)
3. Use the authentication token for protected routes
4. Handle API responses and errors appropriately

## Development

- Use `npm run dev` for development with auto-reload
- Use `npm start` for production
- MongoDB data is persisted in your local MongoDB instance

## Production Considerations

1. Change `JWT_SECRET` to a secure random string
2. Set up proper MongoDB authentication
3. Use environment-specific `.env` files
4. Implement rate limiting
5. Add request validation
6. Set up logging and monitoring
7. Use HTTPS in production