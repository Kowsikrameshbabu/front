import React, { useState } from "react";
// import jsPDF from "jspdf";

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    professionTitle: "",
    location: "",
    web: "",
    salary: "",
    age: "",
    education: [{ degree: "", field: "", from: "", to: "", school: "", description: "" }],
    experience: [{ companyName: "", title: "", from: "", to: "", description: "" }],
    skills: [{ skillName: "", skillLevel: "" }],
  });
  
  const [resumeCreated, setResumeCreated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, index, key) => {
    const newArray = [...formData[key]];
    newArray[index][e.target.name] = e.target.value;
    setFormData({ ...formData, [key]: newArray });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { degree: "", field: "", from: "", to: "", school: "", description: "" }],
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { companyName: "", title: "", from: "", to: "", description: "" }],
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, { skillName: "", skillLevel: "" }],
    });
  };

  const deleteArrayItem = (index, key) => {
    const newArray = [...formData[key]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [key]: newArray });
  };

  const handleCreateResume = () => {
    // Create PDF here using jsPDF or any other method
    // For now, we'll just display the resume data on the page
    setResumeCreated(true);
  };

  if (resumeCreated) {
    return (
      <div className="resume-preview">
        <h1>{formData.name}</h1>
        <h2>{formData.professionTitle}</h2>
        <p>{formData.email}</p>
        <p>{formData.location}</p>
        <p>{formData.web}</p>
        <p>{formData.salary}</p>
        <p>{formData.age} years old</p>
        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.degree} in {edu.field}</h4>
            <p>{edu.school} ({edu.from} - {edu.to})</p>
            <p>{edu.description}</p>
          </div>
        ))}
        <h3>Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <h4>{exp.title} at {exp.companyName}</h4>
            <p>{exp.from} - {exp.to}</p>
            <p>{exp.description}</p>
          </div>
        ))}
        <h3>Skills</h3>
        {formData.skills.map((skill, index) => (
          <div key={index}>
            <p>{skill.skillName}: {skill.skillLevel}%</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <form className="resume-form">
      <h2>Basic Information</h2>
      <div>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
      </div>
      <div>
      <input name="professionTitle" placeholder="Profession Title" value={formData.professionTitle} onChange={handleInputChange} />
      <input name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} />
      </div>
      <div>
      <input name="web" placeholder="Website" value={formData.web} onChange={handleInputChange} />
      <input name="salary" placeholder="Salary" value={formData.salary} onChange={handleInputChange} />
      </div>
      <input name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} />

      <h2>Education</h2>
      {formData.education.map((edu, index) => (
        <div key={index} className="education-section">
          <input name="degree" placeholder="Degree" value={edu.degree} onChange={(e) => handleArrayChange(e, index, "education")} />
          <input name="field" placeholder="Field of Study" value={edu.field} onChange={(e) => handleArrayChange(e, index, "education")} />
          <input name="from" placeholder="From" value={edu.from} onChange={(e) => handleArrayChange(e, index, "education")} />
          <input name="to" placeholder="To" value={edu.to} onChange={(e) => handleArrayChange(e, index, "education")} />
          <input name="school" placeholder="School" value={edu.school} onChange={(e) => handleArrayChange(e, index, "education")} />
          <textarea name="description" placeholder="Description" value={edu.description} onChange={(e) => handleArrayChange(e, index, "education")} />
          <button type="button" onClick={() => deleteArrayItem(index, "education")}>Delete This</button>
        </div>
      ))}
      <button type="button" onClick={addEducation}>Add New Education</button>

      <h2>Work Experience</h2>
      {formData.experience.map((exp, index) => (
        <div key={index} className="experience-section">
          <input name="companyName" placeholder="Company Name" value={exp.companyName} onChange={(e) => handleArrayChange(e, index, "experience")} />
          <input name="title" placeholder="Title" value={exp.title} onChange={(e) => handleArrayChange(e, index, "experience")} />
          <input name="from" placeholder="From" value={exp.from} onChange={(e) => handleArrayChange(e, index, "experience")} />
          <input name="to" placeholder="To" value={exp.to} onChange={(e) => handleArrayChange(e, index, "experience")} />
          <textarea name="description" placeholder="Description" value={exp.description} onChange={(e) => handleArrayChange(e, index, "experience")} />
          <button type="button" onClick={() => deleteArrayItem(index, "experience")}>Delete This</button>
        </div>
      ))}
      <button type="button" onClick={addExperience}>Add New Experience</button>

      <h2>Skills</h2>
      {formData.skills.map((skill, index) => (
        <div key={index} className="skills-section">
          <input name="skillName" placeholder="Skill Name" value={skill.skillName} onChange={(e) => handleArrayChange(e, index, "skills")} />
          <input name="skillLevel" placeholder="Skill Level" value={skill.skillLevel} onChange={(e) => handleArrayChange(e, index, "skills")} />
          <button type="button" onClick={() => deleteArrayItem(index, "skills")}>Delete This</button>
        </div>
      ))}
      <button type="button" onClick={addSkill}>Add New Skill</button>

      <button type="button" onClick={handleCreateResume}>Create Resume</button>
    </form>
  );
};

export default ResumeBuilder;
