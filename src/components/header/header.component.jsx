import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <i class="fa-solid fa-crown logo"></i>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
