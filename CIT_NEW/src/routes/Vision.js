import React from "react";
import background1 from "./../assets/images/p1.png";

const objectives = [
  "Upliftment of Rural Students through technical education.",
  "Respond to local societal needs by developing selected 'targeted research projects'.",
  "Quality training programs in need based modern technology.",
  "To maintain state-of-the-art infrastructure in laboratories.",
  "To promote culture of self-employment.",
  "To impart non-formal education to unemployed youth.",
  "To inculcate moral, ethical, spiritual values in education at all levels.",
];

const missions = [
  "To provide quality education and foster intellectual growth.",
  "To promote innovation and research in diverse fields of study.",
  "To cultivate a culture of ethical and socially responsible leadership.",
  "To contribute to the development of the local community and society at large.",
];

const goals = [
  "Foster a culture of academic excellence and continuous learning among students and faculty.",
  "Enhance industry-academia collaboration to ensure curriculum relevance and student employability.",
  "Promote research and innovation in emerging technologies to address global challenges.",
];

const Vision = () => {
  return (
    <div
      className="mt-40 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-75 rounded-md p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Vision Objectives
        </h2>
        <ul className="list-disc list-inside">
          {objectives.map((objective, index) => (
            <li key={index} className="text-xl mb-2">
              {objective}
            </li>
          ))}
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4 text-center">Missions</h2>
        <ul className="list-disc list-inside">
          {missions.map((mission, index) => (
            <li key={index} className="text-xl mb-2">
              {mission}
            </li>
          ))}
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4 text-center">Goals</h2>
        <ul className="list-disc list-inside">
          {goals.map((goal, index) => (
            <li key={index} className="text-xl mb-2">
              {goal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Vision;
