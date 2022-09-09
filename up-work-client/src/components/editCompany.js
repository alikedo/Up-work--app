import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:5005";

function EditCompany() {

    const[name, setName] = useState('');
    const[description, setdescription] = useState('');
    const[address, setaddress] = useState('');


    const {id} =useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        axios
          .get(`${API_URL}/api/company/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
          .then((response) => {
            const oneProfile = response.data;
            setName(oneProfile.name);
            setdescription(oneProfile.description);
            setaddress(oneProfile.address);

          })
          .catch((error) => console.log(error));
        
      }, [id]);

      const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestBody = { name, description, address };
        const storedToken = localStorage.getItem('authToken');
    
        axios
          .put(`${API_URL}/api/company/${id}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
          .then((response) => {
            navigate(`/company/${id}`)
          });
      };

  return (
    <div>
        <h1>Edit Company</h1>
        <form  onSubmit={handleFormSubmit}>
            <label>Company Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Description</label>
            <textarea type="text" value={description} onChange={(e) => setdescription(e.target.value)}></textarea>

            <label>Address</label>
            <textarea type="text" value={address} onChange={(e) => setaddress(e.target.value)}></textarea>

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default EditCompany