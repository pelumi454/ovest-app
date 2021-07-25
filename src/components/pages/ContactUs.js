import React from "react";
import "../../App.css";
import "./ContactUs.css";
import Footer from "./footer";
import DefaultLayout from "../../layouts/DefaultLayout";

const ContactUs = () => {
  return (
    <>
      <DefaultLayout>
        <div>
          <div className="contactus">
            <div className="contactus-main">
              <div className="contactus-header">
                <h5 className="contactus-header-h5">Contact Us</h5>
                <p className="contactus-header-p">
                  Need support? Have a question? Running into a problem? We’re
                  here to help.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </DefaultLayout>
    </>
  );
};
export default ContactUs;
