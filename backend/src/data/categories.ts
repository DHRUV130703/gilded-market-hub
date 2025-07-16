import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'womens-fashion',
    name: "Women's Fashion",
    slug: 'womens-fashion',
    description: 'Luxury fashion for women including dresses, accessories, and more',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 428,
    isActive: true,
    sortOrder: 1,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'mens-fashion',
    name: "Men's Fashion",
    slug: 'mens-fashion',
    description: 'Luxury fashion for men including suits, accessories, and more',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 312,
    isActive: true,
    sortOrder: 2,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'jewelry',
    name: 'Jewelry',
    slug: 'jewelry',
    description: 'Fine jewelry including diamonds, pearls, and precious metals',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 245,
    isActive: true,
    sortOrder: 3,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'watches',
    name: 'Watches',
    slug: 'watches',
    description: 'Luxury timepieces from prestigious Swiss and international brands',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 178,
    isActive: true,
    sortOrder: 4,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'handbags',
    name: 'Handbags',
    slug: 'handbags',
    description: 'Luxury handbags and leather goods from the finest fashion houses',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 189,
    isActive: true,
    sortOrder: 5,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'shoes',
    name: 'Shoes',
    slug: 'shoes',
    description: 'Designer footwear for men and women from luxury brands',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    productCount: 134,
    isActive: true,
    sortOrder: 6,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  // Subcategories for Women's Fashion
  {
    id: 'womens-dresses',
    name: 'Dresses',
    slug: 'womens-dresses',
    description: 'Elegant dresses for special occasions and everyday luxury',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    parentId: 'womens-fashion',
    productCount: 156,
    isActive: true,
    sortOrder: 1,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'womens-coats',
    name: 'Coats & Jackets',
    slug: 'womens-coats',
    description: 'Luxury outerwear for sophisticated women',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    parentId: 'womens-fashion',
    productCount: 89,
    isActive: true,
    sortOrder: 2,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  // Subcategories for Men's Fashion
  {
    id: 'mens-suits',
    name: 'Suits',
    slug: 'mens-suits',
    description: 'Tailored suits and formal wear for discerning gentlemen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    parentId: 'mens-fashion',
    productCount: 78,
    isActive: true,
    sortOrder: 1,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'mens-coats',
    name: 'Coats & Outerwear',
    slug: 'mens-coats',
    description: 'Premium outerwear and coats for men',
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    parentId: 'mens-fashion',
    productCount: 65,
    isActive: true,
    sortOrder: 2,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  // Subcategories for Jewelry
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: 'necklaces',
    description: 'Exquisite necklaces featuring diamonds, pearls, and precious stones',
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    parentId: 'jewelry',
    productCount: 67,
    isActive: true,
    sortOrder: 1,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    slug: 'bracelets',
    description: 'Luxury bracelets and tennis bracelets with precious stones',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    parentId: 'jewelry',
    productCount: 89,
    isActive: true,
    sortOrder: 2,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'rings',
    name: 'Rings',
    slug: 'rings',
    description: 'Engagement rings, wedding bands, and statement rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    parentId: 'jewelry',
    productCount: 89,
    isActive: true,
    sortOrder: 3,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];