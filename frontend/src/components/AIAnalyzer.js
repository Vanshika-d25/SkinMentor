import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AIAnalyzer = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult('');
    }
  };

  const analyzeImage = async () => {
    if (!image) return;
    setLoading(true);
    setResult('');

    try {
      const formData = new FormData();
      formData.append('image', image);

      console.log("📤 Sending image to backend:", image.name);

      const res = await axios.post('http://localhost:5000/api/analyze', formData);

      console.log("✅ Backend response:", res.data);

      if (res.data.skinType) {
        setResult(res.data.skinType);
        localStorage.setItem('skinType', res.data.skinType);
      } else {
        alert('No skin type detected. Try again.');
      }
    } catch (err) {
      console.error("❌ Error analyzing image:", err);
      alert(`Error analyzing image: ${err.response?.data?.error || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleExploreProducts = () => {
    navigate('/product');
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
