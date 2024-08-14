import React, { useState } from "react";
import { FaLinkedin, FaGoogle, FaFacebook } from "react-icons/fa";
import "../Landingcss/AdminLogin.css"; // Ensure this path matches the updated CSS file
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode"; // Ensure the correct import here
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const adminCredentials = {
    username: "jobhive",
    password: "jobhive123"
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === adminCredentials.username && password === adminCredentials.password) {
      console.log("Admin login successful");
      navigate("/admindash/dashboard"); // Navigate to admin dashboard
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const decodedToken = jwtDecode(credentialResponse.credential);
    setUsername(decodedToken.name);
    console.log('Google login success:', decodedToken);
    navigate("/admindash/dashboard"); // Navigate to admin dashboard after Google login
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  const handleClose = () => {
    navigate("/"); // Navigate to the home page
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="xouterAdmin">
      <div className="xoverlay">
        <div className="xLoginbox">
          <button className="xclose-button" onClick={handleClose}>
            &#10006;
          </button>
          <div className="xloginh1">
            <h1>Admin Login</h1>
          </div>
          <div className="xline"></div>
          <button className="xsocial-button xlkd">
            <FaLinkedin className="xicon" style={{ color: "white" }} /> <span>Log in With LinkedIn</span>
          </button>
          <button className="xsocial-button xgl">
            <FaFacebook className="xicon" /> <span>Log in With Facebook</span>
          </button>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
          <div className="xline"></div>
          <div className="xinputbox1">
            <label>Username</label>
            <input
              type="text"
              placeholder="Your username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>

          <div className="xinputbox2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter the password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <div className="xsubmitb">
            <button className="xsubmit" type="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="xtopspace"></div>
    </div>
  );
};

export default AdminLogin;
