import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('All fields are required!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });

      // Store user info and token in localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token); // optional

      navigate('/'); // Redirect to homepage
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Invalid email or password');
      } else {
        console.error('Login error:', err);
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Sign In</h2>
      <form onSubmit={handleLogin}>
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
            placeholder="Enter your password"
            required
          />
        </div>

        <button className="btn btn-success w-100" type="submit">
          Sign In
        </button>
      </form>

      <p className="mt-3 text-center">
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default SignIn;
