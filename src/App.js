import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Applayout from "./layout/Applayout";
import Dashboard from "./pages/dashboard"; // Make sure this exists

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const updateuserDetails = (updatedUserDetails) => {
    setUserDetails(updatedUserDetails);
  };

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
              <Login updatedUserDetails={updateuserDetails} />
            </Applayout>
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          userDetails ? (
            <Dashboard />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}

export default App;
