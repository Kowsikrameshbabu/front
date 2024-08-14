import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Fresh/Landingjs/Login";
import Signup from "./Fresh/Landingjs/Signup";
import Land from "./Fresh/Landingjs/Landing";
import About from "./Fresh/Landingjs/About";
import Resume from "../src/JobDashboard/resume";
import Profile from "../src/Fresh/EmployerDash/Profile";
import Applications from "../src/Fresh/EmployerDash/EmployerDash/Applications";
import MyApplications from "../src/JobDashboard/myapp";
import Manage from "./Manage";
import Postjobb from "../src/Fresh/EmployerDash/Postjob";
import Nav from "./Fresh/Landingjs/Navbar";
import Footer from "./Fresh/Landingjs/Footer";
import AdminLogin from "./Fresh/Landingjs/Adminlogin";
import SideNav from "./Fresh/EmployerDash/SideNv";
import JSideNav from "./JobDashboard/JSideNav";
import Main from "./Fresh/JobDetail/Main";
import Contact from "./Fresh/Landingjs/Contact";
import { UserProvider } from './Fresh/Landingjs/UserContext';
import Admindash from './Admindash/Admindash';
import Reports from "./Admindash/Reports";
import Analytics from "./Admindash/Analytics";
import AdminProfile from "./Admindash/Profile";
import Header from "./Admindash/Header";
import Sidebar from "./Admindash/Sidebar";
import Home from "./Admindash/Home";

// Layout components for different sections
const Layout = ({ children }) => {
  const location = useLocation();
  const pathsWithoutFooter = ["/cdash","/rdash/aanalytics","/browse", "/applications", "/cdash/dashboard","/cdash/profile", "/cdash/postjob", "/cdash/applications", "/cdash/managejobs", "/rdash/profile", "/rdash/myapplications", "/rdash/resume", "/rdash", "/admindash","/admindash/reports","/admindash/dashboard","/admindash/pprofile","/admindash/aanalytics","/admindash/Dashboard"];

  return (
    <>
      {children}
      {!pathsWithoutFooter.includes(location.pathname) && <Footer />}
    </>
  );
};

const CandidLayout = () => (
  <>
    <JSideNav />
    <div className="candid-content">
      <Routes>
      <Route path="aanalytics" element={<Analytics />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myapplications" element={<MyApplications />} />
      </Routes>
    </div>
  </>
);

const JobLayout = () => (
  <>
    <SideNav />
    <div className="candid-content">
      <Routes>
      <Route path="dashboard" element={<Home />} />
        <Route path="/managejobs" element={<Manage />} />
        <Route path="/postjob" element={<Postjobb />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </div>
  </>
);

// New AdminLayout component for admin-specific routing
const AdminLayout = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="content">
        <Routes>
          <Route path="dashboard" element={<Home />} />
          <Route path="aanalytics" element={<Analytics />} />
          <Route path="pprofile" element={<AdminProfile />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  const [formType, setFormType] = useState(null);
  const [role, setRole] = useState(null);

  const toggleForm = (type, role) => {
    setFormType(type);
    setRole(role);
  };

  const handleLoginSuccess = ({ username, role }) => {
    console.log(`Logged in as ${username} with role ${role}`);
  };

  return (
    <UserProvider>
      <Router>
        <AppContent 
          toggleForm={toggleForm} 
          handleLoginSuccess={handleLoginSuccess} 
          formType={formType} 
          role={role} 
        />
      </Router>
    </UserProvider>
  );
};

const AppContent = ({ toggleForm, handleLoginSuccess, formType, role }) => {
  const location = useLocation();  
  const isAdmindash = location.pathname.startsWith('/admindash');

  return (
    <>
      {!isAdmindash && <Nav toggleForm={toggleForm} />}
      <Layout>
        <Routes>
          <Route path="/" element={<Land />} />
          <Route path="/login" element={<Login toggleForm={toggleForm} handleLoginSuccess={handleLoginSuccess} role={role} />} />
          <Route path="/Admin" element={<AdminLogin />} />
          <Route path="/signup" element={<Signup toggleForm={toggleForm} role={role} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/browse" element={<Main />} />
          <Route path="/rdash/*" element={<CandidLayout />} />
          <Route path="/cdash/*" element={<JobLayout />} />
          <Route path="/admindash/*" element={<AdminLayout />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
