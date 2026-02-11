
import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange }) => {
  const navItems = [
    { id: Page.HOME, label: 'Home' },
    { id: Page.SHOP, label: 'Shop' },
    { id: Page.SELL, label: 'Sell' },
    { id: Page.ABOUT, label: 'About' },
    { id: Page.DEVOPS, label: 'DevOps Guide' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onPageChange(Page.HOME)}>
            <span className="font-serif text-2xl font-bold tracking-tight text-stone-800">ECO<span className="text-emerald-700">INTIMATES</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                  currentPage === item.id ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-stone-600'
                } py-5`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-stone-600 hover:text-emerald-700">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="text-stone-600 hover:text-emerald-700 relative">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="absolute -top-2 -right-2 bg-emerald-700 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
            <button className="md:hidden text-stone-600">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
