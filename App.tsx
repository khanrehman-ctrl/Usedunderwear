
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Sell from './pages/Sell';
import About from './pages/About';
import DevOps from './pages/DevOps';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onExplore={() => setCurrentPage(Page.SHOP)} />;
      case Page.SHOP:
        return <Shop />;
      case Page.SELL:
        return <Sell />;
      case Page.ABOUT:
        return <About />;
      case Page.DEVOPS:
        return <DevOps />;
      default:
        return <Home onExplore={() => setCurrentPage(Page.SHOP)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-tight text-white mb-6 block">ECO<span className="text-emerald-500">INTIMATES</span></span>
            <p className="text-sm opacity-60 leading-relaxed">
              Leading the revolution in sustainable, circular luxury. Because the most sustainable garment is the one already made.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setCurrentPage(Page.HOME)} className="hover:text-emerald-500 transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage(Page.SHOP)} className="hover:text-emerald-500 transition-colors">Shop All</button></li>
              <li><button onClick={() => setCurrentPage(Page.SELL)} className="hover:text-emerald-500 transition-colors">Sell Items</button></li>
              <li><button onClick={() => setCurrentPage(Page.ABOUT)} className="hover:text-emerald-500 transition-colors">Our Mission</button></li>
              <li><button onClick={() => setCurrentPage(Page.DEVOPS)} className="hover:text-emerald-500 transition-colors">DevOps Guide</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Customer Care</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">Hygiene Policy</li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">Shipping & Returns</li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">Sustainability Report</li>
              <li className="hover:text-emerald-500 cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <i className="fa-brands fa-instagram text-xl hover:text-white cursor-pointer transition-colors"></i>
              <i className="fa-brands fa-pinterest text-xl hover:text-white cursor-pointer transition-colors"></i>
              <i className="fa-brands fa-tiktok text-xl hover:text-white cursor-pointer transition-colors"></i>
            </div>
            <p className="text-xs opacity-50">© 2024 EcoIntimates. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Tailwind fade-in and slide-up animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
