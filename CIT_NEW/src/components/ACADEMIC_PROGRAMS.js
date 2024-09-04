import "./ACADEMIC PROGRAMS.css";
import Navbar from "./../components/Nav_Bar/Navbar";
// Assuming your images are stored in src/assets folder
import feature1Image from "./../assets/ACDDEMICS/feature-1.png";
import feature2Image from "./../assets/ACDDEMICS/feature-2.png";
import feature3Image from "./../assets/ACDDEMICS/feature-3.png";

function Academics_progrma() {
  const services = [
    {
      image: feature1Image,
      title: "Initiatives",
      description:
        "CIT devotes special attention to major challenges and areas of scientific interest including AI, ML Micro Sensing Systems, Manufacturing Engineering, and Robotics to evolve scalable solutions for emerging economies.",
      link: "#CollegeRecognition",
      linkText: "Participate",
    },
    {
      image: feature2Image,
      title: "FUTURE STUDENTS",
      description:
        "What’s different about CIT? We are about empowering you to discover opportunities that will shape your future. We want our students to fully embrace our career-focused programs delivered by our passionate teachers. And with exposure to global opportunities.",
      link: "/Contact",
      linkText: "Admission",
    },
    {
      image: feature3Image,
      title: "ACADEMIC PROGRAMS",
      description:
        "CIT’s 360°flexible engineering approach encourages you to explore different academic avenues while discovering your focus. Your broad-based foundation will allow you to make meaningful connections and apply your education in the wider world.",
      link: "/AcdCourse",
      linkText: "Programs",
    },
  ];
  return (
    <div className="Academics" id="Academics">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md p-4 flex flex-col justify-between transition-colors duration-300 ease-in-out transform hover:bg-blue-100 hover:scale-105"
          >
            <div className="flex flex-col h-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-40 h-40 object-cover rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-4">
                {service.description}
              </p>
            </div>
            <a
              href={service.link}
              className="bg-blue-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded block text-center"
            >
              {service.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Academics_progrma;
