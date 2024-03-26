import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const hiddenPaths = ["/login", "/register"];

  const isHidden = hiddenPaths.includes(location.pathname);

  if (isHidden) {
    return null;
  }

  return (
    <>
      <nav className="container">
        <div className="logo">
          <a href="https://www.nike.com/in/">
            {" "}
            <img src="/images/brand_logo.png" alt="brand"></img>
          </a>
        </div>

        <ul>
          <Link to="/">Menu</Link>
          <a href="https://about.nike.com/en">About</a>
          <Link to="product">Product</Link>
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
