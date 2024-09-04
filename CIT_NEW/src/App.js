import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Admin from "./routes/Admin";
import Academics from "./routes/Academics";
import Traning from "./routes/Traning";
import Scholership from "./routes/Scholership";
import Studentcorener from "./routes/Studentcorener";
import Contact from "./routes/Contact";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Nav_Bar/Navbar";
import Footer from "./components/Footer-sec/Footer";
import Academics_progrma from "./components/ACADEMIC_PROGRAMS";
import Initiatives from "./routes/Initiatives";
import Administration from "./routes/Administration.js";
import Department from "./routes/Department";
import History from "./routes/History.js";
import Mission from "./routes/Misson.js";
import Vision from "./routes/Vision.js";
import Goal from "./routes/Goal.js";
import Event from "./components/Photo_Gallary/Events.js";
import Notes from "./routes/Notes.js";
import Facilities from "./routes/Facilities.js";
import ClassroomPage from "./routes/ClassroomPage.js";
import ComputerScience from "./routes/ComputerScience.js";
import MechanicalComponent from "./routes/MechanicalComponent.js";
import CivilEngineering from "./routes/CivilEngineering.js";
import ElectricalEngineering from "./routes/ElectricalEngineering.js";
import ElectronicsEngineering from "./routes/ElectronicsEngineering.js";
import Library from "./routes/Library.js";
import Lab from "./routes/Lab.js";
import Hostel from "./routes/Hostel.js";
import Sports from "./routes/Sports.js";
import AICTE from "./routes/AICTE.js";
import NPTEL from "./routes/NPTEL.js";
import FacultyManagement from "./routes/FacultyManagement.js";
import NoticeAndManual from "./routes/NoticeAndManual.js";
import EventGallary from "./routes/EventGallary.js";
import DepartmentDetails from "./routes/DepartmentDetails.js";
import EnquiryForm from "./components/testimonial/EnquiryFrom.js";
import AudioOnLoad from "./AudioOnLoad.js";
export default function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Academics" element={<Academics />} />
        <Route path="/Training" element={<Traning />} />
        <Route path="/Scholarship" element={<Scholership />} />
        <Route path="/Administration" element={<Administration />} />

        <Route path="/Studentcorner" element={<Studentcorener />} />
        <Route path="/AcdCourse" element={<Initiatives />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin/notices-lab-manuals" element={<NoticeAndManual />} />
        <Route path="/Admin/faculty-details" element={<FacultyManagement />} />
        <Route path="/Admin/event-gallery" element={<EventGallary />} />



        {/* About */}
        <Route path="/Vision" element={<Vision />} />

        <Route path="/History" element={<History />} />

        {/* Academics */}
        <Route path="/AcdCourse" element={<Vision />} />
        <Route path="/Department" element={<Department />} />

        {/* Gallary */}
        <Route path="/Event" element={<Event />} />
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Facilities" element={<Facilities />} />

        {/*  */}
        <Route path="Department/cs" element={<DepartmentDetails name={"CSE"} />} />
        <Route path="Department/me" element={<DepartmentDetails name={"ME"} /> }/>
        <Route path="Department/ce" element={<DepartmentDetails name={"CE"} />} />
        <Route path="Department/ee" element={<DepartmentDetails name={"EE"} />} />
        <Route path="Department/ele" element={<DepartmentDetails name={"ELE"} />} />

        {/*  */}
        <Route path="/ClassroomPage" element={<ClassroomPage />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/Lab" element={<Lab />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Hostel" element={<Hostel />} />


        <Route path="/AICTE" element={<AICTE />} />
        <Route path="/NPTEL" element={<NPTEL />} />
        <Route path="/Contact" element={<EnquiryForm />} />

      </Routes>

      <Footer />
    </div>
  );
}
