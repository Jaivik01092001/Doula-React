import React from "react";
import "./Footer.css";
import footerlogo from "../../Assets/logo-powerful-logo-for-newborn/logo-powerful-logo-for-newborn/Cherished Beginnings - final 1.png";
import footerinsta from "../../Assets/footerinsta.svg";
import footerfacebook from "../../Assets/footerfacebook.svg";
import Footertwittter from "../../Assets/Footertwittter.svg";
import Footerpintrest from "../../Assets/Footerpintrest.svg";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <div className="footercontainer">
        <footer data-scroll className="footercontainer">
          <div className="d-flex fotterupper">
            <div className="footerleft">
              <img src={footerlogo} alt="" />
              <div className="footerdesc">
                Care about people to transforming their lives and exudes a
                positives Impressiono believe. fundraising NGO organizations.
              </div>
              <div className="socialicons d-flex">
                <img src={footerinsta} alt="" />
                <img src={footerfacebook} alt="" />
                <img src={Footertwittter} alt="" />
                <img src={Footerpintrest} alt="" />
              </div>
            </div>
            <div className="footerright d-flex">
              <ul>
                <h4 className="mb-4">Get Involved</h4>
                <li>About Us</li>
                <li>Volunteer</li>
                <li>Causes</li>
                <li>Projects</li>
                <li>Team</li>
              </ul>
              <ul>
                <h4 className="mb-4">Utility</h4>

                <li>Style Guide</li>
                <li>Licences</li>
                <li>Password</li>
                <li>404 Page</li>
                <li>Changelog</li>
              </ul>
              <ul>
                <h4 className="mb-4">Contact</h4>

                <li>
                  660 Broklyn Street, <br />
                  88 New York
                </li>
                <a href="mailto:Need@walfare.com">
                  <li>help Need@walfare.com</li>
                </a>
                <a href="tel:222 888 0000">
                  <li>222 888 0000</li>
                </a>
              </ul>
            </div>
          </div>
          <hr />
          <div className="footerlower">
            <div className="copyright text-center" id="currentYear">
              &copy; <strong>{year}</strong> All rights reserved
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
