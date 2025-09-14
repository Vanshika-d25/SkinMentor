import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Next1 = () => {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const handleNext1 = (e) => {
    e.preventDefault();
    if (answer) {
      localStorage.setItem('skinConcern', answer);
      navigate('/next2');
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  return (
    <div
      className="container my-4 p-4 border rounded shadow-sm"
      style={{ backgroundColor: '#d4f5e0' }}
    >
      <h2 className="mb-3 text-success">What are your main skin concerns?</h2>
      <h4 className="mb-3 text-success">Please select the option that best describes you.</h4>

      <form onSubmit={handleNext1}>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinConcern"
            id="acne"
            value="Acne and breakouts"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label" htmlFor="acne">
            Acne and breakouts
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinConcern"
            id="wrinkles"
            value="Fine lines and wrinkles"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label" htmlFor="wrinkles">
            Fine lines and wrinkles
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinConcern"
            id="darkspots"
            value="Dark spots and hyperpigmentation"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label" htmlFor="darkspots">
            Dark spots and hyperpigmentation
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinConcern"
            id="dulltone"
            value="Dull and uneven skin tone"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label" htmlFor="dulltone">
            Dull and uneven skin tone
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinConcern"
            id="pores"
            value="Large pores"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label" htmlFor="pores">
            Large pores
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinConcern"
            id="redness"
            value="Redness and irritation"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label" htmlFor="redness">
            Redness and irritation
          </label>
        </div>

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="radio"
            name="skinConcern"
            id="dryness"
            value="Dryness and dehydration"
            onChange={(e) => setAnswer(e.target.value)}
          />
          <label className="form-check-label" htmlFor="dryness">
            Dryness and dehydration
          </label>
        </div>

        <button type="submit" className="btn btn-success mt-3">Next</button>
      </form>
    </div>
  );
};

export default Next1;
