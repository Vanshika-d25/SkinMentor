import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Analyzing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // You can also analyze here
      navigate('/result');
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <h2 className="text-success">Analyzing your answers...</h2>
    </div>
  );
};

export default Analyzing;
