/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Hero.css";
import poverty from "../../Assets/below poverty.svg";
import calander from "../../Assets/calandericon.svg";
import uparrow from "../../Assets/up-arrow.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.1, staggerChildren: 0.04 } },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const text = "Connecting families with quality, local caregivers";
  return (
    <>
      <div className="herocontainer">
        <div className="hero">
          <motion.div
            className="herotext"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>
          <img src={poverty} className="poverty" alt="" />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="formcontainer"
            id="findcare"
          >
            <div className="formtitle text-center">Find Care</div>
            <div className="d-flex flex-column gap-3 mt-2">
              <div className="servicerow">
                What service are you interested in
              </div>
              <div className="radioservice d-flex">
                <div className="form-check px-5 py-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Daytime Services
                  </label>
                </div>
                <div className="form-check px-5 py-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Overnight Care
                  </label>
                </div>
                <div className="form-check px-5 py-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    24 Hour Care
                  </label>
                </div>
                <div className="form-check px-5 py-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault4"
                  >
                    Lactation Support
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-end justify-content-between flex-wrap">
              <div className="boardingnear d-flex flex-column gap-3 mt-3">
                <label className="servicerow" htmlFor="boardingnear">
                  Boarding near
                </label>
                <input
                  type="text"
                  name="boardingnear"
                  id=""
                  placeholder="Zip Code or address"
                  className="px-4 py-3 forminoutset"
                />
              </div>
              <div className="boardingnear d-flex flex-column gap-3 mt-3">
                <label className="servicerow" htmlFor="boardingnear">
                  For these days
                </label>
                <div className="d-flex">
                  <input
                    type="date"
                    name="boardingnear"
                    id="boardingnearInput"
                    placeholder="Drop off"
                    className="px-4 py-3 forminoutset"
                  />
                  {/* <img
                    src={calander}
                    className="calandericon"
                    alt="calandericon"
                  /> */}
                </div>
              </div>
              <div className="boardingnear d-flex flex-column gap-3 mt-3">
                <input
                  type="text"
                  name="boardingnear"
                  id=""
                  placeholder="Pickup"
                  className="px-4 py-3 forminoutset"
                />
              </div>
            </div>
            <div className="d-flex flex-column gap-3 mt-3">
              <div className="servicerow">Expected due date of birthday</div>
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
                <div className="d-flex datepickerwidth">
                  <input
                    type="date"
                    name="boardingnear"
                    id="boardingnearInput"
                    placeholder="Date picker"
                    className="px-4 py-3 forminoutset"
                  />
                  {/* <img
                    src="Assets/calandericon.svg"
                    className="calandericon"
                    alt=""
                  /> */}
                </div>

                <Link to="/form1" className="text-decoration-none">
                  <button className="findbutton d-flex justify-content-center align-items-center gap-2">
                    <div className="find text-capitalize">find</div>
                    <img src="Assets/arrow/Outlined/32/ArrowRight.svg" alt="" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <a href="#">
          <img className="uparrow" src={uparrow} alt="" />
        </a>
      </div>
    </>
  );
};

export default Hero;
