
import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  brand,
  price,
  originalPrice,
  image,
  isNew,
  isSale
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              NEW
            </span>
          )}
          {isSale && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              SALE
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`p-2 rounded-full shadow-lg transition-all duration-200 ${
              isLiked ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="p-2 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200">
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <button className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 font-medium">
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">{brand}</h3>
          <h4 className="text-lg font-semibold text-gray-900 mt-1 group-hover:text-amber-600 transition-colors">
            {name}
          </h4>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ${price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
