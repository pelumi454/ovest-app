import React from "react";
import SelectSavestPlan from "../CreateSavestModal/SelectSavestPlan";
import CreateFlexible from "../CreateSavestModal/SavestFlexibleplan/CreateFlexible";
import backicon from "../../../../../../Assets/backicon.svg";

const CreateSavestIndex = ({ menu, setMenu }) => {
  let currentModal;
  switch (menu) {
    case 0:
      currentModal = <SelectSavestPlan setMenu={setMenu} />;
      break;

    case 1:
      currentModal = (
        <>
          <button
            className="backicon"
            onClick={() => {
              setMenu(0);
            }}
          >
            <img src={backicon} alt="back icon" />
          </button>
          <CreateFlexible setMenu={setMenu} />
        </>
      );
      break;
  }

  return <div className="current-stage">{currentModal}</div>;
};

export default CreateSavestIndex;
