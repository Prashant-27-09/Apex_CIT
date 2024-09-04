import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Arts from "./../assets/Event/Art6.jpg";
import Recreation from "./../assets/Event/re4.jpeg";
import cp from "./../assets/Event/cp6.jpg";
import seminar from "./../assets/Event/seminar2.jpg";
import lakshaya from "./../assets/Event//Lakshy6.jpg";
import tarunaya from "./../assets/Event/archu.jpeg";
import culture from "./../assets/Event/Culture-7.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const sliderImageUrl = [
  {
    url: Arts,
    text: "Arts",
    link: "/Event", // Add anchor links
  },
  {
    url: Recreation,
    text: "Recreation",
    link: "/Event",
  },
  {
    url: cp,
    text: "Campus",
    link: "/Event",
  },
  {
    url: seminar,
    text: "Seminar",
    link: "/Event",
  },
  {
    url: lakshaya,
    text: "Lakshy",
    link: "/Event",
  },
  {
    url: tarunaya,
    text: "tarunye",
    link: "/Event",
  },
  {
    url: culture,
    text: "Culture",
    link: "/Event",
  },
];

const MyCarousel = () => {
  return (
    <div className="p-6 parent">
      <div className="flex justify-center items-center">
        <h1 className="text-center text-3xl font-bold ">GALLARY</h1>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider relative h-full" key={index}>
              <a href={imageUrl.url} target="_blank" rel="noopener noreferrer ">
                <img
                  src={imageUrl.url}
                  className="w-full h-full    object-cover  "
                  alt="movie"
                />
              </a>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2 text-center">
                <a
                  href={imageUrl.link}
                  className="text-white text-4xl font-sans"
                >
                  {imageUrl.text}
                </a>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
