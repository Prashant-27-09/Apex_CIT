import React from "react";
import img1 from "./../assets/rtu.jpeg";
import img2 from "./../assets/btu.jpg";
const items = [
  {
    imageUrl: img1,
    text: "Reap Code : 	1082",
  },
  {
    imageUrl: img2,
    text: "B.T.U",
  },
];

const TwoColumnComponent = () => {
  return (
    <div className="container1 w-full h-1/2 md:w-1/3 px-2 py-2 md:py-0 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className=" shadow-md rounded-lg p-4">
            <img
              src={item.imageUrl}
              alt="item"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-center text-gray-800 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
      {/* New div added below the grid */}
      <div
        className="Admission_open  h-1/2 text-center my-2 border-1"
        style={{ textShadow: "0 0 5px  rgba(255, 170, 51,0.4)" }}
      >
        <h3 className="m-0 text-3xl font-bold text-blue-800">ADMISSION</h3>
        <h3 className="m-0 text-lg font-bold text-red-500">OPEN</h3>

        <h1 className="m-0 text-3xl text-center font-bold mb-2"></h1>
        <div className="line mb-2">
          <h1 className="m-0 text-4xl font-bold">
            <b>OR</b>
          </h1>
        </div>
        <h3 className="text-lg font-bold text-red-500">THE SESSION</h3>
        <h1 className="text-3xl font-bold">
          <b>2024-2025</b>
        </h1>
      </div>
    </div>
  );
};

export default TwoColumnComponent;
