import React, { useState } from 'react';

const Baitap1 = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1', code: 'P001', price: 10 },
    { name: 'Product 2', code: 'P002', price: 20 },
    { name: 'Product 3', code: 'P003', price: 30 }
  ]);

  return (
    <div>
      <h2>Product</h2>
      <ul>
        {products.map(product => (
          <li key={product.code}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Baitap1;
