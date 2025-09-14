import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', {
        email,
        password
      });

      alert('✅ Registered successfully! Please login.');
      navigate('/signin');
    } catch (err) {
      if (err.response && err.response.status === 409) {
        setError('❌ User already exists.');
      } else {
        setError('⚠️ Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Create an Account</h2>
      <form onSubmit={handleRegister}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password"
            required
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Register
        </button>
      </form>

      <p className="mt-3 text-center">
        Already have an account? <Link to="/signin">Sign in here</Link>
      </p>
    </div>
  );
};

export default Register;
