import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Jobs(jobData) {
  const [search, setSearch] = useState("");
  const [joblist, setNewjob] = useState(jobData)

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
      {joblist.map( e=> {
        return (
      <div>
        <p>title</p>
        <p>Description</p>
        <p>Contact</p>
      </div>
      )}
      )}
    </div>
  )
}

export default Jobs