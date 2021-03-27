import React from "react";

const styles = {
    navbarStyle: {
      background: "#4663ac",
      height: "60px"
    },
    link: {
    color: "white",
    fontSize: "1.3rem",
    textDecoration: "none",
    margin: "5px",
    lineHeight: 3
    }
  };
  
  // We use JSX curly braces to evaluate the style object on the JSX tag
  
  function Navbar() {
    return (
      <nav style={styles.navbarStyle} className="navbar">
        <a style={styles.link} href="/">Employee Directory (#19)</a>
      </nav>
    );
  }

export default Navbar;



