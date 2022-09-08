import React from 'react'

function editProfile() {
  return (
    <div>
        <h1>Edit Profile</h1>
        <form>
            <label>First Name</label>
            <input type="text" name="" />

            <label>Last Name</label>
            <input type="text" name="" />

            <label>Birthday</label>
            <input type="Date" name="" />

            <label>email</label>
            <input type="email" name="" />

            <label>Phone</label>
            <input type="number" name="" />

            <label>Location</label>
            <input type="text" name="" />

            <label>Skills</label>
            <input type="text" name="" />

            <label>About</label>
            <input type="url" name="" />

            <label>Linkedin</label>
            <input type="url" name="" />

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default editProfile