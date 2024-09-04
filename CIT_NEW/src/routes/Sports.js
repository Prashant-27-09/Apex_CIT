import React from "react";
import img1 from "./../assets/Event/Lakshy1.jpg";
import img2 from "./../assets/Event/Lakshay4.jpg";
import img3 from "./../assets/Event/Lakshy8.jpg";
import img4 from "./../assets/Event/Lakshy5.jpg";
const Sport = () => {
  return (
    <div className="mt-40 mb-40 p-10 bg-white  h-screen h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white">
              Sports
            </h2>

            <p className="hidden max-w-screen-xl text-black dark:text-gray-300 md:block">
              At CIT, we believe in the importance of physical fitness and
              holistic development. Our extensive sports facilities cater to a
              wide range of interests, offering both indoor and outdoor sports
              options. Students can engage in sports such as cricket, football,
              basketball, volleyball, badminton, table tennis, and athletics.
              The campus boasts well-maintained fields, courts, and a fully
              equipped gymnasium. Regular sports events and tournaments are
              organized to encourage participation, teamwork, and healthy
              competition among students, fostering a spirit of sportsmanship
              and physical well-being. communication systems, embedded systems,
              and VLSI design. These labs are continuously updated to meet
              industry standards, fostering innovation and practical learning
              for our students.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* Replace each image link with React component */}
          <GalleryItem imageUrl={img1} label="" />
          <GalleryItem imageUrl={img2} label="" colSpan="md:col-span-2" />
          <GalleryItem imageUrl={img3} label="" colSpan="md:col-span-2" />
          <GalleryItem imageUrl={img4} label="" />
        </div>
      </div>
    </div>
  );
};

// GalleryItem component
const GalleryItem = ({ imageUrl, label, colSpan }) => {
  return (
    <a
      href="#"
      className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${colSpan} md:h-80`}
    >
      <img
        src={imageUrl}
        loading="lazy"
        alt={`Photo by ${label}`}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
        {label}
      </span>
    </a>
  );
};

export default Sport;
