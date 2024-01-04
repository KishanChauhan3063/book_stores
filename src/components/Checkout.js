import React from "react";
import visaIcon from "../img/visa.svg";
import mastercardIcon from "../img/mastercard.svg";
import creditcardIcon from "../img/atm-card.png";
import simCardChipDesign from "../img/sim-card-chip.svg";
import cardBackgroundImage from "../img/card_bg.svg";
//import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-scree">
      <div
        className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl py-2 px-8 rounded-custom shadow-md relative border-solid border-2 border-black rounded-lg"
        style={{
          backgroundImage: `url(${cardBackgroundImage})`,
          backgroundSize: "cover", // Adjust the background size as needed
          backgroundPosition: "center", // Adjust the background position as needed
        }}
      >
        {/* Card Logo */}
        <div className="mb-4 flex justify-center">
          {/* Use your actual card logo URL here */}
          <img src={creditcardIcon} alt="Card Logo" className="w-16 h-16" />
        </div>

        {/* Card Number */}
        <div className="mb-4 text-2xl font-semibold text-white">
          **** **** **** 1234
        </div>

        {/* Card Holder Name */}
        <div className="mb-5 w-96 text-lg text-white">
          Card Holder
          <img
            src={simCardChipDesign}
            alt="SIM Card Chip Logo"
            className="w-20 h-20 absolute top-32 right-9"
          />
          <div className="font-semibold">Kishan Chauhan</div>
        </div>
        {/* Card Icons (VISA and MASTERCARD) */}
        <div className="mb-4 flex justify-between">
          <img src={visaIcon} alt="VISA" className="w-9 h-8" />
          <img src={mastercardIcon} alt="MASTERCARD" className="w-10 h-8" />
        </div>

        {/* Expiry Date and CVV */}
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="mb-2 sm:mb-0 text-sm text-white">
            Expires
            <div className="font-semibold">12/24</div>
          </div>
          <div className="text-sm text-white">
            CVV
            <div className="font-semibold text-white">123</div>
          </div>
        </div>
      </div>

      {/* <Link to="./Slider"> */}
        <div className="mt-4">
          <button className="bg-black text-white py-2 px-4 rounded-md">
            Go
          </button>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Checkout;
