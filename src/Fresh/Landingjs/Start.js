import "../Landingcss/Start.css";
import Contact from "../Landingjs/Contact";
import Login from "../Landingjs/Login";
import React, { useEffect, useState } from "react";
import boy from "../Assests/boy.png";
import image from "../Assests/home3.svg";
import j1 from "../Assests/Icons/tech.svg";
import j2 from "../Assests/Icons/business.svg";
import j3 from "../Assests/Icons/j3.svg";
import j4 from "../Assests/Icons/j4.svg";
import j5 from "../Assests/Icons/j5.svg";
import j6 from "../Assests/Icons/j6.svg";
import j7 from "../Assests/Icons/j7.svg";
import j8 from "../Assests/Icons/j8.svg";
import man1 from "../Assests/banner.png";
import man2 from "../Assests/banner2.png";
import usericon1 from "../Assests/Icons/user icon.svg";
import usericon2 from "../Assests/resumeicon.svg";
import usericon3 from "../Assests/Icons/job.svg";
import women from "../Assests/women.png";
import { Link } from "react-router-dom";

function Start() {
    const [user, setUser] = useState({ loggedIn: false, email: "" });

    const toggleForm = (formType) => {
        console.log(`Toggling form: ${formType}`);
    };

    const handleLogout = () => {
        setUser({ loggedIn: false, email: "" });
    };

    useEffect(() => {
        const text = document.querySelector('.sRight');

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

    return (
        <>
            <div className="topspace"></div>

            <div className="start">
                <div className="cover"></div>
                <div className="simage">
                    <img className="sman2" src={man2} alt="/" />

                </div>
                <div className="cover"></div>
                <div className="sRight">
                    <h1>
                        Discover Your <br /> Dream job With <br />{" "}
                        <span className="slogo">JobHive</span> <p>
                        Discover top opportunities with JobHive,
                        <br /> Connect with leading employers and <br /> take the next
                        step in your career today.
                    </p>
                    </h1>
                    <span className="slogo1">Find your dream job!!</span>

                      
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Start;
