import React from "react";
import "./SavestFlexible.css";

const CreateFlexible = () => {
  return (
    <div>
      <div>
        <div>
          <h5>Create Flexible Plan</h5>
          <p>
            Save strictly for emergencies and earn up to 3.5% every 15 days.
          </p>
        </div>
        <div className="savest-amount-tosave">
          <input type="text" />
        </div>
        <div className="amount-targeted">
          <input type="text" name="" id="" />
        </div>
        <div className="checkbox-automate">
          <input type="checkbox" name="" id="" />
          <input type="checkbox" name="" id="" />
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default CreateFlexible;
