import React from 'react';

const Brand = ({ children, onLogoClick }: any) => {
  return (
    <div className="flex items-center justify-between brand-area">
      <div className="flex items-center brand" onClick={onLogoClick}>
        <img src="/assets/images/logo.png" alt="company-logo" />
        <span className="brand__text">Razzle</span>
      </div>
      {children}
    </div>
  );
};

export default Brand;
