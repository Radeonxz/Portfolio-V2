import * as React from "react";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      &#169; 2021 - {new Date().getFullYear()} Portfolio V2(Gatsby), Xz
    </footer>
  );
};

export default Footer;
