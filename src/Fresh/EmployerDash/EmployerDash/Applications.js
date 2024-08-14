import "./Applications.css";
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
import React, { useEffect, useState } from "react";
import axios from "axios";

const Applications = () => {
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

    const handleAction = (application, action) => {
        const data = {
            to: application.contact,
            status: action,
            company: application.company,
            jobTitle: application.jobTitle,
            username: application.firstName,
        };

        axios.post("http://localhost:4001/api/make-call", data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            console.log(`${action} action completed successfully:`, response.data);

            // Update the application's status in the state
            setApplications(prevApplications =>
                prevApplications.map(app =>
                    app.id === application.id ? { ...app, status: action } : app
                )
            );
        })
        .catch(error => {
            console.error(`There was an error processing the ${action} action:`, error.response ? error.response.data : error.message);
        });
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
                        <div className="action-buttons">
                            <button
                                className="accept-btn"
                                onClick={() => handleAction(application, "Accepted")}
                                disabled={application.status === "Accepted" || application.status === "Rejected"}
                            >
                                {application.status === "Accepted" ? "Accepted" : "Accept"}
                            </button>
                            <button
                                className="reject-btn"
                                onClick={() => handleAction(application, "Rejected")}
                                disabled={application.status === "Accepted" || application.status === "Rejected"}
                            >
                                {application.status === "Rejected" ? "Rejected" : "Reject"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applications;
