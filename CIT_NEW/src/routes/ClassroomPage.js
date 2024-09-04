import React from "react";
import img from "./../assets/Event/cp7.jpg";
import img1 from "./../assets/Event/cp-8.jpg";
import img2 from "./../assets/Event/Seminar1.jpg";
import img3 from "./../assets/Event/seminar4.jpg";
const ClassroomPage = () => {
  return (
    <div className="mt-40 mb-40 p-10 bg-white  h-screen h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-black lg:text-3xl dark:text-white">
              Classrooms
            </h2>

            <p className="hidden max-w-screen-xl text-black dark:text-gray-300 md:block">
              At our college, we offer a diverse range of classes designed to
              cater to a variety of academic interests and career paths. From
              foundational courses in mathematics, sciences, and humanities to
              specialized classes in fields like engineering, business, and the
              arts, students have the opportunity to explore and excel in their
              chosen disciplines. Our classes are designed to be engaging and
              interactive, fostering critical thinking, practical skills, and
              creativity. Whether you're pursuing a degree or enhancing your
              professional skills, our dedicated faculty and state-of-the-art
              facilities ensure a supportive environment for learning and
              growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {/* Replace each image link with React component */}
          <GalleryItem imageUrl={img} label="" />
          <GalleryItem imageUrl={img1} label="" colSpan="md:col-span-2" />
          <GalleryItem imageUrl={img2} label="" colSpan="md:col-span-2" />
          <GalleryItem imageUrl={img3} label="" />
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

export default ClassroomPage;
