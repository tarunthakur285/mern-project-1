import React, { useState } from "react";
import axios from "axios";
function Login({ updateUserDetails }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {};

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
        username:formData.email,
        password:formData.password
      };
      const config={
        withCredentials:true
      };
      try{
      const response= await axios.post('http://localhost:5001/auth/login', body, config);
      updateUserDetails(response.data.user);
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
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
