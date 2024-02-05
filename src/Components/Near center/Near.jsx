import React from "react";
import "./Near.css";
import ann1 from "../../Assets/ann1.svg";
import ann2 from "../../Assets/ann2.svg";
import ann3 from "../../Assets/ann3.svg";
import ann4 from "../../Assets/ann4.svg";
import ann5 from "../../Assets/ann5.svg";
import ann6 from "../../Assets/ann6.svg";
import ann7 from "../../Assets/ann7.svg";

const Near = () => {
  return (
    <>
      <div className="nearcontainer" id="setlocation">
        <div data-scroll className="nearcentercontainer my-4">
          <div className="bgimagenear d-flex justify-content-center align-items-center flex-column gap-4">
            <div className="nearcentertitle">Find A Near You</div>
            <div className="nearrow2 d-flex gap-3">
              <input
                type="text "
                className="ziptext"
                placeholder="Enter Zip Code"
              />
              <button className="findbutton3">Find Your Centre</button>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 w-75">
              <div className="locations gap-2">
                <img src={ann1} className="announcement" alt="" />
                <div className="locationtext">Ahmedabad</div>
              </div>
              <div className="locations gap-2">
                <img src={ann2} className="announcement" alt="" />
                <div className="locationtext">England</div>
              </div>
              <div className="locations gap-2">
                <img src={ann3} className="announcement" alt="" />
                <div className="locationtext">Europe</div>
              </div>
              <div className="locations gap-2">
                <img src={ann4} className="announcement" alt="" />
                <div className="locationtext">Germany</div>
              </div>
              <div className="locations gap-2">
                <img src={ann5} className="announcement" alt="" />
                <div className="locationtext">South Africa</div>
              </div>
              <div className="locations gap-2">
                <img src={ann6} className="announcement" alt="" />
                <div className="locationtext">England</div>
              </div>
              <div className="locations gap-2">
                <img src={ann7} className="announcement" alt="" />
                <div className="locationtext">Europe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Near;
