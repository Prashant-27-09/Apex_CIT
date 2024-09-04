import React, { useRef, useState } from 'react';
import axios from 'axios';

const EventSidebar = ({ Events, changeEventName }) => {
  const fileInputRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCategory('');
    setSelectedFile(null);
  };

  const handleSubmit = async () => {
    if (!selectedFile || !selectedCategory) {
      alert('Please select both a file and a category.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('category', selectedCategory);

    try {
      const response = await axios.post('http://localhost:5000/api/event-images/upload', formData);

      console.log(response.data);
      // Handle success, update UI, etc.
      closeModal();
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error as needed
    }
  };

  return (
    <div className="w-full lg:w-1/4 p-4 bg-gray-100 h-screen">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white p-2 rounded object-cover mt-2 mb-2 mx-auto"
      >
        Upload image
      </button>

      <h3 className="font-bold mb-2 mt-4">Event Gallery</h3>
      <ul>
        <li
          className="cursor-pointer p-2 hover:bg-gray-200"
          onClick={() => changeEventName('')}
        >
          All
        </li>
        {Events.map((event) => (
          <li
            key={event}
            className="cursor-pointer p-2 hover:bg-gray-200"
            onClick={() => changeEventName(event)}
          >
            {event}
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10">
            <h2 className="text-xl font-bold mb-4">Upload Image</h2>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg"
              className="block mb-2"
              onChange={handleFileChange}
            />
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="block w-full p-2 border rounded mb-4"
            >
              <option value="">Select Category</option>
              {Events.map((event) => (
                <option key={event} value={event}>
                  {event}
                </option>
              ))}
            </select>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white p-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSidebar;
