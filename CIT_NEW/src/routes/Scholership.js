import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Nav_Bar/Navbar";
import Trip from "../components/Trip";

function Scholership() {
  return (
    <>
      <Navbar />
      <section className="mt-40 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
              Scholarship Details
            </h2>
            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Invest in Your Future with Scholarships
            </p>
            <p className="mt-4 max-w-full text-lg text-gray-500 lg:mx-auto">
              At our institution, we are committed to supporting our students'
              academic pursuits through various scholarship programs. Whether
              you're looking for financial assistance, streamlined application
              processes, merit-based selection criteria, or comprehensive
              student support services, our scholarships are designed to empower
              you on your educational journey.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Scholarship Benefits section */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/503163/api-settings.svg"
                      alt="Financial Support icon"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Financial Support
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our scholarship program offers robust financial support to
                  alleviate the burden of educational expenses, ensuring you can
                  focus on your studies and achieve academic success.
                </dd>
              </div>

              {/* Application Process section */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/503138/webpack.svg"
                      alt="Easy Application icon"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Easy Application
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We have simplified our scholarship application process to make
                  it accessible and straightforward, ensuring that every
                  eligible student can apply easily and efficiently.
                </dd>
              </div>

              {/* Eligibility Criteria section */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/511771/dashboard-671.svg"
                      alt="Merit-based Selection icon"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Merit-based Selection
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our scholarships are awarded based on merit, recognizing and
                  rewarding academic excellence and achievements within our
                  student community.
                </dd>
              </div>

              {/* Support Resources section */}
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <img
                      src="https://www.svgrepo.com/show/76267/free-commercial-label.svg"
                      alt="Student Support icon"
                    />
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Student Support
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Beyond financial aid, our scholarships come with comprehensive
                  student support services, including academic counseling,
                  mentoring programs, and career guidance to ensure your
                  holistic development and success.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>{" "}
    </>
  );
}

export default Scholership;
