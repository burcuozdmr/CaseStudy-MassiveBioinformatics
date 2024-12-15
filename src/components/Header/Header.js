import React from "react";
import logo from "../../assets/rickandmorty-logo.png";
import deneme from "../../assets/deneme.png";
import classes from "./Header.module.css";

function Header() {
  return (
    <div>
      <nav className="navbar bg-dark bg-opacity-100">
        <div className="container-fluid container">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center gap-3 "
            href="#"
          >
            <img
              src={logo}
              alt="Logo"
              width="80"
              height="auto"
              className="d-inline-block align-text-top"
            />
            <header className="text-success fw-bold fs-4">
              {" "}
              Rick and Morty Characters
            </header>
          </a>
        </div>
      </nav>
      <div  className={classes.mainImage} >
        <img src={deneme} alt="Logo"/>
      </div>
    </div>
  );
}

export default Header;
