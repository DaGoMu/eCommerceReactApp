import React from "react";
import Layout from "./../components/Layout/Layout.js";
import { Link } from "react-router-dom";
import aboutImg from "../img/about.jpg";

const About = () => {
  return (
    <Layout title={"About us - eCommerce app"}>
      <div className="row aboutus ">
        <div className="col-md-6">
          <img
            src={aboutImg}
            alt="about"
            className="img-fluid max-width:100% height:auto"
            // style={{ height: "auto" }}
          />
        </div>

        <div className="col-md-4 ">
          <h1 className="bg-dark p-2 text-white text-center">About Us</h1>
          <p className="text-center mt-5  border border-info rounded ">
            This web is an experimental app for my Devcamp Course. Is not a real
            online shop so please do not use real info. You can simulate to
            create a new user, add products to cart and fake the payment.
          </p>
          <p>
            If you have any problems or want to know about this app...
            <Link to="/contact">Contact Us</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
