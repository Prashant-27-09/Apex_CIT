import Hero from "../components/Hero";
import Navbar from "../components/Nav_Bar/Navbar";
import AboutImg from "../assets/2.jpg";
// import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const services = [
  {
    title: "DAPP Development",
    description:
      "A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.",
    color: "blue",
  },
  {
    title: "Web 3.0 Development",
    description:
      "Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web.",
    color: "blue",
  },
  {
    title: "Project Audit",
    description:
      "A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld.",
    color: "blue",
  },
  {
    title: "Hacking / RE",
    description:
      "A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network.",
    color: "blue",
  },
  {
    title: "Bot/Script Development",
    description:
      "Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process.",
    color: "blue",
  },
];

function Initiatives() {
  return (
    <>
      <div className="container1 p-8  mt-40 ">
        <div className="px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-${service.color}-200 p-4 rounded-lg`}
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Initiatives;
