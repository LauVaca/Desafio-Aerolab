import React from 'react';
import electro from '../../icons/headerx2.png';

function Categoria() {
  return (
    <div className="image">
      <div className="textoimagen">Electronics</div>
      <img alt="Electronics" src={electro} className="imgElectro" />
    </div>
  );
}

export default Categoria;
