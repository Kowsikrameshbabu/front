import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Admindash.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Analytics from './Analytics';
import Reports from './Reports';
import Profile from './Profile';
import { Navigate } from 'react-router-dom';

function Admindash() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className="content">
        <Routes>
        <Route path="/" element={<Navigate to="admindash/dashboard" />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="aanalytics" element={<Analytics />} />
          <Route path="pprofile" element={<Profile />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
}

export default Admindash;
