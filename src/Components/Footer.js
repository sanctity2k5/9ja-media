import React from "react";
import Spinner from 'react-bootstrap/Spinner'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <h6><Spinner className = "spinner-grow-foot-one" animation="grow" variant = "success" />A-Tech Services <Spinner className = "spinner-grow-foot" animation="grow" variant = "success" /></h6>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
