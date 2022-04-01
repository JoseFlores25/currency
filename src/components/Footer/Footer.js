import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./footer.css";

export default function Footer() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://medium.com/@flores.jose2185/currency-exchange-85c2594bde89">
              Blogs
            </a>
          </li>
          <li>
            <a href="https://github.com/JoseFlores25/currency">Github</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
