import { Product } from '../types';

export const products: Product[] = [
  // Featured Products from Frontend
  {
    id: '1',
    name: 'Silk Evening Gown',
    description: 'Exquisite silk evening gown crafted from the finest Italian silk. Features intricate beadwork and a flowing silhouette perfect for gala events and special occasions.',
    brand: 'Valentino',
    price: 4500,
    originalPrice: 5200,
    category: 'womens-fashion',
    subcategory: 'womens-dresses',
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566479179817-c3e5b9a0f8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 8,
    isSale: true,
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 24,
    tags: ['silk', 'evening', 'gown', 'formal', 'luxury'],
    specifications: {
      'Material': '100% Silk',
      'Color': 'Midnight Blue',
      'Sizes': 'XS, S, M, L',
      'Care': 'Dry Clean Only',
      'Origin': 'Made in Italy'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Diamond Tennis Bracelet',
    description: 'Classic diamond tennis bracelet featuring 5 carats of brilliant-cut diamonds set in 18k white gold. A timeless piece that adds elegance to any ensemble.',
    brand: 'Tiffany & Co.',
    price: 12500,
    category: 'jewelry',
    subcategory: 'bracelets',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 3,
    isSale: false,
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 18,
    tags: ['diamond', 'tennis', 'bracelet', 'white gold', 'luxury'],
    specifications: {
      'Metal': '18k White Gold',
      'Diamonds': '5 Carats Total Weight',
      'Cut': 'Brilliant Cut',
      'Clarity': 'VS1-VS2',
      'Length': '7 inches'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '3',
    name: 'Submariner GMT',
    description: 'Iconic Rolex Submariner GMT with dual time zone functionality. Features a unidirectional rotating bezel and is water resistant to 300 meters.',
    brand: 'Rolex',
    price: 15800,
    category: 'watches',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1548169874-53e85f753f50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 2,
    isSale: false,
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviewCount: 45,
    tags: ['rolex', 'submariner', 'gmt', 'luxury', 'swiss'],
    specifications: {
      'Movement': 'Automatic',
      'Case Material': 'Oystersteel',
      'Diameter': '40mm',
      'Water Resistance': '300m',
      'Bezel': 'Unidirectional Rotating'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '4',
    name: 'Birkin Handbag 35cm',
    description: 'The ultimate luxury handbag, handcrafted by skilled artisans in premium Togo leather. Each bag is a masterpiece of craftsmanship and exclusivity.',
    brand: 'Hermès',
    price: 22000,
    category: 'handbags',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566479179817-c3e5b9a0f8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 1,
    isSale: false,
    isNew: false,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 12,
    tags: ['birkin', 'hermes', 'handbag', 'luxury', 'leather'],
    specifications: {
      'Size': '35cm',
      'Material': 'Togo Leather',
      'Hardware': 'Palladium',
      'Color': 'Noir (Black)',
      'Origin': 'Made in France'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '5',
    name: 'Cashmere Overcoat',
    description: 'Luxurious cashmere overcoat from the finest Mongolian cashmere. Impeccably tailored for the modern gentleman who appreciates quality and style.',
    brand: 'Brunello Cucinelli',
    price: 3800,
    category: 'mens-fashion',
    subcategory: 'mens-coats',
    images: [
      'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 5,
    isSale: false,
    isNew: true,
    isFeatured: true,
    rating: 4.7,
    reviewCount: 8,
    tags: ['cashmere', 'overcoat', 'mens', 'luxury', 'italian'],
    specifications: {
      'Material': '100% Cashmere',
      'Color': 'Charcoal Grey',
      'Sizes': 'S, M, L, XL',
      'Lining': 'Silk',
      'Origin': 'Made in Italy'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '6',
    name: 'Pearl Necklace',
    description: 'Exquisite cultured pearl necklace featuring perfectly matched Akoya pearls. A symbol of elegance and sophistication.',
    brand: 'Mikimoto',
    price: 8500,
    originalPrice: 9200,
    category: 'jewelry',
    subcategory: 'necklaces',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 4,
    isSale: true,
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    reviewCount: 15,
    tags: ['pearl', 'necklace', 'akoya', 'luxury', 'japanese'],
    specifications: {
      'Pearl Type': 'Akoya Cultured Pearls',
      'Size': '7-7.5mm',
      'Length': '18 inches',
      'Clasp': '14k White Gold',
      'Luster': 'AAA'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  // Additional Products
  {
    id: '7',
    name: 'So Kate Pumps',
    description: 'Iconic Christian Louboutin pumps with signature red lacquered soles. The ultimate statement in luxury footwear.',
    brand: 'Christian Louboutin',
    price: 745,
    category: 'shoes',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 12,
    isSale: false,
    isNew: false,
    isFeatured: false,
    rating: 4.6,
    reviewCount: 89,
    tags: ['louboutin', 'pumps', 'red sole', 'luxury', 'french'],
    specifications: {
      'Heel Height': '120mm',
      'Material': 'Patent Leather',
      'Color': 'Black',
      'Sizes': '35-42',
      'Origin': 'Made in Italy'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '8',
    name: 'Nautilus 5711',
    description: 'The legendary Patek Philippe Nautilus with its distinctive porthole design. One of the most coveted luxury sports watches.',
    brand: 'Patek Philippe',
    price: 68000,
    category: 'watches',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: false,
    stockQuantity: 0,
    isSale: false,
    isNew: false,
    isFeatured: true,
    rating: 5.0,
    reviewCount: 23,
    tags: ['patek philippe', 'nautilus', 'luxury', 'swiss', 'sports watch'],
    specifications: {
      'Movement': 'Automatic Caliber 26-330 S C',
      'Case Material': 'Stainless Steel',
      'Diameter': '40mm',
      'Water Resistance': '120m',
      'Power Reserve': '45 hours'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '9',
    name: 'Love Bracelet',
    description: 'Cartier\'s iconic Love bracelet in 18k rose gold. A symbol of unbreakable love that locks around the wrist.',
    brand: 'Cartier',
    price: 7200,
    category: 'jewelry',
    subcategory: 'bracelets',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 6,
    isSale: false,
    isNew: false,
    isFeatured: false,
    rating: 4.9,
    reviewCount: 156,
    tags: ['cartier', 'love', 'bracelet', 'rose gold', 'luxury'],
    specifications: {
      'Metal': '18k Rose Gold',
      'Width': '6.1mm',
      'Closure': 'Screw System',
      'Size': '17',
      'Origin': 'Made in France'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '10',
    name: 'Intrecciato Handbag',
    description: 'Signature Bottega Veneta handbag featuring the iconic intrecciato weave in buttery soft nappa leather.',
    brand: 'Bottega Veneta',
    price: 3200,
    category: 'handbags',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockQuantity: 8,
    isSale: false,
    isNew: true,
    isFeatured: false,
    rating: 4.7,
    reviewCount: 34,
    tags: ['bottega veneta', 'intrecciato', 'handbag', 'leather', 'luxury'],
    specifications: {
      'Material': 'Nappa Leather',
      'Technique': 'Intrecciato Weave',
      'Color': 'Fondant',
      'Dimensions': '27 x 19 x 11 cm',
      'Origin': 'Made in Italy'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];