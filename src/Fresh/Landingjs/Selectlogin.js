import React, { useState } from "react";
import "../Landingcss/Selectlogin.css";
import women from "../Assests/womenn.png";
import AdminLogin from "./Adminlogin";
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function Selectlogin({ toggleForm }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formType, setFormType] = useState(null);
  const navigate = useNavigate();

  const handleRoleSelection = (role, type = null) => {
    console.log(`Selected Role: ${role}, Form Type: ${type}`);
    setSelectedRole(role);
    setFormType(type);
    if (role === 'Admin') {
      navigate('/Admin'); 
   
    }
  };

  const renderForm = () => {
    console.log(`Rendering form for role: ${selectedRole}`);
    if (selectedRole === 'Admin') {
      return (
        <div className="admin-overlay">
          <AdminLogin onClose={() => setSelectedRole(null)} />
        </div>
      );
    }
    if (formType === 'login') {
      return (
        <Login 
          toggleForm={toggleForm} 
          role={selectedRole} 
          onLoginSuccess={(user) => console.log(`${selectedRole} logged in:`, user)} 
        />
      );
    }
    if (formType === 'signup') {
      return (
        <Signup 
          toggleForm={toggleForm} 
          role={selectedRole} 
        />
      );
    }
    return null;
  };

  return (
    <div className={`ssbox ${selectedRole === 'Admin' ? 'blur-background' : ''}`}>
      <div className="topspace"></div>
      <div className="topspace"></div>
      <div className="topspace"></div>
      <div className="sbox">
        <div className="sbl">
          <h1 className="s1">
            Find a Job
            <a onClick={() => handleRoleSelection('Candidate', 'login')}>Login</a>
            <a onClick={() => handleRoleSelection('Candidate', 'signup')}>Signup</a>
            <br /> With JobHive
          </h1>
          <h1 className="s2">
            Hire a Talent
            <a onClick={() => handleRoleSelection('Recruiter', 'login')}>Login</a>
            <a onClick={() => handleRoleSelection('Recruiter', 'signup')}>Signup</a>
            <br /> as recruiter
          </h1>
          <h1 className="s3">
            Admin here
            <a onClick={() => handleRoleSelection('Admin')}>Login</a>
          </h1>
        </div>
        <div className="sbr">
          <img className="womens" src={women} alt="Women" />
        </div>
      </div>
      {renderForm()}
    </div>
  );
}

export default Selectlogin;
