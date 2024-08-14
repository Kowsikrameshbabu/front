import "./resume.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [resumeUrl, setResumeUrl] = useState('');
    const [resumes, setResumes] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
                    alert(`Resume uploaded successfully`);

        // const formData = new FormData();
        // formData.append('name', name);
        // formData.append('file', file);

        // try {
        //     const response = await axios.post('http://localhost:8080/api/resumes/upload', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });
        //     console.log('Upload response:', response.data);
        //     alert(`Resume uploaded successfully with ID: ${response.data.id}`);
        //     fetchResumes(); // Fetch the updated list of resumes after successful upload
        // } catch (error) {
        //     console.error('Error uploading file:', error);
        // }
    };

    const handleRetrieve = async () => {
        try {
            const resumeResponse = await axios.get('http://localhost:8080/api/resumes/1', {
                responseType: 'blob',
            });
            const url = URL.createObjectURL(new Blob([resumeResponse.data], { type: 'application/pdf' }));
            setResumeUrl(url);
        } catch (error) {
            console.error('Error fetching file:', error);
        }
    };

    const fetchResumes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/resumes/all');
            setResumes(response.data);
        } catch (error) {
            console.error('Error fetching resumes:', error);
        }
    };

    useEffect(() => {
        fetchResumes(); // Fetch resumes when the component mounts
    }, []);

    return (
        <div className="fileuploadmaindiv">
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Name" required />
                <input type="file" onChange={handleFileChange} required />
                <button type="submit" style={{ marginTop: '20px' }}>Upload</button>
                </form>



            {resumeUrl && <iframe src={resumeUrl} width="100%" height="600px" title="Resume Viewer" />}

          
        </div>
    );
};

export default FileUpload;
