import React from 'react';
import { Link } from 'react-router-dom';

const AdminCard = ({ title, image,path }) => {



  return (
    <div
      className="border mt-20 p-4 rounded shadow-md mb-20 cursor-pointer"
    >
      <img src={image} alt={title} className="w-full h-32 object-cover rounded mb-4" />
      <Link to={path}><h2 className="text-xl font-bold text-center">{title}</h2></Link>
    </div>
  );
};

export default AdminCard;
