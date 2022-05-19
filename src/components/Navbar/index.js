import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar() {
  return (
    <nav id="navbar-example2" className="navbar navbar-light bg-light">
      <div>
        <ul className="navbar">
          <li className="nav">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>

          <li className="nav">
            <Link
              to="Products"
              className={
                window.location.pathname === "/Products"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Products
            </Link>
          </li>
          <li className="nav">
            <Link
              to="Landing"
              className={
                window.location.pathname === "/Landing"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Landing
            </Link>
          </li>
          <li className="nav">
            <Link
              to="Bag"
              className={
                window.location.pathname === "/Bag"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Bag
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
