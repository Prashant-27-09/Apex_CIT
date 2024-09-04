import React from "react";

const citInfo = {
  name: "Chartered Institute of Technology, Abu Road",
  established: 2009,
  description:
    "Chartered Institute of Technology (CIT), Abu Road is the first engineering college in Abu Road, offering B.Tech degrees from Rajasthan Technical University (RTU) in Civil Engineering (CE), Computer Science & Engineering (CSE), Electrical Engineering (EE), Electronics & Communication Engineering (ECE), and Mechanical Engineering (ME). CIT, initiated by Gyan Raman Charitable Trust, aims to revolutionize traditional teaching methods with innovative educational approaches.",
  highlights: [
    "Consistent progress in placements, results, student strength, events, and achievements since its establishment.",
    "Integration of technology with academics for quality education.",
    "Preparation of students to meet global challenges.",
    "Focus on professional ethics and individual development.",
    "Mission to be among India's top engineering institutes and achieve deemed university status.",
  ],
  whyCit: [
    "Project-based learning approach.",
    "Summer internships opportunities.",
    "Practical and laboratory-based classes.",
    "Scholarships and financial aids available.",
    "Yearly training sessions covering communication, behavior, aptitude, and technical areas.",
  ],
  achievements: [
    "Listed among the top 10 institutes affiliated with RTU.",
    // Add more achievements as needed
  ],
  effortsForPlacements: [
    "Personal interviews",
    "Mock group discussions",
    "Student counselling sessions",
    "Invites prominent speakers from corporate",
    "Organizes industrial visits & off-campus training programs",
    "Motivational activities to endow the students with overall development",
    "Online practice sessions to upgrade student’s aptitude and technical skills",
    "In-house training from the basics of communication to attitude building",
  ],
  topRecruitingCompanies: [
    "H T – Media",
    "Shine.com",
    "Hcl",
    "Infosys",
    "Tech. Mahindra",
    "Cognizent",
    "eClinicalworks",
    "Modern Insulators",
    "Mayur Wovens",
    "HUL",
    "Wolkem",
    "Sonalika Tractors",
    "Pioneer Automation",
    "IWT Solutions",
    "PNB Met life",
    "UES-25 (Indian Army)",
    "Bajiya Softech Pvt. Ltd.",
    "D’zire Infosoft",
    "Yamada Group",
    "Jagdhawa Industries",
    "Indiamart",
    "AIS Glass",
    "Future Generali",
    "Sahasra Electronics",
    "Unitechnosys",
    "Bhansali Engineering Polymers Ltd.",
  ],
  featuresAndFacilities: [
    "Health care center: CiT is very concerned about the health of our students",
    "Transportation: Buses are available for pick up and drop from various corners of the city",
    "Hostel: Well-furnished hostel providing all required facilities and food",
    "Games and sports: Well-equipped facilities including gymnasium, courts, and grounds",
    "Activities: Scheduled sports, yoga, karate, and recreational activities for student development",
  ],
  recentEvent: [
    "Tarunya-2016: Cultural-Tech Fest, 3 days full of entertainment, technical, and cultural events",
    "Live concert by popular singer Akasa Singh",
  ],
  infrastructure: [
    "Separate large seminar halls for all branches",
    "Lush green, pollution-free, eco-friendly environment",
    "Facilities like aqua guard, water cooler, common room with TV, and indoor games",
    "Library providing book bank facility and access after college hours",
    "Spacious and clean canteen open throughout the day",
    "Air-conditioned and well-equipped seminar halls",
  ],
  teachingFacilities: [
    "Practical and laboratory-based classes",
    "Classroom teaching with multimedia facility",
    "Subscription to online journals like DELNET",
    "Regular appraisal system with periodic feedback",
    "In-campus and off-campus pro-industry & value-aided training programs and seminars",
    "Modern computerized library collaborating with premier institutes",
    "Separate central workshop for electronics & communication, mechanical, and electrical engineering",
  ],
  featuredFaculty: [
    "Experienced faculties from IIT’s & NIIT’s",
    "Pool of expert faculties in various fields",
    "Creating a learning environment for overall development",
    "Qualified academicians dedicated to students' success",
  ],
};

const HistoryPage = () => {
  return (
    <div className="mt-40 min-h-screen bg-gray-100 py-10">
      <div className="p-4 mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-center mb-8">{citInfo.name}</h1>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Established: {citInfo.established}
          </h2>
          <p className="text-lg">{citInfo.description}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Highlights:</h2>
          <ul className="list-disc list-inside">
            {citInfo.highlights.map((highlight, index) => (
              <li key={index} className="mb-2">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Why CIT:</h2>
          <ul className="list-disc list-inside">
            {citInfo.whyCit.map((reason, index) => (
              <li key={index} className="mb-2">
                {reason}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Achievements and Awards:
          </h2>
          <ul className="list-disc list-inside">
            {citInfo.achievements.map((achievement, index) => (
              <li key={index} className="mb-2">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Efforts for Placements:
          </h2>
          <ul className="list-disc list-inside">
            {citInfo.effortsForPlacements.map((effort, index) => (
              <li key={index} className="mb-2">
                {effort}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Top Recruiting Companies:
          </h2>
          <ul className="list-disc list-inside">
            {citInfo.topRecruitingCompanies.map((company, index) => (
              <li key={index} className="mb-2">
                {company}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Features and Facilities:
          </h2>
          <ul className="list-disc list-inside">
            {citInfo.featuresAndFacilities.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Recent Event:</h2>
          <ul className="list-disc list-inside">
            {citInfo.recentEvent.map((event, index) => (
              <li key={index} className="mb-2">
                {event}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Infrastructure:</h2>
          <ul className="list-disc list-inside">
            {citInfo.infrastructure.map((info, index) => (
              <li key={index} className="mb-2">
                {info}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Teaching Facilities:</h2>
          <ul className="list-disc list-inside">
            {citInfo.teachingFacilities.map((facility, index) => (
              <li key={index} className="mb-2">
                {facility}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Featured Faculty:</h2>
          <ul className="list-disc list-inside">
            {citInfo.featuredFaculty.map((faculty, index) => (
              <li key={index} className="mb-2">
                {faculty}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
