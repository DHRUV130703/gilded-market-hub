import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Brand from '../models/Brand.js';
import Category from '../models/Category.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from backend root
dotenv.config({ path: join(__dirname, '../../.env') });

const brands = [
  {
    name: 'Valentino',
    slug: 'valentino',
    logo: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=200&h=100&fit=crop',
    description: 'Italian luxury fashion house founded in 1960',
    country: 'Italy',
    foundedYear: 1960,
    website: 'https://www.valentino.com',
    isFeatured: true
  },
  {
    name: 'Tiffany & Co.',
    slug: 'tiffany-co',
    logo: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=200&h=100&fit=crop',
    description: 'Luxury jewelry and specialty retailer',
    country: 'USA',
    foundedYear: 1837,
    website: 'https://www.tiffany.com',
    isFeatured: true
  },
  {
    name: 'Rolex',
    slug: 'rolex',
    logo: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=200&h=100&fit=crop',
    description: 'Swiss luxury watch manufacturer',
    country: 'Switzerland',
    foundedYear: 1905,
    website: 'https://www.rolex.com',
    isFeatured: true
  },
  {
    name: 'Hermès',
    slug: 'hermes',
    logo: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=200&h=100&fit=crop',
    description: 'French luxury goods manufacturer',
    country: 'France',
    foundedYear: 1837,
    website: 'https://www.hermes.com',
    isFeatured: true
  },
  {
    name: 'Brunello Cucinelli',
    slug: 'brunello-cucinelli',
    logo: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=200&h=100&fit=crop',
    description: 'Italian luxury fashion brand',
    country: 'Italy',
    foundedYear: 1978,
    website: 'https://www.brunellocucinelli.com',
    isFeatured: true
  },
  {
    name: 'Mikimoto',
    slug: 'mikimoto',
    logo: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=200&h=100&fit=crop',
    description: 'Japanese luxury pearl company',
    country: 'Japan',
    foundedYear: 1893,
    website: 'https://www.mikimoto.com',
    isFeatured: true
  },
  {
    name: 'Gucci',
    slug: 'gucci',
    logo: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=200&h=100&fit=crop',
    description: 'Italian luxury fashion house',
    country: 'Italy',
    foundedYear: 1921,
    website: 'https://www.gucci.com',
    isFeatured: true
  },
  {
    name: 'Cartier',
    slug: 'cartier',
    logo: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=200&h=100&fit=crop',
    description: 'French luxury goods conglomerate',
    country: 'France',
    foundedYear: 1847,
    website: 'https://www.cartier.com',
    isFeatured: true
  }
];

