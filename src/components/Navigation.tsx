
import React, { useState } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black tracking-tight">LUXURIA</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Fashion</a>
              <a href="#" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Jewelry</a>
              <a href="#" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Watches</a>
              <a href="#" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Accessories</a>
              <a href="#" className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
            </div>
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search luxury items..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
            
            <button className="p-2 text-gray-700 hover:text-amber-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-amber-600 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-900 hover:text-amber-600 transition-colors">Fashion</a>
              <a href="#" className="block px-3 py-2 text-gray-900 hover:text-amber-600 transition-colors">Jewelry</a>
              <a href="#" className="block px-3 py-2 text-gray-900 hover:text-amber-600 transition-colors">Watches</a>
              <a href="#" className="block px-3 py-2 text-gray-900 hover:text-amber-600 transition-colors">Accessories</a>
              <a href="#" className="block px-3 py-2 text-gray-900 hover:text-amber-600 transition-colors">Home</a>
              <div className="px-3 py-2">
                <input
                  type="text"
                  placeholder="Search luxury items..."
                  className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
