import React from "react";
import Layout from "./../components/Layout/Layout.js";

const Policy = () => {
  return (
    <Layout>
      <div className="d-flex flex-md-row justify-content-center privacy ">
        <div className="col-md-6">
          <div className="mt-md-5 ">
            <h1 className="bg-dark p-2 text-white text-center">
              Privacy Policy
            </h1>
            <ul className="text-center mt-5 text-uppercase border border-danger rounded ">
              <li className="mb-2 ">
                This is NOT a real shop. Only an eCommerce application exercise.
                We dont sell anything.
              </li>
              <li className="mb-2">
                Please do not input personal info into this web. We never send
                mails or receive money for the orders, so use this app at your
                own risk.
              </li>
              <li className="mb-2">
                The Payment Bridge system is only for experimental purposes. Do
                NOT use real Credit Card data.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
