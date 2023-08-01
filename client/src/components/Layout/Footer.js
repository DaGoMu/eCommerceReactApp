import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <h4 className="text-center">All Rights Reserved &copy; DaGoMu</h4>

        <p className="text-center mt-3">
          <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
          <Link to="/policy">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
