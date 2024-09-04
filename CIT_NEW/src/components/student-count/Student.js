import React, { useState, useEffect } from "react";

const Student = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [alumniCount, setAlumniCount] = useState(0);
  const [placementsCount, setPlacementsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  const animateCount = (setCount, maxCount) => {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / maxCount));

    const step = () => {
      start += 1;
      setCount(start);
      if (start < maxCount) {
        setTimeout(step, stepTime);
      }
    };

    step();
  };

  useEffect(() => {
    animateCount(setStudentsCount, 2100);
    animateCount(setAlumniCount, 2000);
    animateCount(setPlacementsCount, 1250);
    animateCount(setYearsCount, 13);
  }, []);

  return (
    <div className="bg-white p-6" id="studentCorner">
      <div className="grid  sm:grid-cols- lg:grid-cols-4 gap-4">
        <div className="text-center m-4">
          <i className="fa-sharp fa-solid fa-user text-5xl text-gray-700"></i>
          <h4 className="text-3xl font-extrabold mt-2 text-gray-900 shadow-text-lg">
            {studentsCount}+
          </h4>
          <p className="text-lg text-gray-600 font-semibold">Students</p>
        </div>
        <div className="text-center m-4">
          <i className="fa-solid fa-graduation-cap text-5xl text-gray-700"></i>
          <h4 className="text-3xl font-extrabold mt-2 text-gray-900 shadow-text-lg">
            {alumniCount}+
          </h4>
          <p className="text-lg text-gray-600 font-semibold">Proud Alumni</p>
        </div>
        <div className="text-center m-4">
          <i className="fa-solid fa-building-columns text-5xl text-gray-700"></i>
          <h4 className="text-3xl font-extrabold mt-2 text-gray-900 shadow-text-lg">
            {placementsCount}+
          </h4>
          <p className="text-lg text-gray-600 font-semibold">
            Campus Placements
          </p>
        </div>
        <div className="text-center m-4">
          <i className="fa-sharp fa-solid fa-building text-5xl text-gray-700"></i>
          <h4 className="text-3xl font-extrabold mt-2 text-gray-900 shadow-text-lg">
            {yearsCount}+ Years
          </h4>
          <p className="text-lg text-gray-600 font-semibold">
            Excellence in Education
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
