import React from "react";
import "./Form2.css";
import form2logo from "../../Assets/logo-powerful-logo-for-newborn/logo-powerful-logo-for-newborn/Cherished Beginnings - final 1.png";
import arrow from "../../Assets/arrow/Outlined/32/ArrowRight.svg";

const Form2 = () => {
  return (
    <div>
      <div className="form2header">
        <img src={form2logo} alt="" />
      </div>
      <div className="form2main">
        <div class="form1title">Personal information</div>
        <div class="formcontainer1">
          <div class="d-flex gap-3">
            <input class="f2zip" type="text" placeholder="Enter first name" />
            <input class="f2zip" type="text" placeholder="Enter last name" />
          </div>
          <div class="d-flex gap-3">
            <input
              class="f2zip"
              type="text"
              placeholder="Partner/Spouse first name"
            />
            <input
              class="f2zip"
              type="text"
              placeholder="Partner/Spouse last name"
            />
          </div>
          <input class="f1zip" type="text" placeholder="Enter e-mail" />
          <input class="f1zip" type="text" placeholder="Enter phone no" />
          <input class="f1zip" type="text" placeholder="Address" />
          <div class="vacation">What vacations are required?</div>
          <div class="form-check radioset pl">
            <div class="form-check px-5 py-3 rounded1">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div class="form-check px-5 py-3 rounded1">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                No{" "}
              </label>
            </div>
          </div>
          <div class="vacation">Do you have parking?</div>
          <div class="form-check radioset pl">
            <div class="form-check px-5 py-3 rounded1">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div class="form-check px-5 py-3 rounded1">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {" "}
                No{" "}
              </label>
            </div>
          </div>
        </div>

        <button class="nextbutton d-flex justify-content-center align-items-center gap-2">
          <div>Finish</div>
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Form2;
