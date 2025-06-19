import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid text-center py-3 bg-light">
      <Link to="/" className="mx-2">Home</Link>
      <Link to="/login" className="mx-2">Login</Link>
    </div>
  );
}

export default Header;
