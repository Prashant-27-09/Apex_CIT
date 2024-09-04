import "./AboutUsStyles.css";
import Navbar from "./../components/Nav_Bar/Navbar";
import background from "./../assets/Event/1.png";
import pic1 from "./../assets/1.png";
import pic2 from "./../assets/2.png";
import pic3 from "./../assets/3.png";
import pic4 from "./../assets/iv.png";
import pic5 from "./../assets/Lovepik_com-401195244-cartoon-stereo-book.png";
import DarkVariantExample from "./Example";
import TwoColumnComponent from "./TwoColumnComponent";
function AboutUs() {
  return (
    <div className="aboutus " id="aboutus">
      <h1 className=" p-2  heading flex justify-center items-center text-center font-sans font-bold text-xs md:text-lg lg:text-3xl">
        CIT College Is A Place Of Fertile Interactions....A College Where People
        And Ideas Come Together In New Ways.
      </h1>
      <div className="content m-2 flex flex-col md:flex-row justify-evenly ">
        <div className="Cit_course  bg-white text-black">
          <div className="strip">
            <h4 className="text-center  py-2 bg-blue-900 text-white">
              <b className="">COURSES OFFERED</b>
            </h4>
          </div>

          {/* B.TECH Courses */}
          <div>
            <p className="text-center  py-2 text-blue-900  font-bold">
              {" "}
              B.TECH
            </p>
            <table className="w-full border-collapse border-gray-200 ">
              <thead className="bg-blue-100  px-2">
                <tr>
                  <th className="w-3/4 py-2 px-4">Branches</th>
                  <th className="w-1/4 py-2 px-4">Seats</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4">Civil Engineering</td>
                  <td className="py-2 px-4">120</td>
                </tr>
                <tr className="">
                  <td className="py-2 px-4">
                    Computer Science (Artificial Intelligence)
                  </td>
                  <td className="py-2 px-4">60</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4">Computer Science Engineering</td>
                  <td className="py-2 px-4">120</td>
                </tr>
                <tr className="">
                  <td className="py-2 px-4">Electrical Engineering</td>
                  <td className="py-2 px-4">60</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4">
                    Electronics &amp; Comm. Engineering
                  </td>
                  <td className="py-2 px-4">30</td>
                </tr>
                <tr className="">
                  <td className="py-2 px-4">Information Technology</td>
                  <td className="py-2 px-4">30</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-2 px-4">Mechanical Engineering</td>
                  <td className="py-2 px-4">60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <TwoColumnComponent />
        <DarkVariantExample />{" "}
      </div>
    </div>
  );
}

export default AboutUs;
