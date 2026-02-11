
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { generateProductDescription } from '../services/geminiService';

const Shop: React.FC = () => {
  const [loadingAi, setLoadingAi] = useState(false);
  const [aiDescription, setAiDescription] = useState<string | null>(null);

  const handleAiDescription = async () => {
    setLoadingAi(true);
    const desc = await generateProductDescription("A mixed collection of sustainable vintage intimates including silk and organic cotton.");
    setAiDescription(desc);
    setLoadingAi(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="font-serif text-4xl font-bold text-stone-900">Sustainable Collection</h1>
          <p className="text-stone-500 mt-2">Showing all {PRODUCTS.length} responsibly sourced items</p>
        </div>
        
        <div className="flex gap-4">
          <select className="bg-white border border-stone-200 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Condition</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* AI Feature Callout */}
      <div className="mt-20 p-8 bg-emerald-50 rounded-lg border border-emerald-100 flex flex-col items-center text-center">
        <div className="bg-emerald-700 text-white p-3 rounded-full mb-4">
          <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
        </div>
        <h3 className="font-serif text-2xl font-bold text-emerald-900 mb-2">Can't decide?</h3>
        <p className="text-emerald-800 max-w-xl mb-6">
          Our Gemini AI can help describe our curate philosophy for this collection to find your perfect match.
        </p>
        <button 
          onClick={handleAiDescription}
          disabled={loadingAi}
          className="bg-emerald-700 text-white px-8 py-3 font-medium hover:bg-emerald-800 transition-colors disabled:opacity-50"
        >
          {loadingAi ? 'Generating...' : 'Get AI Style Insight'}
        </button>
        {aiDescription && (
          <div className="mt-6 p-4 bg-white rounded shadow-sm max-w-2xl border-l-4 border-emerald-700 animate-slide-up">
            <p className="text-stone-700 italic">"{aiDescription}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
