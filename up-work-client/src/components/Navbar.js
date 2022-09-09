import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
 
function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
 
  

  return (
    <nav>
        
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
        <div>
            <NavLink to="/signup" style={{marginRight: '20px'}}>Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;