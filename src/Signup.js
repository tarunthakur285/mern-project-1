import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      isValid = false;
      newErrors.name = "Name is mandatory";
    }
    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = "Email is mandatory";
    }
    if (!formData.password.trim()) {
      isValid = false;
      newErrors.password = "Password is mandatory";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (validate()) {
      const body={
        name:formData.name,
        email:formData.email,
        password:formData.password
      };
      const config={
        withCredentials:true
      };
      try{
        await axios.post('http://localhost:5001/auth/register', body, config);
        setMessage("Signup successful! Please login.");
        setTimeout(() => navigate('/login'), 1500);
      }
      catch(error){
        console.error(error);
        setErrors({message: error.response?.data?.message || "Something went wrong. Please try again."});
      }
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p style={{ color: "red" }}>{errors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password:</label><br />
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup; 