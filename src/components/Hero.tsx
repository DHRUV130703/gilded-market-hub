
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the World's Most
            <span className="block text-amber-400">Coveted Luxury</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Curated collections from the most prestigious brands. 
            Experience exclusivity, craftsmanship, and timeless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 flex items-center justify-center group">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300">
              View Brands
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
