import "./Profile.css";
import React, { useState } from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Profile = () => {
    const [name, setName] = useState("Kowsik");
    const [company, setCompany] = useState("Amazon");
    const [email, setEmail] = useState("Kowshik@example.com");
    const [phone, setPhone] = useState("7373499828");
    const [address, setAddress] = useState("Coimbatore");
    const [linkedin, setLinkedin] = useState("https://linkedin.com/in/johndoe");
    const [bio, setBio] = useState("A Passionate Software developer who is always interested in solving problems");
    const [profilePicture, setProfilePicture] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        console.log("Profile Submitted", { name, company, email, phone, address, linkedin, bio, profilePicture });
    };

    return (
        <div className="profile-container">
            <div className="profile-background"></div>
            <div className="profile-content">
                <h2 style={{ textAlign: "center" }}>My Profile</h2>
                {isEditing ? (
                    <form onSubmit={handleSubmit} className="profile-form">
                        <div className="profile-picture-container">
                            <label htmlFor="profile-picture" className="profile-picture-label">
                                {profilePicture ? (
                                    <img src={profilePicture} alt="Profile" className="profile-picture" />
                                ) : (
                                    <FontAwesomeIcon icon={faCamera} className="camera-icon" />
                                )}
                            </label>
                            <input
                                type="file"
                                id="profile-picture"
                                accept="image/*"
                                onChange={handlePictureChange}
                                style={{ display: 'none' }}
                            />
                        </div>
                        <div className="form-group-horizontal">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company:</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group-horizontal">
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="linkedin">LinkedIn Profile:</label>
                            <input
                                type="url"
                                id="linkedin"
                                value={linkedin}
                                onChange={(e) => setLinkedin(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="bio">Bio:</label>
                            <textarea
                                id="bio"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">Save</button>
                    </form>
                ) : (
                    <div className="profile-view">
                        <div className="profile-picture-container">
                            <img
                                src={profilePicture || "https://img.freepik.com/free-photo/front-view-smiley-man-holding-laptop_23-2148946208.jpg"}
                                alt="Profile"
                                className="profile-picture"
                            />
                        </div>
                        <div className="profile-details">
                            <p><strong>Name:</strong> {name}</p>
                            <p><strong>Company:</strong> {company}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Phone:</strong> {phone}</p>
                            <p><strong>Address:</strong> {address}</p>
                            <p><strong>LinkedIn:</strong> <a href={linkedin} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
                            <p><strong>Bio:</strong> {bio}</p>
                        </div>
                        <button onClick={handleEditToggle} className="edit-button">Edit Profile</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
