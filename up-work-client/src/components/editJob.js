import React from 'react'

function editJob() {
  return (
    <div>
        <h1>Edit Job</h1>
        <label>Title</label>
        <input type='text'/>

        <label>Description:</label>
        <textarea type="text" name=""></textarea>

        <label>Contact: </label>
        <input type='text'/>
        <button type="submit">Edit Job</button>
    </div>
  )
}

export default editJob