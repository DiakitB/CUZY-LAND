import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

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
    formData.append("image", image);
    formData.append("title", formFields.title);
    formData.append("description", formFields.description);

    try {
      const response = await axios.post(
        "http://192.168.2.40:3000/api/gallery/upload",
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
      console.log("Image URL:", response.data.fileUrl);
      // Reset form
      setImage(null);
      setFormFields({ title: '', description: '' });
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