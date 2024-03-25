function RegisterComponent() {
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterComponent;
