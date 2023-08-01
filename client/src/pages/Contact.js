import React from "react";
import Layout from "./../components/Layout/Layout.js";
import contactImg from "../img/contact.jpg";

import { IconContext } from "react-icons";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <Layout title={"Contact - eCommerce app"}>
      <div className="  row contactus ">
        <div className="col-md-6 ">
          <img
            src={contactImg}
            alt="contactus"
            className="img-fluid max-width:100% height:auto"
            // style={{ height: "auto" }}
          />
        </div>

        <div className="col-md-4  ">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Feel free to contact for more info about this app.
          </p>
          <div className="border border-dark rounded d-sm-flex flex-column ">
            <a
              className="p-2"
              href="https://github.com/DaGoMu/eCommerce-Project-Test"
            >
              <IconContext.Provider value={{ size: 50 }}>
                <BsGithub /> My Github
              </IconContext.Provider>
            </a>

            <div className="p-2">
              <IconContext.Provider value={{ size: 50 }}>
                <HiOutlineMail /> Contact by Email
              </IconContext.Provider>
            </div>
            <div className="p-2">
              <IconContext.Provider value={{ size: 35 }}>
                <BsFillTelephoneFill /> Phone: 111-222-333
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
