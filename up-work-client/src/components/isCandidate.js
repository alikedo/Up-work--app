import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function isCandidate({ children }) {
    const { isLoggedIn, isLoading, user } = useContext(AuthContext);

    if (isLoading) return <p>Loading ...</p>;
 
    if (!isLoggedIn) {

      return <Navigate to="/login" />;
    } else if(user.userType!=='candidate'){
        return <Navigate to="/" />;
    }else {
    
      return children;
    }
}

export default isCandidate