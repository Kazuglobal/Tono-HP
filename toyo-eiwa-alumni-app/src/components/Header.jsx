import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Header = ({ showBackButton = false, onBackClick, title }) => {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaDEybC0yIDRoMTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>

      <div className="relative px-4 py-3.5 flex items-center justify-between">
        {showBackButton && (
          <button
            onClick={onBackClick}
            className="absolute left-3 z-10 p-2 hover:bg-white/15 rounded-xl transition-colors backdrop-blur-sm"
          >
            <ArrowLeft size={22} />
          </button>
        )}

        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
              <span className="text-blue-600 font-bold text-base">遠</span>
            </div>
            <div>
              <h1 className="font-mincho text-lg font-bold tracking-wide drop-shadow-sm">岩手県立遠野高等学校</h1>
              <p className="text-xs text-blue-100 font-light tracking-wider">Tono High School</p>
              {title && (
                <div className="text-xs text-blue-100 font-light tracking-wider mt-0.5">
                  {title}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
    </header>
  );
};

export default Header;

