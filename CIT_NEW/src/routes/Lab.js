import React from "react";
import img1 from "./../assets/carosusle/com-lab7.jpg";
import img2 from "./../assets/carosusle/com-lab5.JPG";
import img4 from "./../assets/carosusle/ec1.jpg";
const Lab = () => {
  return (
    <div className="mt-40 mb-40 p-10 bg-white  h-screen h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white">
              Labs
            </h2>

            <p className="hidden max-w-screen-xl text-black dark:text-gray-300 md:block">
              CIT offers state-of-the-art laboratory facilities across various
              engineering disciplines, designed to provide hands-on experience
              and bridge the gap between theoretical concepts and real-world
              applications. Our Mechanical Engineering labs are equipped with
              advanced machinery for projects in thermodynamics, fluid
              mechanics, robotics, and CAD/CAM. Civil Engineering labs feature
              modern equipment for geotechnical, structural, and environmental
              studies, including material testing and surveying. Electrical
              Engineering labs support experiments in circuits, control systems,
              power electronics, and electrical machines. Electronics
              Engineering labs offer resources for exploring electronics,
              communication systems, embedded systems, and VLSI design. These
              labs are continuously updated to meet industry standards,
              fostering innovation and practical learning for our students.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* Replace each image link with React component */}
          <GalleryItem
            imageUrl="https://images.pexels.com/photos/3747473/pexels-photo-3747473.jpeg?auto=compress&cs=tinysrgb&w=600"
            label=""
          />
          <GalleryItem imageUrl={img2} label="" colSpan="md:col-span-2" />
          <GalleryItem imageUrl={img4} label="" colSpan="md:col-span-2" />
          <GalleryItem imageUrl={img1} label="" />
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

export default Lab;
