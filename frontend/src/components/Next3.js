import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Next3 = () => {
  const [lifestyle, setLifestyle] = useState('');
  const navigate = useNavigate();

  const handleNext3 = (e) => {
    e.preventDefault();
    if (lifestyle) {
      localStorage.setItem('lifestyle', lifestyle);
      navigate('/result'); // Change this to the correct next route if needed
    } else {
      alert('Please select your lifestyle before proceeding.');
    }
  };

  return (
    <div
      className="container my-4 p-4 border rounded shadow-sm"
      style={{ backgroundColor: '#d4f5e0' }}
    >
      <h2 className="mb-3 text-success">How would you describe your lifestyle?</h2>
      <h4 className="mb-3 text-success">Please select the option that best describes you.</h4>

      <form onSubmit={handleNext3}>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="lifestyle"
            id="active"
            value="Very active"
            onChange={(e) => setLifestyle(e.target.value)}
          />
          <label className="form-check-label" htmlFor="active">
            Very active - Exercise regularly, outdoors often
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="lifestyle"
            id="moderate"
            value="Moderately active"
            onChange={(e) => setLifestyle(e.target.value)}
          />
          <label className="form-check-label" htmlFor="moderate">
            Moderately active - Some exercise, mixed indoor/outdoor
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="lifestyle"
            id="sedentary"
            value="Mostly sedentary"
            onChange={(e) => setLifestyle(e.target.value)}
          />
          <label className="form-check-label" htmlFor="sedentary">
            Mostly sedentary - Indoor lifestyle, minimal exercise
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="lifestyle"
            id="stress"
            value="High stress"
            onChange={(e) => setLifestyle(e.target.value)}
          />
          <label className="form-check-label" htmlFor="stress">
            High stress - Busy schedule, irregular sleep
          </label>
        </div>

        <button type="submit" className="btn btn-success mt-3">Next</button>
      </form>
    </div>
  );
};

export default Next3;
