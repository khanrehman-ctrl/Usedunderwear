
import React, { useState } from 'react';
import { refineListing } from '../services/geminiService';

const Sell: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    size: 'M',
    condition: 'Like New'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRefine = async () => {
    if (!formData.title || !formData.description) return;
    setLoading(true);
    const refined = await refineListing(formData.title, formData.description);
    if (refined) {
      setFormData(prev => ({ ...prev, description: refined }));
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 animate-fade-in">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-4xl font-bold text-stone-900 mb-2">Sell Your Pre-Loved Items</h1>
        <p className="text-stone-500">Contribute to circular fashion by giving your premium garments a second life.</p>
      </div>

      <div className="bg-white border border-stone-200 shadow-sm rounded-sm p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Product Title</label>
            <input 
              required
              type="text" 
              placeholder="e.g. Silk Lace Bralette"
              className="w-full border-b border-stone-200 py-2 focus:border-emerald-700 outline-none transition-colors"
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
            />
          </div>

          {/* Description + AI */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold uppercase tracking-widest text-stone-500">Description</label>
              <button 
                type="button"
                onClick={handleRefine}
                disabled={loading || !formData.description}
                className="text-[10px] font-bold text-emerald-700 flex items-center gap-1 hover:text-emerald-800 disabled:opacity-30"
              >
                <i className="fa-solid fa-wand-magic-sparkles"></i>
                {loading ? 'REFINING...' : 'AI REFINE'}
              </button>
            </div>
            <textarea 
              required
              rows={4}
              placeholder="Tell us about the fabric, fit, and origin..."
              className="w-full border border-stone-200 p-3 text-sm focus:border-emerald-700 outline-none transition-colors"
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
            />
          </div>

          {/* Row: Price, Size, Condition */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Price ($)</label>
              <input 
                required
                type="number" 
                placeholder="0.00"
                className="w-full border-b border-stone-200 py-2 focus:border-emerald-700 outline-none transition-colors"
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Size</label>
              <select 
                className="w-full border-b border-stone-200 py-2 focus:border-emerald-700 outline-none transition-colors bg-transparent"
                value={formData.size}
                onChange={e => setFormData({...formData, size: e.target.value})}
              >
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Condition</label>
              <select 
                className="w-full border-b border-stone-200 py-2 focus:border-emerald-700 outline-none transition-colors bg-transparent"
                value={formData.condition}
                onChange={e => setFormData({...formData, condition: e.target.value as any})}
              >
                <option>Like New</option>
                <option>Gently Used</option>
                <option>Vintage</option>
              </select>
            </div>
          </div>

          {/* Photo Upload Mock */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Photos</label>
            <div className="border-2 border-dashed border-stone-200 p-8 text-center rounded-sm hover:border-emerald-700 transition-colors cursor-pointer bg-stone-50">
              <i className="fa-solid fa-cloud-arrow-up text-stone-300 text-3xl mb-2"></i>
              <p className="text-sm text-stone-500">Drag & drop or click to upload</p>
              <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-tighter">Min 3 photos required for verification</p>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-stone-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2"
          >
            {success ? (
              <>
                <i className="fa-solid fa-check"></i> Listed Successfully
              </>
            ) : 'Submit Listing'}
          </button>
        </form>
      </div>

      <div className="mt-8 p-4 bg-emerald-50 border border-emerald-100 rounded flex gap-3 items-start">
        <i className="fa-solid fa-info-circle text-emerald-700 mt-0.5"></i>
        <p className="text-xs text-emerald-800 leading-relaxed">
          <strong>DevOps Tip:</strong> This "Sell" feature was developed on the <code>feature/sell-item</code> branch. 
          When you push this to GitHub, try opening a Pull Request to see how the changes would be reviewed before merging into <code>main</code>.
        </p>
      </div>
    </div>
  );
};

export default Sell;
