import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/auth/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Login Successful", response.data);
        // Display success toast notification
        toast.success("Login successful!");
      })
      .catch((err) => {
        console.log("error occurred", err.response.data);
        // Display error toast notification based on server response
        if (err.response.status === 401) {
          toast.error("Invalid email or password");
        } else {
          toast.error("Invalid email or password.");
        }
      });
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} onChange={handleEmail} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button type="submit">Submit</button>
        <p className="register-link">
          Not yet registered? <Link to="/register">Register here.</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginComponent;
