import React, { useState } from 'react';
import './Profile.css';
import profileImage from './imgs/profile.png'; // Import the profile image

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [adminDetails, setAdminDetails] = useState({
    name: 'John Doe',
    email: 'admin@example.com',
    phone: '123-456-7890',
    designation: 'Administrator',
    description: 'Admin of the JobHive portal',
    gender: 'Male',
    adminId: 'A12345',
    dateOfBirth: '19-02-2000',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({ ...adminDetails, [name]: value });
  };

  return (
    <div className="profile-container">
      <div className={`profile-card ${isEditing ? 'expanded' : ''}`}>
        <img src={profileImage} alt="Profile" className="profile-image" />
        {isEditing ? (
          <div className="profile-details">
            {Object.keys(adminDetails).map((key) => (
              <input
                key={key}
                type="text"
                name={key}
                value={adminDetails[key]}
                onChange={handleChange}
                className="profile-input"
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              />
            ))}
            <button onClick={handleEditToggle} className="profile-button">Save</button>
          </div>
        ) : (
          <div className="profile-details">
            {Object.keys(adminDetails).map((key) => (
              <div key={key} className="profile-detail">
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {adminDetails[key]}
              </div>
            ))}
            <button onClick={handleEditToggle} className="profile-button">Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
