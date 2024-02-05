import React from "react";
import "./Form1.css";
import form1logo from "../../Assets/logo-powerful-logo-for-newborn/logo-powerful-logo-for-newborn/Cherished Beginnings - final 1.png";
import daytime from "../../Assets/form2/daytime 1.svg";
import nighttime from "../../Assets/form2/night-mode 1.svg";
import fullhour from "../../Assets/form2/24-hours 1.svg";
import group from "../../Assets/form2/Group 39213.svg";
import calandericon from "../../Assets/calandericon.svg";
import singleton from "../../Assets/form2/singleton.svg";
import twins from "../../Assets/form2/twins.svg";
import triplet from "../../Assets/form2/triplets.svg";
import arrow from "../../Assets/arrow/Outlined/32/ArrowRight.svg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Form1 = ({ isVisible }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="form1header"
        >
          <img src={form1logo} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="form1main"
        >
          <div class="form1title">Find a care near by you</div>
          <div class="formcontainer1">
            <input class="f1zip" type="text" placeholder="Enter ZIP Code" />
          </div>
          <div class="form1title">What kind of care do you need?</div>
          <div class="formcontainer1">
            <div class="servicesf2 d-flex flex-column gap-3">
              <div class="service1 d-flex align-items-center gap-2">
                <img src={daytime} alt="" />
                <div>Daytime Services</div>
              </div>
              <div class="service1 d-flex align-items-center gap-2">
                <img src={nighttime} alt="" />
                <div>Overnight Care</div>
              </div>
              <div class="service1 d-flex align-items-center gap-2">
                <img src={fullhour} alt="" />
                <div>24 Hour Care</div>
              </div>
              <div class="service1 d-flex align-items-center gap-2">
                <img src={group} alt="" />
                <div>Location Support</div>
              </div>
            </div>
            <div class="form1title text-center">Select care date</div>

            <div class="position-relative">
              <input
                type="date"
                name="boardingnear"
                id="boardingnearInput"
                placeholder="Select date to"
                class="px-4 py-3 forminoutset"
              />
              {/* <img src={calandericon} class="calandericon " alt="" /> */}
            </div>
            <div class="position-relative">
              <input
                type="date"
                name="boardingnear"
                id="boardingnearInput"
                placeholder="Select date from"
                class="px-4 py-3 forminoutset"
              />
              {/* <img src={calandericon} class="calandericon" alt="" /> */}
            </div>

            {/* <!-- <input class="f1zip" type="text" placeholder="Enter ZIP Code" /> --> */}
          </div>
          <div class="form1title">Enter child information</div>
          <div class="form1width d-flex flex-column gap-3">
            <div class="expect">Are you expecting</div>
            <div class="formcontainer1">
              <div class="optionmobile d-flex">
                <div class="child">
                  <img src={singleton} alt="" />
                  <div>Singleton</div>
                </div>
                <div class="child">
                  <img src={twins} alt="" />
                  <div>Twins</div>
                </div>
                <div class="child">
                  <img src={triplet} alt="" />
                  <div>Triplets</div>
                </div>
              </div>
            </div>
            <div class="position-relative">
              <input
                type="date"
                name="boardingnear"
                id="boardingnearInput"
                placeholder="Child's Date of birth?"
                class="px-4 py-3 forminoutset"
              />
              {/* <img src={calandericon} class="calandericon" alt="" /> */}
            </div>
            <a href="" class="addanother" alt="">
              + Add another child
            </a>
          </div>
          <Link
            to="/form2"
            class="nextbutton d-flex justify-content-center align-items-center gap-2 "
          >
            <div>Next</div>
            <img src={arrow} alt="" />
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Form1;