const categories = [
  {
    name: 'Fashion',
    slug: 'fashion',
    description: 'Designer clothing & haute couture',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    order: 1
  },
  {
    name: 'Jewelry',
    slug: 'jewelry',
    description: 'Fine jewelry & precious stones',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    order: 2
  },
  {
    name: 'Watches',
    slug: 'watches',
    description: 'Luxury timepieces & complications',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    order: 3
  },
  {
    name: 'Accessories',
    slug: 'accessories',
    description: 'Premium bags, shoes & accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    order: 4
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Promise.all([
      Brand.deleteMany({}),
      Category.deleteMany({}),
      Product.deleteMany({}),
      User.deleteMany({})
    ]);
    console.log('Cleared existing data');

    // Insert brands
    const createdBrands = await Brand.insertMany(brands);
    console.log('Created brands:', createdBrands.length);

    // Insert categories
    const createdCategories = await Category.insertMany(categories);
    console.log('Created categories:', createdCategories.length);

    // Create sample products
    const brandMap = {};
    const categoryMap = {};
    
    createdBrands.forEach(brand => {
      brandMap[brand.name] = brand._id;
    });
    
    createdCategories.forEach(category => {
      categoryMap[category.name] = category._id;
    });

    const products = [
      // Fashion Products
      {
        name: 'Silk Evening Gown',
        brand: brandMap['Valentino'],
        category: categoryMap['Fashion'],
        description: 'Exquisite silk evening gown featuring intricate embroidery and a flowing silhouette. Perfect for gala events and special occasions.',
        price: 4500,
        originalPrice: 5200,
        images: [
          'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1566479179817-0ddb5fa87cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        colors: [
          { name: 'Midnight Blue', hex: '#191970' },
          { name: 'Champagne', hex: '#F7E7CE' }
        ],
        inStock: true,
        stockQuantity: 10,
        isSale: true,
        isFeatured: true,
        tags: ['evening wear', 'gown', 'silk', 'formal'],
        materials: ['100% Silk', 'Swarovski Crystals'],
        careInstructions: 'Dry clean only. Store in garment bag.'
      },
      {
        name: 'Cashmere Overcoat',
        brand: brandMap['Brunello Cucinelli'],
        category: categoryMap['Fashion'],
        description: 'Luxurious cashmere overcoat with impeccable Italian tailoring. Features hand-stitched details and silk lining.',
        price: 3800,
        images: [
          'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: [
          { name: 'Camel', hex: '#C19A6B' },
          { name: 'Navy', hex: '#000080' },
          { name: 'Charcoal', hex: '#36454F' }
        ],
        inStock: true,
        stockQuantity: 15,
        isNew: true,
        isFeatured: true,
        tags: ['outerwear', 'cashmere', 'coat', 'winter'],
        materials: ['100% Cashmere', 'Silk Lining'],
        careInstructions: 'Professional dry clean recommended.'
      },
      
      // Jewelry Products
      {
        name: 'Diamond Tennis Bracelet',
        brand: brandMap['Tiffany & Co.'],
        category: categoryMap['Jewelry'],
        description: 'Classic diamond tennis bracelet featuring 5 carats of round brilliant diamonds set in platinum.',
        price: 12500,
        images: [
          'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        inStock: true,
        stockQuantity: 5,
        isNew: true,
        isFeatured: true,
        tags: ['diamond', 'bracelet', 'platinum', 'luxury'],
        materials: ['Platinum', 'Diamonds (5ct total)'],
        careInstructions: 'Clean with jewelry cloth. Annual professional inspection recommended.'
      },
      {
        name: 'Pearl Necklace',
        brand: brandMap['Mikimoto'],
        category: categoryMap['Jewelry'],
        description: 'Stunning South Sea pearl necklace featuring perfectly matched 10-12mm pearls with 18k gold clasp.',
        price: 8500,
        originalPrice: 9200,
        images: [
          'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        inStock: true,
        stockQuantity: 8,
        isSale: true,
        tags: ['pearl', 'necklace', 'classic', 'elegant'],
        materials: ['South Sea Pearls', '18k Gold'],
        careInstructions: 'Store separately. Wipe with soft cloth after wearing.'
      },
      {
        name: 'Love Bracelet',
        brand: brandMap['Cartier'],
        category: categoryMap['Jewelry'],
        description: 'Iconic Love bracelet in 18k rose gold with screwdriver. A symbol of everlasting love.',
        price: 6900,
        images: [
          'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        inStock: true,
        stockQuantity: 12,
        tags: ['bracelet', 'gold', 'iconic', 'love'],
        materials: ['18k Rose Gold'],
        careInstructions: 'Polish with jewelry cloth. Avoid contact with chemicals.'
      },
      
      // Watches
      {
        name: 'Submariner GMT',
        brand: brandMap['Rolex'],
        category: categoryMap['Watches'],
        description: 'Professional diving watch with GMT function. Features ceramic bezel and Oystersteel construction.',
        price: 15800,
        images: [
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        inStock: true,
        stockQuantity: 3,
        isFeatured: true,
        tags: ['diving', 'GMT', 'luxury watch', 'sports'],
        materials: ['Oystersteel', 'Ceramic Bezel', 'Sapphire Crystal'],
        careInstructions: 'Service every 5-10 years. Rinse with fresh water after ocean use.'
      },
      {
        name: 'Tank Française',
        brand: brandMap['Cartier'],
        category: categoryMap['Watches'],
        description: 'Elegant dress watch with rectangular case in stainless steel and 18k gold.',
        price: 8200,
        images: [
          'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        inStock: true,
        stockQuantity: 6,
        tags: ['dress watch', 'classic', 'gold', 'steel'],
        materials: ['Stainless Steel', '18k Gold', 'Sapphire Crystal'],
        careInstructions: 'Regular service recommended. Avoid extreme temperatures.'
      },
      
      // Accessories
      {
        name: 'Birkin Handbag 35cm',
        brand: brandMap['Hermès'],
        category: categoryMap['Accessories'],
        description: 'The ultimate luxury handbag in Togo leather with palladium hardware. Handcrafted by a single artisan.',
        price: 22000,
        images: [
          'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'Black', hex: '#000000' },
          { name: 'Gold', hex: '#D4AF37' },
          { name: 'Etoupe', hex: '#8B7355' }
        ],
        inStock: true,
        stockQuantity: 2,
        isFeatured: true,
        tags: ['handbag', 'iconic', 'leather', 'luxury'],
        materials: ['Togo Leather', 'Palladium Hardware'],
        careInstructions: 'Store in dust bag. Condition leather annually.'
      },
      {
        name: 'Classic Loafers',
        brand: brandMap['Gucci'],
        category: categoryMap['Accessories'],
        description: 'Timeless horsebit loafers in supple leather. Made in Italy with traditional craftsmanship.',
        price: 1200,
        images: [
          'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45'],
        colors: [
          { name: 'Black', hex: '#000000' },
          { name: 'Brown', hex: '#8B4513' }
        ],
        inStock: true,
        stockQuantity: 20,
        tags: ['shoes', 'loafers', 'classic', 'leather'],
        materials: ['Italian Leather', 'Leather Sole'],
        careInstructions: 'Use shoe trees. Polish regularly.'
      },
      {
        name: 'Silk Scarf',
        brand: brandMap['Hermès'],
        category: categoryMap['Accessories'],
        description: 'Hand-printed silk scarf featuring equestrian motifs. A versatile accessory for any wardrobe.',
        price: 450,
        images: [
          'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        colors: [
          { name: 'Orange', hex: '#FF8C00' },
          { name: 'Blue', hex: '#0000FF' },
          { name: 'Pink', hex: '#FFC0CB' }
        ],
        inStock: true,
        stockQuantity: 30,
        tags: ['scarf', 'silk', 'accessory', 'classic'],
        materials: ['100% Silk Twill'],
        careInstructions: 'Dry clean only. Store flat or rolled.'
      }
    ];

    const createdProducts = await Product.insertMany(products);
    console.log('Created products:', createdProducts.length);

    // Create admin user
    const adminUser = new User({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@luxurystore.com',
      password: 'admin123456',
      role: 'admin',
      phone: '+1234567890'
    });
    await adminUser.save();
    console.log('Created admin user');

    // Create sample customer
    const customerUser = new User({
      firstName: 'John',
      lastName: 'Doe',
      email: 'customer@example.com',
      password: 'customer123456',
      role: 'customer',
      phone: '+1234567891',
      addresses: [{
        type: 'shipping',
        street: '123 Luxury Lane',
        city: 'New York',
        state: 'NY',
        country: 'USA',
        zipCode: '10001',
        isDefault: true
      }]
    });
    await customerUser.save();
    console.log('Created customer user');

    console.log('\nDatabase seeded successfully!');
    console.log('\nLogin credentials:');
    console.log('Admin: admin@luxurystore.com / admin123456');
    console.log('Customer: customer@example.com / customer123456');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
  }
}

// Run the seeder
seedDatabase();