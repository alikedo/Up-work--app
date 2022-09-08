import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function HomePage() {
  return (
    <div className="App">
      <h1>Upwork</h1>
      <Link to='/jobs'>Jobs</Link>
    </div>
  );
}

export default HomePage;
