import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="container bg-white py-4 px-4 rounded shadow-sm my-3">
      <div className="d-flex align-items-center gap-2 mb-2">
       
        <h2 className="text-success fw-bold m-0">SkinMentor</h2>
      </div>

      <div className='nav-bar d-flex justify-content-between align-items-center'>
        <ul className="nav mb-2">
          <li className="nav-item">
            <Link to="/skinAnalysis" className="nav-link text-success fw-semibold hover-opacity">
              Skin Analysis
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AIanalyze" className="nav-link text-success fw-semibold">
              AI Analysis
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link text-success fw-semibold">
              Products
            </Link>
          </li>
        </ul>

        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-success px-3 d-flex align-items-center gap-1"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart size={18} />
            Cart
          </button>
          <Link to="/signin">
  <button className="btn btn-success px-3 d-flex align-items-center gap-1">
    <User size={18} />
    Sign In
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
