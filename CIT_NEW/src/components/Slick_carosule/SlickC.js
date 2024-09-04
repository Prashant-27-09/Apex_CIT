import "./SlickC.css";
import { useState, useEffect } from "react";
import pic1 from "./../../assets/scroll1.jpg";
import video1 from "./../../assets/videos/videoplayback.mp4";
import C1 from "../../assets/carosusle/com-lab5.JPG";
import C2 from "../../assets/carosusle/com-lab7.jpg";
import C3 from "../../assets/carosusle/ec1.jpg";
import C4 from "../../assets/carosusle/gp.jpg";
import img1 from "./../../assets/images/Heroimage.JPG";

const SlickC = () => {
  const imgUrls = [C1, C2, C3, C4];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newIndex = (currentImageIndex + 1) % imgUrls.length;
      setCurrentImageIndex(newIndex);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentImageIndex, imgUrls.length]);
  return (
    <div className="Slick" style={{ backgroundColor: "white" }}>
      <div className="p-6">
        <div className="mx-auto">
          <div
            className="relative rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
            style={{
              backgroundImage:
                "linear-gradient(to left bottom, #1e3a8a, #5b21b6, black, #ffffff)",
            }}
          >
            {/* Image (Left Side) */}
            <div className="relative pb-3/5 -mt-6 md:pb-1/2">
              <img
                src={imgUrls[currentImageIndex]}
                alt="Promotion"
                className="h-full w-full lg:h-70 lg:w-full rounded-t-lg lg:rounded-l-lg object-cover"
              />
            </div>

            {/* Right Side (Content) */}
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:py-16 lg:pr-0">
              <div className="lg:self-center">
                <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                  <span className="block">
                    Promoting Sustainable Practices at CIT College
                  </span>
                </h2>
                <p className="mt-4 text-base leading-6 text-white">
                  At CIT College, we are committed to fostering a sustainable
                  environment both on and off campus. Our "Sustainability
                  Initiative" encourages students to make eco-conscious
                  decisions and take actions that positively impact our planet.
                  The initiative includes various programs such as recycling
                  drives, energy conservation awareness, and community gardening
                  projects. We believe in empowering our students with the
                  knowledge and tools necessary to create a greener future.
                </p>
                <p
                  className="mt-4 text-base leading-6 text-dark-blue-800"
                  style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.8)" }}
                >
                  {/* Placeholder text */}
                </p>
            
                <a
                  href="#"
                  target="_blank"
                  className="ml-4 mt-8 text-white font-bold text-sm underline"
                  style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.8)" }}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mx-auto">
          <div className="relative  rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-8 lg:px-16 lg:pr-0 shadow-lg">
              <div className="lg:self-center">
                <p className="mt-4 font-sans font-bold text-base leading-6 text-black">
                  <span className="text-xl text-blue-900">
                    Chartered Institute of Technology
                  </span>{" "}
                  is an initiative by Gyan Raman Charitable Trust and Amongst
                  Top 10 Best RTU Affiliated Engineering Colleges in Rajasthan.
                  We believe in revolutionizing the conventional pattern of
                  teaching through fresh ideas and innovations in the present
                  education system. Chartered Institute of Technology Abu Road
                  commits itself to prepare aspiring individuals for facing the
                  challenges of the global world.The amalgamation of the finest
                  training procedures and brilliant methods of inculcating
                  professional ethics along with development of individuals
                  pursuits make the nucleus of at Chartered Institute of
                  Technology.Chartered Institute of Technology is privileged to
                  provide a platform of focused, methodical and blissful
                  learning, igniting and fostering the young minds, empowering
                  them to carry out a revolution in the fields of Science &
                  Technology that our future India dreams.
                </p>
              </div>
            </div>
            <div className="relative pb-3/5 -mt-6 md:pb-1/2">
              <video
                className="w-full h-full object-cover"
                src={video1}
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlickC;
