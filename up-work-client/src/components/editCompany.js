import React from 'react'

function editCompany() {
  return (
    <div>
        <h1>Edit Company</h1>
        <form>
            <label>Company Name</label>
            <input type="text" name="" />

            <label>Description</label>
            <textarea type="text" name=""></textarea>

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default editCompany