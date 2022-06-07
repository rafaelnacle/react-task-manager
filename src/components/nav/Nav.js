import React from "react";
import "../nav/Nav.scss";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#">Item1</a>
        </li>
        <li>
          <a href="#">Item2</a>
        </li>
        <li>
          <a href="#">Item3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
