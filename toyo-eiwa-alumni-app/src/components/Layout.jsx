import React, { useState } from 'react';
import Header from './Header';
import TabBar from './TabBar';

const Layout = ({ children, showBackButton = false, onBackClick, headerTitle }) => {
  return (
    <div className="mobile-container font-gothic">
      <Header 
        showBackButton={showBackButton}
        onBackClick={onBackClick}
        title={headerTitle}
      />
      
      <main className="flex-1 overflow-y-auto pb-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;

