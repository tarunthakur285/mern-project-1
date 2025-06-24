import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Applayout from "./layout/Applayout";
import Dashboard from "./pages/dashboard"; // Make sure the file name matches (uppercase 'D')
import Error from "./pages/Error"; // Import Error component
import Logout from "./logout"; // Import Logout function
import Signup from "./Signup";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const updateUserDetails = (updatedUserDetails) => {
    setUserDetails(updatedUserDetails);
  };

  const isUserLoggedIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/auth/is-user-logged-in",{},
        { withCredentials: true }
      );
      setUserDetails(response.data.user);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          userDetails ? (
            <Navigate to="/dashboard" />
          ) : (
            <Applayout>
              <Home />
            </Applayout>
          )
        }
      />
      <Route
        path="/login"
        element={
          userDetails ? (
            <Navigate to="/dashboard" />
          ) : (
            <Applayout>
              <Login updateUserDetails={updateUserDetails} />
            </Applayout>
          )
        }
      />
      <Route
        path="/logout"
        element={userDetails ? 
          <Logout updateUserDetails={updateUserDetails} /> :
          <Navigate to="/login" />
        }
      />
      <Route
        path="/dashboard"
        element={
          userDetails ? <Dashboard /> : <Navigate to="/login" />
        }
      />
      <Route
        path="/signup"
        element={
          <Applayout>
            <Signup />
          </Applayout>
        }
      />
    </Routes>
  );
}

export default App;
