# Luxury E-commerce Backend API

A sophisticated REST API for a luxury e-commerce platform featuring high-end products from prestigious brands like Valentino, Tiffany & Co., Rolex, Hermès, and more.

## Features

- **Product Management**: Comprehensive product catalog with detailed specifications
- **Category System**: Hierarchical category structure with subcategories
- **Brand Management**: Luxury brand showcase with detailed brand information
- **Advanced Filtering**: Filter products by price, brand, category, availability, and more
- **Search Functionality**: Full-text search across products, brands, and descriptions
- **Pagination**: Efficient pagination for large product collections
- **RESTful Design**: Clean, consistent API endpoints following REST principles
- **Type Safety**: Built with TypeScript for enhanced development experience
- **Security**: Comprehensive security measures including rate limiting and CORS
- **Documentation**: Built-in API documentation endpoint

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Security**: Helmet, CORS, Rate Limiting
- **Logging**: Morgan
- **Compression**: gzip compression for responses
- **Environment**: dotenv for configuration

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoints

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products with filtering and pagination |
| GET | `/api/products/featured` | Get featured products |
| GET | `/api/products/new` | Get new products |
| GET | `/api/products/sale` | Get sale products |
| GET | `/api/products/search?q={query}` | Search products |
| GET | `/api/products/brand/{brand}` | Get products by brand |
| GET | `/api/products/category/{category}` | Get products by category |
| GET | `/api/products/{id}` | Get product by ID |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/main` | Get main categories |
| GET | `/api/categories/{id}` | Get category by ID |
| GET | `/api/categories/{id}/subcategories` | Get subcategories |

### Brands

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/brands` | Get all brands |
| GET | `/api/brands/featured` | Get featured brands |
| GET | `/api/brands/luxury` | Get luxury brands |
| GET | `/api/brands/{id}` | Get brand by ID |

## Query Parameters

### Products Filtering

- `category` - Filter by category ID
- `brand` - Filter by brand name
- `minPrice` - Minimum price filter
- `maxPrice` - Maximum price filter
- `inStock` - Filter by availability (true/false)
- `isNew` - Filter new products (true/false)
- `isSale` - Filter sale products (true/false)
- `rating` - Minimum rating filter
- `search` - Search term for products

### Sorting

- `sortBy` - Sort by: name, price, rating, newest, popularity
- `sortOrder` - Sort order: asc, desc

### Pagination

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20, max: 100)

## Example Requests

### Get Featured Products
```bash
curl http://localhost:3001/api/products/featured
```

### Search Products
```bash
curl "http://localhost:3001/api/products/search?q=diamond"
```

### Filter Products
```bash
curl "http://localhost:3001/api/products?category=jewelry&minPrice=1000&maxPrice=20000&sortBy=price&sortOrder=asc"
```

### Get Products by Brand
```bash
curl http://localhost:3001/api/products/brand/Rolex
```

## Response Format

All API responses follow a consistent format:

```json
{
  "success": true,
  "data": [...],
  "message": "Optional message",
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error Type",
  "message": "Detailed error message"
}
```

## Data Models

### Product
- id, name, description, brand, price, originalPrice
- category, subcategory, images, inStock, stockQuantity
- isSale, isNew, isFeatured, rating, reviewCount
- tags, specifications, createdAt, updatedAt

### Category
- id, name, slug, description, image
- parentId, productCount, isActive, sortOrder
- createdAt, updatedAt

### Brand
- id, name, slug, description, logo, website
- country, foundedYear, isLuxury, isFeatured
- productCount, createdAt, updatedAt

## Environment Variables

```env
PORT=3001
NODE_ENV=development
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:5173
MAX_FILE_SIZE=5242880
UPLOAD_PATH=uploads/
```

## Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 1000 requests per 15 minutes per IP
- **Input Validation**: Request validation and sanitization
- **Error Handling**: Comprehensive error handling

## API Documentation

Visit `/api/docs` when the server is running for interactive API documentation.

## Sample Data

The API comes pre-loaded with luxury products including:

- **Fashion**: Valentino silk evening gowns, Brunello Cucinelli cashmere coats
- **Jewelry**: Tiffany & Co. diamond bracelets, Mikimoto pearl necklaces
- **Watches**: Rolex Submariner, Patek Philippe Nautilus
- **Handbags**: Hermès Birkin bags, Bottega Veneta intrecciato bags
- **Shoes**: Christian Louboutin pumps

## Development

### Project Structure

```
backend/
├── src/
│   ├── data/          # Sample data
│   ├── middleware/    # Express middleware
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   ├── types/         # TypeScript types
│   └── server.ts      # Main server file
├── dist/              # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

### Adding New Features

1. Add types to `src/types/index.ts`
2. Create service logic in `src/services/`
3. Add routes in `src/routes/`
4. Update middleware if needed

## Deployment

1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## License

MIT License - see LICENSE file for details.