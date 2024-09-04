import React from "react";
import "./Testimonial.css";
import Arman from "./../../assets/images/testi2.jpg";
import Vishal from "./../../assets/images/testi1.jpg";
import Deepak from "./../../assets/images/usericon.png";

const Testimonial = () => {
  return (
    <div className="p-6 bg-blue-100">
      <h1 className="text-center font-bold text-3xl mb-8">Testimonial</h1>
      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        {/* Testimonial Card 1 */}
        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <img src={Arman} alt="Arman" className="h-14 w-14 rounded-full" />
          </div>
          <h1 className="text-darken mb-3 text-xl font-bold lg:px-14">Arman</h1>
          <p className="px-4 text-gray-500">
            Collage has given me the confidence, Collage inspired me to think
            differently. It's like no other time in your life. Take it all one
            day at a time and enjoy the journey. (Message For Juniors)
          </p>
        </div>

        {/* Testimonial Card 2 */}
        <div
          className="rounded-xl bg-white p-6 text-center shadow-xl"
          data-aos-delay="150"
        >
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
            <img src={Vishal} alt="Vishal" className="h-14 w-14 rounded-full" />
          </div>
          <h1 className="text-darken mb-3 text-xl font-bold lg:px-14">
            Vishal
          </h1>
          <p className="px-4 text-gray-500">
            Collage has given me the confidence, Collage inspired me to think
            differently. It's like no other time in your life. Take it all one
            day at a time and enjoy the journey. (Message For Juniors)
          </p>
        </div>

        {/* Testimonial Card 3 */}
        <div
          className="rounded-xl bg-white p-6 text-center shadow-xl"
          data-aos-delay="300"
        >
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-sky-500 shadow-sky-500/40">
            <img src={Deepak} alt="Deepak" className="h-14 w-14 rounded-full" />
          </div>
          <h1 className="text-darken mb-3 pt-3 text-xl font-bold lg:h-14 lg:px-14">
            Deepak
          </h1>
          <p className="px-4 text-gray-500">
            Think Differently, that is one thing that CIT urges in and to a far
            extent succeeds in teaching this to its students.It inveriably helps
            us to achieve what we need.It nourished me and thus gave me an
            opportunity to define myself
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
