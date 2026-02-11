
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-800">
            {product.condition}
          </span>
        </div>
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 bg-white/90 backdrop-blur-sm py-2 text-sm font-medium text-stone-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Quick View
        </button>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-stone-900">{product.name}</h3>
          <p className="mt-1 text-xs text-stone-500 italic">{product.brand}</p>
        </div>
        <p className="text-sm font-semibold text-stone-900">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
