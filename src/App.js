import './App.css';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Header from './Components/Navbar/Header';
import Footer from './Components/Navbar/Footer';
import About from './Pages/About/About';
import Objectives from './Pages/About/Objectives';
import VisionMission from './Pages/About/VisionAndMission';
import Faculty from './Pages/Academics/Faculty';
import Library from './Pages/Facilities/Library';
import Classroom from './Pages/Facilities/Classroom';
import Laboratory from './Pages/Facilities/Laboratory';
import ClinicalExperience from './Pages/Academics/ClinicalExperience';
import Hostel from './Pages/Facilities/Hostel';
import EventsCompleted from './Pages/Events/Eventcompleted';
import PrincipalsMessage from './Pages/About/PrincipalsMessage';
import CampusInfo from './Pages/Facilities/CampusInfo';
import Activities from './Pages/Events/Activities';
import Courses from './Pages/Academics/Courses';
import UpcomingEvents from './Pages/Events/UpcomingEvents';
import Alumni from './Pages/Alumni/Alumni';
import SportsAndRecreation from './Pages/Facilities/SportsAndRecreation';
import AlumniRegistration from './Pages/Alumni/AlumniRegistration';
import PlacementDetails from './Pages/Alumni/PlacementDetails';
import EnquiryAndCourses from './Pages/About/EnquiryAndCourses';
import Messages from './Pages/About/Messages';
import TieUp from './Pages/Academics/TieUp';
import ResearchShowcase from './Pages/Academics/Reaserch';
import GraduationAnnouncement from './Pages/Events/Graduation';
import ShanmugaChatbot from './Components/Shared/Shanmugachatbot';
import TriFestProgram from './Pages/Events/OtherEvents';

import AboutSMRFT from './Pages/Smrft/About';
import ObjectivesSMRFT from './Pages/Smrft/Objectives';
import ActivitiesSMRFT from './Pages/Smrft/Activities';
import ServicesSMRFT from './Pages/Smrft/Services';
import FCRA from './Pages/Smrft/FCRA';
import Contribution from './Pages/Smrft/Contribution';

import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminLogin from './Pages/Admin/AdminLogin';

// Group Imports
import GroupLanding from './Pages/Group/GroupLanding';
import AboutGroup from './Pages/Group/AboutGroup';
import ProgrammesGroup from './Pages/Group/ProgrammesGroup';
import FacilitiesGroup from './Pages/Group/FacilitiesGroup';
import ClinicalGroup from './Pages/Group/ClinicalGroup';
import FacultyGroup from './Pages/Group/FacultyGroup';
import HostelGroup from './Pages/Group/HostelGroup';
import ResearchGroup from './Pages/Group/ResearchGroup';
import StudentWelfareGroup from './Pages/Group/StudentWelfareGroup';
import AlumniGroup from './Pages/Group/AlumniGroup';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/ShanmugaNursingCollege/' || location.pathname === '/ShanmugaNursingCollege';

  useEffect(() => {
    document.body.className = isHome ? 'home' : 'default';
    return () => {
      document.body.className = '';
    };
  }, [isHome]);

  return (
    <div className="App">
      <Header />
      <ShanmugaChatbot />
      <main>
        <Routes>
          {/* Shanmuga Nursing College Routes */}
          <Route path="/ShanmugaNursingCollege/" element={<div className="home-splash" />} />
          <Route path="/ShanmugaNursingCollege/About" element={<About />} />
          <Route path="/ShanmugaNursingCollege/Objectives" element={<Objectives />} />
          <Route path="/ShanmugaNursingCollege/VisionMission" element={<VisionMission />} />
          <Route path="/ShanmugaNursingCollege/Faculty" element={<Faculty />} />
          <Route path="/ShanmugaNursingCollege/Library" element={<Library />} />
          <Route path="/ShanmugaNursingCollege/Classroom" element={<Classroom />} />
          <Route path="/ShanmugaNursingCollege/Laboratory" element={<Laboratory />} />
          <Route path='/ShanmugaNursingCollege/Courses' element={<Courses />} />
          <Route path="/ShanmugaNursingCollege/ClinicalExperience" element={<ClinicalExperience />} />
          <Route path="/ShanmugaNursingCollege/SportsAndRecreation" element={<SportsAndRecreation />} />
          <Route path="/ShanmugaNursingCollege/Hostel" element={<Hostel />} />
          <Route path="/ShanmugaNursingCollege/PrincipalsMessage" element={<PrincipalsMessage />} />
          <Route path="/ShanmugaNursingCollege/CampusInfo" element={<CampusInfo />} />
          <Route path="/ShanmugaNursingCollege/Activities" element={<Activities />} />
          <Route path="/ShanmugaNursingCollege/EventsCompleted" element={<EventsCompleted />} />
          <Route path="/ShanmugaNursingCollege/UpcomingEvents" element={<UpcomingEvents />} />
          <Route path="/ShanmugaNursingCollege/Alumni" element={<Alumni />} />
          <Route path="/ShanmugaNursingCollege/AlumniRegistration" element={<AlumniRegistration />} />
          <Route path="/ShanmugaNursingCollege/PlacementDetails" element={<PlacementDetails />} />
          <Route path="/ShanmugaNursingCollege/EnquiryAndCourses" element={<EnquiryAndCourses />} />
          <Route path="/ShanmugaNursingCollege/Messages" element={<Messages />} />
          <Route path="/ShanmugaNursingCollege/TieUp" element={<TieUp />} />
          <Route path="/ShanmugaNursingCollege/ResearchShowcase" element={<ResearchShowcase />} />
          <Route path="/ShanmugaNursingCollege/Graduation" element={<GraduationAnnouncement />} />
          <Route path="/ShanmugaNursingCollege/ShanmugaChatbot" element={<ShanmugaChatbot />} />
          <Route path="/ShanmugaNursingCollege/Others" element={<TriFestProgram />} />

          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/Admin" element={<AdminLogin />} />

          {/* Global Landing Page */}
          <Route path="/" element={<GroupLanding />} />

          {/* Group Routes */}
          <Route path="/Group/About" element={<AboutGroup />} />
          <Route path="/Group/Programmes" element={<ProgrammesGroup />} />
          <Route path="/Group/Facilities" element={<FacilitiesGroup />} />
          <Route path="/Group/Clinical" element={<ClinicalGroup />} />
          <Route path="/Group/Faculty" element={<FacultyGroup />} />
          <Route path="/Group/Hostel" element={<HostelGroup />} />
          <Route path="/Group/Research" element={<ResearchGroup />} />
          <Route path="/Group/StudentWelfare" element={<StudentWelfareGroup />} />
          <Route path="/Group/Alumni" element={<AlumniGroup />} />

          {/* SMRFT Routes */}
          <Route path="/Smrft/About" element={<AboutSMRFT />} />
          <Route path="/Smrft/Objectives" element={<ObjectivesSMRFT />} />
          <Route path="/Smrft/Activities" element={<ActivitiesSMRFT />} />
          <Route path="/Smrft/Services" element={<ServicesSMRFT />} />
          <Route path="/Smrft/FCRA" element={<FCRA />} />
          <Route path="/Smrft/Contribution" element={<Contribution />} />

        </Routes>
      </main>
      {!isHome && <Footer />}
    </div>
  );
}

export default App;
