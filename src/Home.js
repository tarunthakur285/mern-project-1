import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <Link to="/login" className="btn btn-primary mt-3">Go to Login</Link>
    </div>
  );
}

export default Home;
