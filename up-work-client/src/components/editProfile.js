import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import service from "../api/service";

const API_URL = "http://localhost:5005";

function EditProfile() {

    const[firstName, setfirstName] = useState('');
    const[lastName, setlastName] = useState('');
    const[role, setrole] = useState('');
    const[email, setemail] = useState('');
    const[phone, setphone] = useState('');
    const[location, setlocation] = useState('');
    const[about, setabout] = useState('');
    const[skills, setskills] = useState('');
    const[image, setimage] = useState('');
    const[linkedin, setlinkedin] = useState('');


    const {id} =useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        axios
          .get(`${API_URL}/api/profile/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
          .then((response) => {
            const oneProfile = response.data;
            setfirstName(oneProfile.firstName);
            setlastName(oneProfile.lastName);
            setrole(oneProfile.role);
            setemail(oneProfile.email);
            setphone(oneProfile.phone);
            setlocation(oneProfile.location);
            setabout(oneProfile.about);
            setskills(oneProfile.skills);
            setimage(oneProfile.image);
            setlinkedin(oneProfile.linkedin);
          })
          .catch((error) => console.log(error));
        
      }, [id]);

      const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestBody = { firstName, lastName, role, email, phone, location, about,skills,image,linkedin };
        const storedToken = localStorage.getItem('authToken');
    
        axios
          .put(`${API_URL}/api/profile/${id}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
          .then((response) => {
            navigate(`/profile/${id}`)
          });
      };

      const handleFileUpload = (e) => {
     
        const uploadData = new FormData();

        uploadData.append("image", e.target.files[0]);
     
        service
          .uploadImage(uploadData)
          .then(response => {
            setimage(response.fileUrl);
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };

  return (
    <div>
        <h1>Edit Profile</h1>
        <form onSubmit={handleFormSubmit}>
            <label>First Name</label>
            <input type="text" name="firstName" value={firstName} onChange={(e) => setfirstName(e.target.value)}/>

            <label>Last Name</label>
            <input type="text" name="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} />

            <label>role</label>
            <input type="Date" name="role" value={role} onChange={(e) => setrole(e.target.value)} />

            <label>email</label>
            <input type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} />

            <label>Phone</label>
            <input type="number" name="phone" value={phone} onChange={(e) => setphone(e.target.value)} />

            <label>Location</label>
            <input type="text" name="location" value={location} onChange={(e) => setlocation(e.target.value)} />

            <label>Skills</label>
            <input type="text" name="skills" value={skills} onChange={(e) => setabout(e.target.value)} />

            <label>About</label>
            <textarea type="text" name="about" value={about} onChange={(e) => setskills(e.target.value)} ></textarea>

            <label>Linkedin</label>
            <input type="url" name="linkedin" value={linkedin} onChange={(e) => setlinkedin(e.target.value)} />

            <label>Image</label>
            <input type="file" onChange={(e) => handleFileUpload(e)} />

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default EditProfile