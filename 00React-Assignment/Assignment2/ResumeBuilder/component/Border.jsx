import React from 'react';

const Border = ({ children, borderColor, borderWidth, borderStyle }) => {
  const borderStyleObject = {
    borderColor: borderColor || 'black',
    borderWidth: borderWidth || '1px',
    borderStyle: borderStyle || 'solid',
    padding: '10px', // You can adjust this padding as needed
  };

  return (
    <div style={borderStyleObject}>
      {children}
    </div>
  );
};

export default Border;

