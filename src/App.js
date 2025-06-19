import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import Applayout from "./layout/Applayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Applayout><Home /></Applayout>} />
      <Route path="/login" element={<Applayout><Login /></Applayout>} />
    </Routes>
  );
}

export default App;
