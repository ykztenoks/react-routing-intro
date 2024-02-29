// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/projects">
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
