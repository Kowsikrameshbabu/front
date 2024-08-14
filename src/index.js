import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Nav from './Fresh/Landingjs/Navbar';
import Admindash from './Admindash/Admindash';

import { UserProvider } from './Fresh/Landingjs/UserContext';
import Manage from './Manage';
import ResumeBuilder from './ResumeBuilder';
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="927910245578-ej0ochoddhp1kboshn1rphl2subtcm06.apps.googleusercontent.com">
  <UserProvider>
        <App/>
      </UserProvider>
  </GoogleOAuthProvider>
  </React.StrictMode>
);