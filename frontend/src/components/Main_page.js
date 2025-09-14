import React from "react";
import { Shield, Heart, Zap } from 'lucide-react';


const Main_page = () => {
  return (
    <div>
      <h1 className="display-5 text-success fw-bold text-center my-4">
        Discover Your Perfect Skincare Routine
      </h1>
      <p
        className="lead text-muted text-center mx-auto px-2"
        style={{ maxWidth: "700px" }}
      >
        Get personalized skincare product recommendations based on your unique
        skin type and concerns. Our AI-powered analysis helps you find the
        perfect products for healthy, glowing skin.
      </p>

      <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        <button className="btn btn-success px-4 py-2">
          Start Skin Analysis
        </button>
        <button className="btn btn-outline-success px-4 py-2">
          AI Skin Analysis
        </button>
      </div>
      <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
        <h2 className="text-success fw-bold m-0">
          Why Choose SkinMaster Analysis?
        </h2>
      </div>
                <div className="container my-5">
  <div className="row g-4">
    {/* Card 1 */}
    <div className="col-md-4">
      <div className="card h-100 border-light shadow-sm hover-shadow transition">
        <div className="card-body text-center">
          <Shield size={48} className="text-success mb-3" />
          <h5 className="card-title text-success fw-bold">Science-Based</h5>
          <p className="card-text text-muted">
            Our analysis is based on dermatological research and proven skincare science to ensure accurate recommendations.
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4">
      <div className="card h-100 border-light shadow-sm hover-shadow transition">
        <div className="card-body text-center">
          <Heart size={48} className="text-success mb-3" />
          <h5 className="card-title text-success fw-bold">Personalized</h5>
          <p className="card-text text-muted">
            Every recommendation is tailored to your specific skin type, concerns, and lifestyle for optimal results.
          </p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4">
      <div className="card h-100 border-light shadow-sm hover-shadow transition">
        <div className="card-body text-center">
          <Zap size={48} className="text-success mb-3" />
          <h5 className="card-title text-success fw-bold">Quick & Easy</h5>
          <p className="card-text text-muted">
            Complete our comprehensive skin analysis in just 3 minutes and get instant product recommendations.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Main_page;
