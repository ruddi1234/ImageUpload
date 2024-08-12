import React, { useState, useEffect } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // Retrieve the image URL from localStorage on component mount
    const storedImageUrl = localStorage.getItem('uploadedImageUrl');
    if (storedImageUrl) {
      setImageUrl(storedImageUrl);
    }
  }, []);

  const handleImageChange = (e) => {
    setLoading(true); // Start loader

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const url = reader.result;
      setImage(url);
      setImageUrl(url);
      // Store the image URL in localStorage
      localStorage.setItem('uploadedImageUrl', url);
      setLoading(false); 
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = () => {
    // Clear the image from state and localStorage
    setImage(null);
    setImageUrl('');
    localStorage.removeItem('uploadedImageUrl');
  };

  return (
    <div className="image-upload">
        {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
      <label htmlFor="file-input" className="upload-button">
        Select Image
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      {image && (
        <div>
          <img
            src={image}
            alt="Uploaded Preview"
            className="image-preview"
          />
          <button onClick={handleClearImage} className="clear-button">
            Clear Image
          </button>
        </div>
      )}
      <input
        type="text"
        value={imageUrl}
        readOnly
        className="image-url-input"
        placeholder="Image URL will appear here"
      />
    </div>
  );
};

export default ImageUpload;
