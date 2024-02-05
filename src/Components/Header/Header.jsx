/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import phoneicon from "../../Assets/phoneicon.svg";
import mailicon from "../../Assets/mailicon.svg";
import insta from "../../Assets/Insta.svg";
import facebook from "../../Assets/Facebook.svg";
import twitter from "../../Assets/Twiter.svg";
import pintrest from "../../Assets/Pintrest.svg";
import Logo from "../../Assets/logo-powerful-logo-for-newborn/logo-powerful-logo-for-newborn/Cherished Beginnings - final 1.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="headercontainer overflow-x-hidden" id="">
        <motion.header
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* <!-- nav 1 --> */}
          <nav className="navone d-flex justify-content-between align-content-center">
            <div className="navleft d-flex gap-4">
              <a
                className="phone d-flex align-content-center gap-2 text-decoration-none text-black"
                href="tel:+01569896654"
              >
                <img className="phoneicon" src={phoneicon} alt="" />
                <div className="phoneno">+01 569 896 654</div>
              </a>
              <a
                className="email d-flex align-content-center gap-2 text-decoration-none text-black"
                href="mailto:info@doula.com"
              >
                <img className="mailicon" src={mailicon} alt="" />
                <div className="emailid">info@doula.com</div>
              </a>
            </div>
            <div className="navright d-flex justify-content-center align-content-center gap-3">
              <a className="d-flex" href="/">
                <img src={insta} alt="" />
              </a>
              <a className="d-flex" href="/">
                <img src={facebook} alt="" />
              </a>
              <a className="d-flex" href="/">
                <img src={twitter} alt="" />
              </a>
              <a className="d-flex" href="/">
                <img src={pintrest} alt="" />
              </a>
            </div>
          </nav>
          {/* <!-- End of nav 1 -->
        <!-- nav 2 --> */}
          <nav className="navtwo" data-scroll>
            <nav className="navbar navbar-expand-lg navpad">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <img className="logo" src={Logo} alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-3">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#setlocation">
                        Set Location
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#service">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#findcare">
                        Find Care
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex gap-2 buttoncentermobile">
                    <button
                      className="btn btn-outline-warning text-uppercase px-4 py-3 rounded-5 text-black fw-bold"
                      type="submit"
                    >
                      Sign up
                    </button>
                    <button
                      className="btn btn-outline-warning text-uppercase px-4 py-3 rounded-5 text-black fw-bold"
                      type="submit"
                    >
                      sign in
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </nav>
          {/* <!-- nav 2 end -->
        <!-- Hero Page --> */}
        </motion.header>
      </div>
    </>
  );
};

export default Header;
