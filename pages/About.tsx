
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl font-bold text-stone-900 mb-6">Our Philosophy</h1>
        <p className="text-xl text-stone-500 font-light leading-relaxed">
          At EcoIntimates, we believe that luxury shouldn't cost the Earth. 
          By repurposing high-quality, sanitized garments, we close the loop on fashion.
        </p>
      </div>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">The Hygiene Guarantee</h2>
            <p className="text-stone-600 leading-relaxed">
              Every item in our boutique undergoes a rigorous multi-stage sanitization process. 
              We utilize hospital-grade ozone sterilization and eco-friendly enzymatic cleaning 
              to ensure your "new-to-you" items are as pure as the day they were first made.
            </p>
          </div>
          <img src="https://picsum.photos/seed/clean/600/400" alt="Hygiene process" className="rounded shadow-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="https://picsum.photos/seed/shipping/600/400" alt="Eco Shipping" className="rounded shadow-md order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-3xl font-bold text-stone-800 mb-4">Carbon Neutral Impact</h2>
            <p className="text-stone-600 leading-relaxed">
              Our commitment goes beyond the products. Our packaging is 100% biodegradable cornstarch mailers, 
              and we offset every kilometer of delivery through reforestation projects in the Amazon.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center bg-stone-900 text-white p-12 rounded-sm">
        <h2 className="font-serif text-3xl mb-4 italic">Join the Movement</h2>
        <p className="mb-8 opacity-80">Subscribe for early access to curated vintage drops.</p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="your@email.com" 
            className="flex-1 px-4 py-3 text-stone-900 outline-none"
          />
          <button className="bg-emerald-700 px-6 py-3 font-medium hover:bg-emerald-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
