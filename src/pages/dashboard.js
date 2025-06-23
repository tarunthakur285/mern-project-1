import { Link } from 'react-router-dom';
function Dashboard() {
    return(
        <div className="container text-center">
            <h1>User Dashboard Page</h1>
            <Link to="/logout" className="btn btn-primary">Logout</Link>
        </div>
    );
}
export default Dashboard;