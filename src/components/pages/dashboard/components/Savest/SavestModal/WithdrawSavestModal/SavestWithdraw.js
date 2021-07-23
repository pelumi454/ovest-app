import React from 'react'
import "./WithdrawSavest.css"

const SavestWithdraw = ({setMenu}) => {
    return (
       <div className="create-flexible-plan">
      <div className="create-flexible-plan-main">
        <div className="create-flexible-header">
          <h5 className="create-flexible-h5">Savest Withdraw</h5>
          <p className="create-flexible-p">
         Save strictly for your goals and earn 10% interest rate every 30 days
          </p>
        </div>
        <div className="savest-amount-tosave">
          <p className="savest-amount-p">How much would you like to withdraw? </p>
          <input type="text" className="savest-flexible-input" />
          <p className="small-p">Your OVest wallet will be credited automatically</p>
        </div>
       
       
        <button onClick={() => setMenu(1)} className="savest-button">
         Proceed
        </button>
      </div>
    </div>
    )
}

export default SavestWithdraw
