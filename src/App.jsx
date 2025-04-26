import React from 'react';
import './App.css';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="py-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            AiLevate
          </span>
        </h1>
        <p className="text-xl text-slate-300">Elevate Your Business with AI</p>
      </div>
      
      <Features />
      
      <footer className="py-8 text-center text-slate-400">
        <p>© 2023 AiLevate. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App; 