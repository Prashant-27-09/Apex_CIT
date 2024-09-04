import React from "react";
import bgimg from "./../assets/Event/1.png";
import { Link, Route, Routes } from "react-router-dom";
import DepartmentDetails from "./DepartmentDetails";

const departments = [
  {
    id: "cs",
    name: "Computer Science & Engineering",
    description: "Focuses on computing, programming, and software development.",
  },
  {
    id: "me",
    name: "Mechanical Engineering",
    description:
      "Deals with the design and manufacturing of mechanical systems.",
  },
  {
    id: "ee",
    name: "Electrical Engineering",
    description: "Involves the study of electrical systems and circuits.",
  },
  {
    id: "ce",
    name: "Civil Engineering",
    description:
      "Covers construction, design, and maintenance of the physical and naturally built environment.",
  },
  {
    id: "ele",
    name: "Electronics Engineering",
    description:
      "Combines physical sciences with life sciences and mathematics.",
  },
];

const DepartmentCard = ({ id, name }) => (
  <Link
    to={`/Department/${id}`}
    className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-5xl transition-shadow duration-300 cursor-pointer"
  >
    <div className="absolute inset-0 bg-white text-white flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300"></div>
    <h3 className="text-2xl font-semibold">{name}</h3>
  </Link>
);

const Department = () => {
  return (
    <div
      className="mt-40 min-h-screen py-10"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 sm:p-8 mx-auto max-w-screen-lg">
        <h1
          className="text-5xl font-bold text-center mb-8 "
          style={{ textShadow: "2px 2px 2px rgba(255,255,255, 1)" }}
        >
          Engineering Departments
        </h1>{" "}
        {/* Increased font size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {departments.map((dept) => (
            <DepartmentCard key={dept.id} id={dept.id} name={dept.name} />
          ))}
        </div>
      </div>

      {/* Routes for department details */}
     
    </div>
  );
};

export default Department;
