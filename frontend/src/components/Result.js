// src/components/Result.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Result = () => {
  const [products, setProducts] = useState([]);
  const skinType = localStorage.getItem('skinType'); // This was stored after quiz

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products?skinType=${skinType}`);
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (skinType) fetchProducts();
  }, [skinType]);

  return (
    <div className="container">
      <h2 className="text-success mb-4">Recommended Products for {skinType} Skin</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card shadow-sm p-3 h-100">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="text-muted">{product.price}</p>
                <button className="btn btn-success">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
