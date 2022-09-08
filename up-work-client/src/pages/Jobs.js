import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Jobs(jobData) {
  const [joblist, setNewjob] = useState(jobData)

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