import React from 'react';

const FacultyManagementSidebar
= ({ departments, onDepartmentSelect, onCreate,fetchFacultyData }) => {
  return (
    <div className="w-full lg:w-1/4 p-4 bg-gray-100 h-screen">
      <button
        onClick={onCreate}
        className="bg-blue-500 text-white p-2 rounded mb-4 w-full"
      >
        Create Faculty
      </button>
      <h3 className="font-bold mb-2">Departments</h3>
      <ul>
      <li
            className="cursor-pointer p-2 hover:bg-gray-200"
            onClick={() =>{ fetchFacultyData();
              onDepartmentSelect('')
            }} // Correctly call the function
            >All</li>
        {departments.map((dept) => (
          <li
            key={dept}
            className="cursor-pointer p-2 hover:bg-gray-200"
            onClick={() => onDepartmentSelect(dept)}
          >
            {dept}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyManagementSidebar
;
