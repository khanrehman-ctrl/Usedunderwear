
import React from 'react';
import { DEVOPS_STEPS } from '../constants';

const DevOps: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
      <div className="bg-emerald-900 text-white p-12 rounded-xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <i className="fa-solid fa-code-branch text-9xl"></i>
        </div>
        <div className="relative z-10">
          <h1 className="font-serif text-4xl font-bold mb-4">DevOps & Branching Guide</h1>
          <p className="text-emerald-100 max-w-2xl text-lg leading-relaxed">
            Since you're using this project to learn GitHub and DevOps, we've integrated a guide 
            on how to manage this codebase effectively. Master the art of the branch.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {DEVOPS_STEPS.map((step, idx) => (
          <div key={idx} className="bg-white p-8 border border-stone-200 hover:border-emerald-500 transition-all group">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 flex items-center justify-center rounded-lg mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
              <i className={`fa-solid ${step.icon} text-xl`}></i>
            </div>
            <h3 className="font-bold text-stone-900 mb-3">{step.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{step.content}</p>
          </div>
        ))}
      </div>

      <div className="bg-stone-100 p-8 rounded-lg border border-stone-200">
        <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">Practical Exercise: The Sell Page</h2>
        <p className="text-stone-600 mb-6 text-sm">
          Imagine you were tasked with adding the "Sell" tab. Instead of working on <code>main</code>, you would follow this flow:
        </p>
        <div className="space-y-4">
          <div className="bg-stone-800 p-6 rounded font-mono text-emerald-400 text-sm overflow-x-auto">
            <p className="mb-2 text-stone-500"># 1. Create a branch for the new feature</p>
            <p className="mb-4">git checkout -b feature/sell-page</p>
            
            <p className="mb-2 text-stone-500"># 2. After editing Sell.tsx, stage your work</p>
            <p className="mb-4">git add pages/Sell.tsx types.ts Navbar.tsx</p>
            
            <p className="mb-2 text-stone-500"># 3. Commit with a meaningful message</p>
            <p className="mb-4">git commit -m "feat: add sell item form with AI assistance"</p>
            
            <p className="mb-2 text-stone-500"># 4. Push to GitHub to create a Pull Request</p>
            <p className="mb-0">git push origin feature/sell-page</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-yellow-50 border border-yellow-100 rounded-lg flex items-start gap-4">
        <i className="fa-solid fa-lightbulb text-yellow-600 mt-1"></i>
        <div>
          <h4 className="font-bold text-yellow-800 text-sm uppercase tracking-wider mb-1">DevOps Pro Tip</h4>
          <p className="text-yellow-700 text-sm">
            In a real work environment, your Pull Request would trigger a <strong>CI (Continuous Integration)</strong> pipeline 
            that automatically builds your React code and runs tests to make sure you didn't break the "Shop" or "Home" pages!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
