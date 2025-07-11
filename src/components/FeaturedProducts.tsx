
import React from 'react';
import ProductCard from './ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Silk Evening Gown',
    brand: 'Valentino',
    price: 4500,
    originalPrice: 5200,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isSale: true
  },
  {
    id: 2,
    name: 'Diamond Tennis Bracelet',
    brand: 'Tiffany & Co.',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 3,
    name: 'Submariner GMT',
    brand: 'Rolex',
    price: 15800,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Birkin Handbag 35cm',
    brand: 'Hermès',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Cashmere Overcoat',
    brand: 'Brunello Cucinelli',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isNew: true
  },
  {
    id: 6,
    name: 'Pearl Necklace',
    brand: 'Mikimoto',
    price: 8500,
    originalPrice: 9200,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isSale: true
  },
  {
    id: 7,
    name: 'Classic Loafers',
    brand: 'Gucci',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    name: 'Silk Scarf',
    brand: 'Hermès',
    price: 450,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked pieces from the world's most prestigious luxury brands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
