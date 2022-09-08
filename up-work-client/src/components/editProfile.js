import React from 'react'

function editProfile() {
  return (
    <div>
        <h1>Edit Profile</h1>
        <form>
            <label>Full Name</label>
            <input type="text" name="" />

            <label>Birthday</label>
            <input type="Date" name="" />

            <label>Country</label>
            <input type="text" name="" />

            <label>Education</label>
            <input type="text" name="" />

            <label>CV</label>
            <input type="url" name="" />

            <label>Linkedin</label>
            <input type="url" name="" />

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default editProfile