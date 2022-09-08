import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditJob(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [level, setLevel] = useState("");
  
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    axios
      .get(`${API_URL}/${jobId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const oneJob = response.data;
        setTitle(oneJob.title);
        setDescription(oneJob.description);
        setSkills(oneJob.skills);
        setLevel(oneJob.level);

      })
      .catch((error) => console.log(error));
    
  }, [jobId]);
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, skills, level };
    const storedToken = localStorage.getItem('authToken');

    axios
      .put(`${API_URL}/${jobId}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        navigate(`/jobs/${jobId}`)
      });
  };
  
  
  const deleteJob = () => {
    const storedToken = localStorage.getItem('authToken');
    axios
      .delete(`${API_URL}/${jobId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(() => {
        navigate("/jobs");
      })
      .catch((err) => console.log(err));
  };  

  return (
    <div>
        <h1>Edit Job</h1>
        <form  onSubmit={handleFormSubmit}>

        <label>Title</label>
        <input type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}/>

        <label>Description:</label>
        <textarea type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>

        <label>Skills: </label>
        <input type="text"
          name="skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}/>

        <label>Level: </label>
        <input type="text"
          name="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}/>

        <button type="submit">Add Job</button>
        </form>
        <button onClick={deleteJob}>Delete Job</button>
    </div>
  )
}

export default EditJob