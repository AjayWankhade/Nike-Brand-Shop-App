import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="brand"></img>
        </div>

        <ul>
          <Link to="/">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="location">Location</Link>
          <Link to="contact">Contact</Link>
        </ul>
        <div>
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
