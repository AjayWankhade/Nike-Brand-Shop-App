import { Link } from "react-router-dom";

function LoginComponent() {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
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
