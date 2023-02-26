import React from 'react';

const MainTemplate = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#131313', color: '#fff', height: '100%' }}>
      {children}
    </div>
  );
};

export default MainTemplate;
