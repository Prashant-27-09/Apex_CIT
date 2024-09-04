import React from "react";

const Library = () => {
  return (
    <div className="mt-40 mb-40 p-10 bg-white  h-screen h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white">
              Library
            </h2>

            <p className="hidden max-w-screen-xl text-black dark:text-gray-300 md:block">
              libarray is an essential resource for the College of Engineering
              and Technology (CIT), offering comprehensive support for students
              and faculty in data analysis, algorithm development, and
              computational tasks. This library provides a robust suite of
              functions and data structures tailored for efficient manipulation
              and management of arrays in various programming contexts. Whether
              for numerical simulations, image processing, or scientific
              computing, libarray empowers users with optimized tools to enhance
              learning and research endeavors across disciplines within CIT.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* Replace each image link with React component */}
          <GalleryItem
            imageUrl="https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            label=""
          />
          <GalleryItem
            imageUrl="https://images.pexels.com/photos/3747535/pexels-photo-3747535.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            label=""
            colSpan="md:col-span-2"
          />
          <GalleryItem
            imageUrl="https://images.pexels.com/photos/3747526/pexels-photo-3747526.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            label=""
            colSpan="md:col-span-2"
          />
          <GalleryItem
            imageUrl="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=400"
            label=""
          />
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

export default Library;
