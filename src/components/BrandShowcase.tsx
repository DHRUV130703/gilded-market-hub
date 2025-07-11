
import React from 'react';

const brands = [
  { name: 'Hermès', logo: 'H' },
  { name: 'Chanel', logo: 'C' },
  { name: 'Louis Vuitton', logo: 'LV' },
  { name: 'Gucci', logo: 'G' },
  { name: 'Prada', logo: 'P' },
  { name: 'Dior', logo: 'D' },
  { name: 'Cartier', logo: 'C' },
  { name: 'Rolex', logo: 'R' }
];

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prestigious Partners</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We partner with the world's most coveted luxury brands to bring you authentic, exclusive pieces
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-400 transition-colors duration-300">
                <span className="text-black font-bold text-xl">{brand.logo}</span>
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Join our exclusive network of luxury brand partners</p>
          <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-md font-semibold transition-all duration-300">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
