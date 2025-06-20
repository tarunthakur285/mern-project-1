import React, { useState } from "react";
import axios from "axios";
function Login({ updatedUserDetails }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.username.trim()) {
      isValid = false;
      newErrors.username = "Username is mandatory";
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
        username:formData.username,
        password:formData.password
      };
      const config={
        withCredentials:true
      };
      try{
      const response= await axios.post('http://localhost:5001/auth/login', body, config);
      updatedUserDetails(response.data.user);
      }
      catch(error){
        console.error(error);
        setErrors({message:"Something went wrong. Please try again."});
      }
  }
  };
  return (
    <div style={{ textAlign: "center" }}>
      {message && <p>{message}</p>}
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label><br />
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p style={{ color: "red" }}>{errors.username}</p>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
