import React, { useState } from "react";
import img from "../assets/Event/Lakshy3.jpg";
import img1 from "../assets/Event/seminar4.jpg";
import img2 from "../assets/Event/cp7.jpg";
import img3 from "../assets/Event/cp-3.jpg"; // Add the image for the hostel

const Facilities = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const facilities = [
    {
      id: 1,
      name: "Classrooms",
      image: img1,
      url: "/ClassroomPage",
    },
    {
      id: 2,
      name: "Library",
      image:
        "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      url: "/Library", // Example URL for Library
    },
    {
      id: 3,
      name: "Lab",
      image: img2,
      url: "/Lab", // Example URL for Labs
    },
    {
      id: 4,
      name: "Sports Facilities",
      image: img,
      url: "/Sports", // Example URL for Sports Facilities
    },
    {
      id: 5,
      name: "Hostel",
      image: img3,
      url: "/Hostel", // Example URL for Hostel
    },
  ];

  const handleClick = (url) => {
    // Handle navigation programmatically
    window.location.href = url;
  };

  return (
    <div className="mt-40 p-4">
      <h1 className="text-5xl font-bold mb-8 text-center">Facilities</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleClick(facility.url)}
            onMouseEnter={() => setHoveredId(facility.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={facility.image}
              alt={facility.name}
              className="w-full h-full transition duration-300 transform hover:scale-105"
            />
            <div
              className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                opacity: hoveredId === facility.id ? 1 : 0.5,
                transition: "opacity 0.3s ease",
              }}
            >
              {facility.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
