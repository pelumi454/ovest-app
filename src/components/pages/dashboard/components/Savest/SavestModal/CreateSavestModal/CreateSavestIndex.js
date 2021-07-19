import React from "react";
import SelectSavestPlan from "../CreateSavestModal/SelectSavestPlan";

const CreateSavestIndex = ({ menu, setMenu }) => {
  let currentPage;
  switch (menu) {
    case 0:
      currentPage = <SelectSavestPlan setMenu={setMenu} />;
      break;

    // case 1:
    //   currentStage = (
    //     <>
    //       <button
    //         className="backicon"
    //         onClick={() => {
    //           setMenu(0);
    //         }}
    //       >
    //         <img src={backicon} alt="back icon" />
    //       </button>
    //       {/* <BankTransfer setStage={setMenu} /> */}
    //     </>
    //   );
    //   break;
  }

  return <div className="current-stage">{currentPage}</div>;
};

export default CreateSavestIndex;
