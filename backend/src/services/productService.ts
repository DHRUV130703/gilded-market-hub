import { Product, SearchFilters, ApiResponse } from '../types';
import { products } from '../data/products';

export class ProductService {
  static getAllProducts(filters: SearchFilters = {}): ApiResponse<Product[]> {
    let filteredProducts = [...products];

    // Apply filters
    if (filters.category) {
      filteredProducts = filteredProducts.filter(p => 
        p.category === filters.category || p.subcategory === filters.category
      );
    }

    if (filters.brand) {
      filteredProducts = filteredProducts.filter(p => 
        p.brand.toLowerCase().includes(filters.brand!.toLowerCase())
      );
    }

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.brand.toLowerCase().includes(searchTerm) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    if (filters.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice!);
    }

    if (filters.inStock !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.inStock === filters.inStock);
    }

    if (filters.isNew !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.isNew === filters.isNew);
    }

    if (filters.isSale !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.isSale === filters.isSale);
    }

    if (filters.rating !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.rating >= filters.rating!);
    }

    // Apply sorting
    if (filters.sortBy) {
      filteredProducts.sort((a, b) => {
        let aValue: any, bValue: any;
        
        switch (filters.sortBy) {
          case 'name':
            aValue = a.name.toLowerCase();
            bValue = b.name.toLowerCase();
            break;
          case 'price':
            aValue = a.price;
            bValue = b.price;
            break;
          case 'rating':
            aValue = a.rating;
            bValue = b.rating;
            break;
          case 'newest':
            aValue = a.createdAt;
            bValue = b.createdAt;
            break;
          case 'popularity':
            aValue = a.reviewCount;
            bValue = b.reviewCount;
            break;
          default:
            return 0;
        }

        if (filters.sortOrder === 'desc') {
          return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
        } else {
          return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
        }
      });
    }

    // Apply pagination
    const page = filters.page || 1;
    const limit = filters.limit || 20;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    return {
      success: true,
      data: paginatedProducts,
      pagination: {
        page,
        limit,
        total: filteredProducts.length,
        pages: Math.ceil(filteredProducts.length / limit)
      }
    };
  }

  static getProductById(id: string): ApiResponse<Product> {
    const product = products.find(p => p.id === id);
    
    if (!product) {
      return {
        success: false,
        error: 'Product not found',
        message: `Product with ID ${id} does not exist`
      };
    }

    return {
      success: true,
      data: product
    };
  }

  static getFeaturedProducts(): ApiResponse<Product[]> {
    const featuredProducts = products.filter(p => p.isFeatured);
    
    return {
      success: true,
      data: featuredProducts
    };
  }

  static getNewProducts(): ApiResponse<Product[]> {
    const newProducts = products.filter(p => p.isNew);
    
    return {
      success: true,
      data: newProducts
    };
  }

  static getSaleProducts(): ApiResponse<Product[]> {
    const saleProducts = products.filter(p => p.isSale);
    
    return {
      success: true,
      data: saleProducts
    };
  }

  static getProductsByBrand(brand: string): ApiResponse<Product[]> {
    const brandProducts = products.filter(p => 
      p.brand.toLowerCase() === brand.toLowerCase()
    );
    
    return {
      success: true,
      data: brandProducts
    };
  }

  static getProductsByCategory(category: string): ApiResponse<Product[]> {
    const categoryProducts = products.filter(p => 
      p.category === category || p.subcategory === category
    );
    
    return {
      success: true,
      data: categoryProducts
    };
  }

  static searchProducts(query: string): ApiResponse<Product[]> {
    const searchTerm = query.toLowerCase();
    const searchResults = products.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.brand.toLowerCase().includes(searchTerm) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    return {
      success: true,
      data: searchResults
    };
  }
}