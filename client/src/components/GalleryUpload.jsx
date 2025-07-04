import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log('Environment Variable VITE_BASE_URL:', import.meta.env.VITE_BASE_URL); // Debugging log

console.log('Base URL:', BASE_URL);

const GalleryUpload = () => {
  const [image, setImage] = useState(null);
  const [formFields, setFormFields] = useState({
    title: '',
    description: '',
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log("Handle upload triggered");

    if (!image) {
      toast.error("Please select an image.");
      return;
    }

    const formData = new FormData();
    console.log("Form data created", formData);
    formData.append("image", image);
    formData.append("title", formFields.title);
    formData.append("description", formFields.description);
    formData.append("price", formFields.price || ''); // Ensure price is included

    try {
      const response = await axios.post(
       ` ${BASE_URL}/candles/new-candle`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Upload response:", response.data);
      toast.success("✅ Image uploaded successfully!");
      console.log("Upload response:", response.data);
      console.log("Image URL:", response.data.imageUrl);
      // Reset form
      setImage(null);
      setFormFields({ title: '', description: '', price: '', imageUrl: '' });

    } catch (error) {
      console.error(error);
      toast.error("❌ Upload failed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Upload Gallery Image</h2>
        <form onSubmit={handleUpload}>
          <input
            type="text"
            name="title"
            placeholder="Image Title"
            value={formFields.title}
            onChange={handleChange}
            className="mb-6 w-full p-3 border rounded-lg"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formFields.description}
            onChange={handleChange}
            className="mb-6 w-full p-3 border rounded-lg"
          />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formFields.price || ''}
              onChange={handleChange}
              className="mb-6 w-full p-3 border rounded-lg"
            />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-6 w-full"
          />
          <button
            type="submit"
            className="bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 w-full"
          >
            Upload
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2023 Ember & Essence. All rights reserved.
      </footer>
    </div>
  );
};

export default GalleryUpload;