import "./myapp.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Apple from "./Images/applelogo.png";
import Dell from "./Images/Dell.png";
import Facebook from "./Images/facebooklogo.png";
import Ford from "./Images/ford.png";
import Google from "./Images/Google.png";
import Hyundai from "./Images/Hyundai.png";
import Instagram from "./Images/instalogo.png";
import Qualcomm from "./Images/Qualcomm.png";
import Samsung from "./Images/Samsung.png";
import Tesco from "./Images/Tescco.png";
import WhatsApp from "./Images/whatsappicon.png";
const MyApp = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/cdash/applications")
            .then(response => {
                setApplications(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    const getCompanyLogo = (company) => {
        if (!company) return null;
        switch (company.toLowerCase()) {
            case "apple":
                return Apple;
            case "dell":
                return Dell;
            case "facebook":
                return Facebook;
            case "tesco":
                return Tesco;
            case "whatsapp":
                return WhatsApp;
            case "qualcomm":
                return Qualcomm;
            case "ford":
                return Ford;
            case "hyundai":
                return Hyundai;
            case "instagram":
                return Instagram;
            case "google":
                return Google;
            case "samsung":
                return Samsung;
            default:
                return null;
        }
    };


    return (
        <div>
            <h1>My Applications</h1>
            <div className="applications-list">
                {applications.map(application => (
                    <div key={application.id} className="application-card">
                        {getCompanyLogo(application.company) && (
                            <img
                                src={getCompanyLogo(application.company)}
                                alt={`${application.company} logo`}
                                className="company-logo"
                            />
                        )}
                        <div className="application-info">
                            <h3>{application.jobTitle ? application.jobTitle : "Job Title Not Available"}</h3>
                            <p><strong>Company:</strong> {application.company ? application.company : "Company Not Available"}</p>
                            <p><strong>Status:</strong> {application.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyApp;
