import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
 
function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
 
  

  return (
    <nav class="navbar navbar-expand-sm">
        
      <NavLink to="/">
        Home
      </NavLink>
 

      {isLoggedIn && (
        <>
          <NavLink to='/profile'>Profile</NavLink>
          <NavLink to='/company'>Your Company</NavLink>
          <button  onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}
 
      {!isLoggedIn && (
        <>
        <div class="collapse navbar-collapse justify-content-center">
        <ul class="navbar-nav">
        <li class="nav-item dropdown">
        <p class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sign Up</p>
        <div class="dropdown-menu">
            <NavLink to="/signupcand" class="dropdown-item">Candidate</NavLink><br></br>
            <NavLink to="/signupcomp" class="dropdown-item">Company</NavLink>
        </div>
        </li>
        <li class="nav-item dropdown">
        <p class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Log In</p>
          <div class="dropdown-menu">
            <NavLink to="/logincand" class="dropdown-item">Candidate</NavLink><br></br>
            <NavLink to="/logincomp" class="dropdown-item">Company</NavLink>
          </div>
          </li>
          </ul>
          </div>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;