import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ for navigation

const AIAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ⬅️ React Router hook

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult('');
    }
  };

  const analyzeImage = () => {
    if (!image) return;

    setLoading(true);
    setResult('');

    setTimeout(() => {
      const types = ['Oily Skin', 'Dry Skin', 'Combination Skin', 'Normal Skin'];
      const detected = types[Math.floor(Math.random() * types.length)];
      setResult(detected);
      setLoading(false);
    }, 2000);
  };

  const handleExploreProducts = () => {
    navigate('/product', { state: { skinType: result } }); // pass detected type
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">AI Type Detection</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />

      {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-full h-auto rounded" />
        </div>
      )}

      <button
        onClick={analyzeImage}
        disabled={!image || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Analyzing...' : 'Analyze Image'}
      </button>

      {result && (
        <>
          <div className="mt-4 p-2 bg-green-100 border border-green-400 rounded">
            <strong>Detected Type:</strong> {result}
          </div>

          <button
            onClick={handleExploreProducts}
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
          >
            Explore Products
          </button>
        </>
      )}
    </div>
  );
};

export default AIAnalyzer;
