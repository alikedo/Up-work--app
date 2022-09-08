import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddJobs(props) {

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");
    const [level, setLevel] = useState("");
    const [owner, setOwner] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title, description, skills, level };
    
    const storedToken = localStorage.getItem('authToken');
 
    axios
      .post(
      `${API_URL}`,
      requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } } 
    )
      .then((response) => {
      // Reset the state
      setTitle("");
      setCompany("");
      setDescription("");
      setSkills("");
      setLevel("");
      setOwner("");
      
    })
      .catch((error) => console.log(error));
  };

  return (
    <div >
        <h1>Add Job</h1>
        <form onSubmit={handleSubmit}>

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
    </div>
  )
}

export default AddJobs