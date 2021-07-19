import React from "react";
import upgreen from "../../../assets/upgreen.svg";
import "./Transctiondetails.css";
import TransactionDetails from "../../main/TransactionDetails";

const Creditransaction = () => {
  return (
    <div className="deposit-main">
      <TransactionDetails
        icon={upgreen}
        title={"Savest deposit"}
        date={"Mar 30, 2021"}
        amount={"+ $10,000.00"}
        style={{ color: "#038830" }}
      />

      <div className="hr"></div>
      <TransactionDetails
        icon={upgreen}
        title={"Savest deposit"}
        date={"Mar 30, 2021"}
        amount={"+ $10,000.00"}
        style={{ color: "#038830" }}
      />
      <div className="hr"></div>
      <TransactionDetails
        icon={upgreen}
        title={"Savest deposit"}
        date={"Mar 30, 2021"}
        amount={"+ $10,000.00"}
        style={{ color: "#038830" }}
      />
      <div className="hr"></div>
      <TransactionDetails
        icon={upgreen}
        title={"Savest deposit"}
        date={"Mar 30, 2021"}
        amount={"+ $10,000.00"}
        style={{ color: "#038830" }}
      />
      <div className="hr"></div>
    </div>
  );
};

export default Creditransaction;
