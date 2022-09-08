import React from 'react'

function AddJobs() {
  return (
    <div>
        <h1>Add Job</h1>
        <label>Title</label>
        <input type='text'/>

        <label>Description:</label>
        <textarea type="text" name=""></textarea>

        <label>Contact: </label>
        <input type='text'/>
        <button type="submit">Add Job</button>
    </div>
  )
}

export default AddJobs