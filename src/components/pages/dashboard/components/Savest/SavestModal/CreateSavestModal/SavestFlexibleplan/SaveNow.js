import React, { useState } from "react";
import "./SavestFlexible.css";
import backtick from "../../../../../assets/backtick.svg";
import CardAmountInput from "../../../../fundwallet/card/CardAmountInput";
import successicon from "../../../../../assets/success-icon.svg";
import { Formik, Form } from "formik";
// import { CardFundingTextInput } from "../../../../Formik/FormLib";
import * as Yup from "yup";
import flutter from "../../../../../../../Assets/flutter.svg";
import {
  // StyledContainer,
  // StyledFormArea,
  // StyledLabel,
  // StyledTextInput,
  // StyledFormButton,
  // StyledTitle,
  ButtonGroup,
  StyledTextInputBankTransfer,
  StyledBankTransferFormButton,
  // SubTitle,
  // ExtraText,
  // TextLink,
  // colors,
  // StyledTextInputCardFunding,
} from "../../../../../../../Syles/styles.js";
import cardlogo from "../../../../../../../Assets/cardlogo.svg";
import cardcloseicon from "../../../../../../../Assets/cardcloseicon.svg";
// import "./card.css";

const InvestNow = ({ setStage, setMenu }) => {
  const [showRoiInfo, setShowRoiInfo] = useState(false);

  return (
    <div className="startinvestment-body">
      <div className="startinvestment-main">
        <div className="confirminvestment-main">
          <h5 className="create-flexible-h5"> Save Now</h5>
          <p className="create-flexible-p">Choose Payment Method</p>
        </div>
        <div className="silverplan">
          <p className="fundwith-header">Fund With</p>
          <hr className="hr" />
          <div className="silverplan-flex">
            <div className="ovest-wallet">
              <p className="ovestwallet-main">Ovest Wallet</p>
              <div className="savest-balance">
                {/* <p className="save-now-balance mt-3">Balance: N0</p> */}
                <p className="save-now-with-balance mt-3">
                  Balance: N20,000,000
                </p>
                <p
                  onClick={() => setMenu(5)}
                  className="save-now-change-payment"
                >
                  Change this{" "}
                  <span>
                    <img
                      src={backtick}
                      alt=""
                      className="ml-2"
                      onClick={() => setMenu(4)}
                    />
                  </span>{" "}
                </p>
              </div>
              {/* <p className="funds-p mt-5">
                Insufficient funds. <span>Fund wallet</span>
              </p> */}
            </div>
          </div>
        </div>
        <div className="note-main p-4">
          <p className="funds-deduction">
            Funds will be deducted automatically from your available payment
            method(s) on OVest.
          </p>
        </div>
        <button onClick={() => setShowRoiInfo(true)} className="savest-button">
          Save now
        </button>
        {/* <button className="claim-property">Save N500</button> */}
        <div
          className={`silverinvestment__roi-info-bg ${
            showRoiInfo ? "show-roi-info" : ""
          }`}
        >
          <div className="silverinvestment__roi-info-content">
            <div className="profit-roi-modal">
              <div className="success-img-icon">
                {/* <CardAmountInput onClick={() => setShowRoiInfo(false)} /> */}

                <div className="cardpaymentwrapper">
                  <div className="cardpaymentinput-nav">
                    <img src={cardlogo} alt="card logo" />
                    <button
                      className="closemodalicon-btn"
                      onClick={() => {
                        setStage(0);
                      }}
                    >
                      <img
                        className="cardcloseicon"
                        src={cardcloseicon}
                        alt="card close icon"
                      />
                    </button>
                  </div>
                  <div className="cardpaymentinput-header">
                    <h5>N500,000.00</h5>
                    <small>David@xyz.com</small>
                  </div>
                  <Formik
                    initialValues={{
                      cardNumber: "",
                    }}
                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                      console.log(values);
                      // loginUser(values, history, setFieldError, setSubmitting);
                    }}
                    validationSchema={Yup.object({
                      // phone: Yup.string()
                      //   .matches(phoneRegExp, "Phone number is not valid")
                      //   .required("Phone Number is Required"),
                      cardNumber: Yup.string().required(
                        "Card Number deposited Field is Required"
                      ),
                    })}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <StyledTextInputBankTransfer
                          name="cardNumber"
                          type="number"
                          placeholder="Card Number"
                        />

                        <StyledTextInputBankTransfer
                          style={{
                            marginTop: "0",
                            width: "162px",
                            // height: "48px",
                            display: "inline",
                            marginLeft: "15px",
                          }}
                          name="date"
                          type="date"
                          placeholder="MY/YY"
                        />
                        <StyledTextInputBankTransfer
                          style={{
                            marginTop: "0",
                            width: "162px",
                            // height: "48px",
                            marginLeft: "52px",
                            display: "inline",
                          }}
                          name="CVV"
                          type="number"
                          placeholder="CVV"
                        />
                        <ButtonGroup>
                          {!isSubmitting && (
                            <StyledBankTransferFormButton
                              type="submit"
                              onClick={() => {
                                setStage(8);
                              }}
                              style={{ marginTop: "-20px" }}
                            >
                              Pay NGN500,000.00
                            </StyledBankTransferFormButton>
                          )}
                        </ButtonGroup>
                      </Form>
                    )}
                  </Formik>
                  <div className="flutter-wrapper">
                    <div className="fluter-btn">
                      <img src={flutter} alt="flutter" />
                      secured by Flutterwave
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestNow;
