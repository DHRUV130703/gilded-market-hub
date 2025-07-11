
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import BrandShowcase from '../components/BrandShowcase';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BrandShowcase />
      <Footer />
    </div>
  );
};

export default Index;
