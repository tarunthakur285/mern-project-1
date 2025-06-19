import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Applayout from "./layout/Applayout";

function App() {
  const[userDetails, setUserDetails] = useState(null);
  const updateuserDetails=(updatedUserDetails)=>{
    setUserDetails(updatedUserDetails);
  };
  return (
    <Routes>
      <Route path="/" element={<Applayout><Home /></Applayout>} />
      <Route path="/login" element={<Applayout><Login /></Applayout>} />
      <Route path="/dashboard" element={<dashboard />} />
    </Routes>
  );
}

export default App;
