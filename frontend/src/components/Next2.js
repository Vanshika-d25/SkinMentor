import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Next2 = () => {
  const [ageRange, setAgeRange] = useState('');
  const navigate = useNavigate();

  const handleNext2 = (e) => {
    e.preventDefault();
    if (ageRange) {
      localStorage.setItem('ageRange', ageRange);
      navigate('/analysing');
    } else {
      alert('Please select your age range before proceeding.');
    }
  };

  return (
    <div
      className="container my-4 p-4 border rounded shadow-sm"
      style={{ backgroundColor: '#d4f5e0' }}
    >
      <h2 className="mb-3 text-success">What is your age range?</h2>
      <h4 className="mb-3 text-success">Please select the option that best describes you.</h4>

      <form onSubmit={handleNext2}>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="ageRange"
            id="under20"
            value="Under 20"
            onChange={(e) => setAgeRange(e.target.value)}
          />
          <label className="form-check-label" htmlFor="under20">
            Under 20
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="ageRange"
            id="20to29"
            value="20-29"
            onChange={(e) => setAgeRange(e.target.value)}
          />
          <label className="form-check-label" htmlFor="20to29">
            20-29
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="ageRange"
            id="30to39"
            value="30-39"
            onChange={(e) => setAgeRange(e.target.value)}
          />
          <label className="form-check-label" htmlFor="30to39">
            30-39
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="ageRange"
            id="40to49"
            value="40-49"
            onChange={(e) => setAgeRange(e.target.value)}
          />
          <label className="form-check-label" htmlFor="40to49">
            40-49
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="ageRange"
            id="50plus"
            value="50+"
            onChange={(e) => setAgeRange(e.target.value)}
          />
          <label className="form-check-label" htmlFor="50plus">
            50+
          </label>
        </div>

        <button type="submit" className="btn btn-success mt-3">Next</button>
      </form>
    </div>
  );
};

export default Next2;
