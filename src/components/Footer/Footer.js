import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/crypto">Crypto</Link>
          </li>

          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
