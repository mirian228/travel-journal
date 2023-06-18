import React from "react";

function Navbar() {
  return (
    <nav className="nav">
      <img
        src={process.env.PUBLIC_URL + "/world.png"}
        alt="world"
        className="nav--image"
      ></img>
      <h1 className="nav--text">my travel journal.</h1>
    </nav>
  );
}

export default Navbar;
