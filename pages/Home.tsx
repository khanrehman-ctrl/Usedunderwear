
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Page } from '../types';

interface HomeProps {
  onExplore: () => void;
}

const Home: React.FC<HomeProps> = ({ onExplore }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/intimates-hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sustainability starts with the <span className="italic">Essentials</span>.
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light tracking-wide opacity-90">
            Curated, pre-loved luxury intimates for the eco-conscious individual. Redefining circular fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onExplore}
              className="px-8 py-3 bg-white text-stone-900 font-medium hover:bg-emerald-50 transition-colors"
            >
              Shop Collection
            </button>
            <button className="px-8 py-3 border border-white text-white font-medium hover:bg-white/10 transition-colors">
              Our Mission
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-stone-800">New Arrivals</h2>
          <div className="w-12 h-0.5 bg-emerald-700 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/fabric/800/600" 
              alt="Sustainable Fabric" 
              className="rounded-sm shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold text-stone-800 mb-6 italic">Why Pre-loved?</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              The fashion industry is one of the world's largest polluters. By choosing pre-loved essentials, you're extending the lifecycle of premium garments, reducing landfill waste, and saying no to fast-fashion cycles.
            </p>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-leaf text-emerald-700"></i>
                <span>Sanitized to medical-grade standards.</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-recycle text-emerald-700"></i>
                <span>Carbon-neutral shipping worldwide.</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-shield-heart text-emerald-700"></i>
                <span>Curated for quality and authenticity.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
