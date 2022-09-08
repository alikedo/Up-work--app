import { NavLink } from "react-router-dom";

function profile() {
  return (
    <div>
        <h1>Profile</h1>
        <NavLink to='/profile-edit/:id'>Edit Profile</NavLink>
        <img src="" />
        <p>Name:</p>
        <p>Birthday:</p>
        <p>Country:</p>
        <p>Education:</p>
        <p>CV:</p>
        <p>Linkedin: </p>
        <p>Jobs submitted:</p>
    </div>
  )
}

export default profile