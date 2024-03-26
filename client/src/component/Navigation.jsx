import { Link, useLocation } from "react-router-dom"; // Import useLocation hook

function Navigation() {
  const location = useLocation(); // Get the current location

  // Define an array of paths where the navigation bar should be hidden
  const hiddenPaths = ["/login", "/register"];

  // Check if the current path is included in the hiddenPaths array
  const isHidden = hiddenPaths.includes(location.pathname);

  // Render the navigation bar only if the current path is not included in the hiddenPaths array
  if (isHidden) {
    return null;
  }

  // Render the navigation bar otherwise
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
