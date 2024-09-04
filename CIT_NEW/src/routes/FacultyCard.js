import React, { useState } from 'react';
import axios from 'axios';
import FacultyImg from '../assets/faculty/Dummy.jpeg'

const FacultyCard = ({ faculty, onUpdate, onDelete }) => {
  const [image, setImage] = useState(faculty.image ? `http://localhost:5000/${faculty.image}` : FacultyImg); // Update the image URL



  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/jpeg') {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.put(
          `http://localhost:5000/api/faculties/${faculty._id}/image`,
          formData
        );

        setImage(`http://localhost:5000/${response.data.imageUrl}`); // Update image state with new image URL
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error as needed
      }
    } else {
      alert('Please upload a valid JPG image.');
    }
  };

  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <div className="text-center">
        <h2 className="text-xl font-bold">{faculty.name}</h2>
        <img
          src={image}
          alt={faculty.name}
          className="w-32 h-32 object-cover mt-2 mb-2 mx-auto rounded-full"
          onClick={() => document.getElementById(`file-input-${faculty._id}`).click()}
        />
        <input
          id={`file-input-${faculty._id}`}
          type="file"
          accept="image/jpeg"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <div className="text-left">
        <p>Mobile: {faculty.mobile}</p>
        <p>Experience: {faculty.experience}</p>
        <p>Designation: {faculty.designation}</p>
        <p>Department: {faculty.department}</p>
      </div>
      <div className="mt-4 text-center">
        <button
          onClick={() => onUpdate(faculty)}
          className="bg-yellow-500 text-white p-2 rounded mr-2 mb-2"
        >
          Update
        </button>
        <button
          onClick={()=> onDelete(faculty._id)}
          className="bg-red-500 text-white p-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FacultyCard;
