import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Header = ({ showBackButton = false, onBackClick, title }) => {
  return (
    <header className="bg-wine-red text-white px-4 py-3 flex items-center justify-between relative">
      {showBackButton && (
        <button 
          onClick={onBackClick}
          className="absolute left-4 z-10 p-1 hover:bg-white/10 rounded"
        >
          <ArrowLeft size={24} />
        </button>
      )}
      
      <div className="flex-1 flex flex-col items-center">
        <div className="flex items-center space-x-2">
          {/* School emblem placeholder */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#1976D2] font-bold text-sm">遠</span>
          </div>
          <h1 className="font-mincho text-lg font-semibold">岩手県立遠野高等学校</h1>
        </div>
        {title && (
          <div className="mt-1 text-sm font-gothic opacity-90">
            {title}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

