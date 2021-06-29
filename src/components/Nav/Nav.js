import React from "react";

function Nav (props) {
  return (
    <ul className="nav nav-tabs" >
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.changeEl("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.changeEl("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#work"
          onClick={() => props.changeEl("Work")}
          className={props.currentPage === "Work" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Nav;