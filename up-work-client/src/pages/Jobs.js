import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Jobs(jobData) {
  const [search, setSearch] = useState("");
  const [joblist, setNewjob] = useState([])

  useEffect(()=>{
    updateJobList(search);
}, [search])

const updateJobList = (searchInput) => {
  if(search === ""){
    setNewjob(jobData)
  }
  else {
  setSearch(searchInput)
  const inputSearch = searchInput.toLowerCase();
  const filteredJob = joblist.filter(job => job.title.toLowerCase().includes(inputSearch))
  setNewjob(filteredJob);
  }
} 


  return (
    <div>
      <h1>List of Jobs</h1>
      <label>Search</label>
      <input value={search} type="text" onChange={(event) => {setSearch(event.target.value)}} />
      {joblist.map( () => {
        return (
      <div>
        <p>title: </p>
        <p>Company: </p>
        <p>Description: </p>
        <p>Skills: </p>
        <p>Level: </p>

      </div>
      )}
      )}
    </div>
  )
}

export default Jobs