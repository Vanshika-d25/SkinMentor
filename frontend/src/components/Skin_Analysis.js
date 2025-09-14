import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Skin_Analysis = () => {
  const navigate = useNavigate();
  const [selectedSkinType, setSelectedSkinType] = useState('');

  const handleNext = (e) => {
    e.preventDefault();
    if (selectedSkinType) {
      localStorage.setItem('skinType', selectedSkinType);
      navigate('/next1');
    } else {
      alert('Please select your skin type before proceeding.');
    }
  };

  const handleChange = (event) => {
    setSelectedSkinType(event.target.value);
  };

  return (
    <div
      className="container my-4 p-4 border rounded shadow-sm"
      style={{ backgroundColor: '#d4f5e0' }}
    >
      <h2 className="mb-3 text-success">How would you describe your skin type?</h2>
      <h4 className="mb-3 text-success">Choose your skin type:</h4>

      <form onSubmit={handleNext}>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinType"
            id="oily"
            value="Oily"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="oily">
            Oily – Shiny, large pores, prone to breakouts
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinType"
            id="dry"
            value="Dry"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="dry">
            Dry – Tight, flaky, rough texture
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinType"
            id="combo"
            value="Combination"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="combo">
            Combination – Oily T-zone, dry cheeks
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinType"
            id="normal"
            value="Normal"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="normal">
            Normal – Balanced, few imperfections
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinType"
            id="sensitive"
            value="Sensitive"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="sensitive">
            Sensitive – Easily irritated, reactive
          </label>
        </div>

        <button type="submit" className="btn btn-success mt-3">
          Next
        </button>
      </form>
    </div>
  );
};

export default Skin_Analysis;
