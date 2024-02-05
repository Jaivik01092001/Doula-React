import React from "react";
import "./Touch.css";
import arrow from "../../Assets/arrow/Outlined/32/ArrowRight.svg";
import touch1 from "../../Assets/touch1.svg";
import touch2 from "../../Assets/touch2.svg";
import touch3 from "../../Assets/touch3.svg";
import touch4 from "../../Assets/touch4.svg";
import touch5 from "../../Assets/touch5.svg";
import { motion } from "framer-motion";

const Touch = () => {
  return (
    <>
      <div className="touchcontainer overflow-hidden " id="contact">
        <div data-scroll className="touchcontainer">
          <div className="toptouch">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="toplefttouch"
            >
              <div className="touchtitle">Get In Touch With Us</div>
              <div className="touchdesc">
                Lorem Ipsum is simply dummy text of the printin typesetting
                dummy text ever when an unknown printer took a galley of type
                and scrambled a type specimen book.
              </div>
              <div className="touchbutton d-flex align-items-center">
                <div className="touchbutontext">More Cares</div>
                <img src={arrow} alt="" />
              </div>
            </motion.div>
            <div className="torighttouch">
              <div className="d-flex overflow-hidden">
                <motion.img
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  className="w-50 touch1"
                  src={touch1}
                  alt=""
                />
                <motion.img
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="w-50 touch2"
                  src={touch2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bottomtouch">
            <div className="d-flex w-50 btimageset overflow-hidden">
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="w-50 touch3"
                src={touch3}
                alt=""
              />
              <motion.img
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-50 touch4"
                src={touch4}
                alt=""
              />
            </div>
            {/* <!-- <img className="w-25" src="Assets/touch2.svg" alt="" /> --> */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="d-flex w-50 btimageset"
            >
              <div className="w-50 p-4 ehseting">
                <div className="btop d-flex gap-2">
                  <span className="edu">Education</span>
                  <span className="health">Health</span>
                </div>
                <div className="bbottom">
                  More than One Life <br />
                  Changed
                </div>
              </div>
              <img className="w-50 touch5" src={touch5} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Touch;
