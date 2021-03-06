import React from "react";
import verified from "../../../assets/verified.svg";
import forward from "../../../assets/forward.svg";
import "./Complete-setup.css";
const CompleteSetup = () => {
  return (
    <div>
      <div className="popInfo">
        <img className="verified-icon p-4" src={verified} alt="" srcSet="" />
        <p className="pop-text-red m-2">Complete Setup</p>
        <p className="pop-text-norm m-2">
          Complete your account to enjoy more Ovest benefits.
        </p>
        <img className="forward-icon m-5" src={forward} alt="" />
      </div>
    </div>
  );
};

export default CompleteSetup;
