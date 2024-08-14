import "../Landingcss/About.css";
import Aman from "../Assests/boy.png";
import React from "react";
import man from "../Assests/leftman.png";
import women from "../Assests/mannn.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaPinterest,
    FaHome,
    FaGoogle,
    FaBoxes,FaStock,
    FaPhone,FaSearch,
    FaHSquare,
    FaIndustry
  } from "react-icons/fa";
  
function About()
{
  useEffect(() => {
    const text = document.querySelector('.Aright');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });
    if (text) observer.observe(text);
    return () => {
      observer.disconnect();
    };
  }, []);
  
    return(
        <> <div className="topspace"></div><div className="Abouttop">
        <h1>About Us</h1>
        <div className="line"></div>
        <p>
          Digital platform that connects employers with job seekers, <br />{" "}
          providing a space for posting job listings and applying for positions,
          To get a Dream job
        </p>
      </div>
      <div className="About">
     
      <div className="Aright">
      <h1>
        Helps You to Get the <br/> Best Job That fits You
      </h1>
      <p>
          Digital platform that connects employers with job seekers, <br />{" "}
          providing a space for posting job listings and applying for positions,
          To get a Dream job
        </p>
        <div className="ico">
        <FaBoxes
                      id="ic"
                      style={{color:'white', width: "40px", height: "40px", margin: "18px",backgroundColor:' rgb(215, 38, 56)',padding:'10px',borderRadius:'10px'}}
                    />  <p> <span style={{fontSize:'24px',fontWeight:'600'}}>#1 Job site in Country </span><br/>
          Digital platform that connects employers with job seekers, <br />{" "}
          providing a space for posting job listings  To get a Dream job
        </p>
        </div>
        <div className="ico">
        <FaSearch
                      id="ic"
                      style={{color:'white', width: "40px", height: "40px", margin: "18px",backgroundColor:' rgb(227, 178, 60)',padding:'10px',borderRadius:'10px'}}
                    />  <p> <span style={{fontSize:'24px',fontWeight:'600'}}>Seamless Search </span><br/>
          Digital platform that connects employers with job seekers, <br />{" "}
          providing a space for posting job listings  To get a Dream job
        </p>
        </div>
        <div className="ico">
        <FaIndustry                      id="ic"
                      style={{color:'white', width: "40px", height: "40px", margin: "18px",backgroundColor:' rgb(94, 243, 140)',padding:'10px',borderRadius:'10px'}}
                    />  <p> <span style={{fontSize:'24px',fontWeight:'600'}}>Hired in Top Companies </span><br/>
          Digital platform that connects employers with job seekers, <br />{" "}
          providing a space for posting job listings  To get a Dream job
        </p>
        </div>
      </div>
     
      <div className="Abr">
          <img className="womenA" src={women} alt="/" />
        </div>
        <div className="coverA"></div>
      </div>
         <div className="topspace"></div>
      </>
    )
}
export default About;