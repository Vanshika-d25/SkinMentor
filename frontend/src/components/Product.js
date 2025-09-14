import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [skinType, setSkinType] = useState(localStorage.getItem('skinType') || '');
  const [error, setError] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products?skinType=${skinType}`);
        setProducts(res.data);
      } catch (err) {
        setError('No products found for the selected skin type.');
        console.error(err);
      }
    };

    if (skinType) {
      fetchProducts();
    }
  }, [skinType]);

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-success">Recommended Products for {skinType} Skin</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-success">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold">₹{product.price}</p>
                <button
                  className="btn btn-outline-success w-100"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
