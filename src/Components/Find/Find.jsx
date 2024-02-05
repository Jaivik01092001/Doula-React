import React from "react";
import "./Find.css";
import arrow from "../../Assets/arrow/Outlined/32/ArrowRight.svg";
import sectional from "../../Assets/sectionalimage/UI Block/Photo.svg";
import { motion } from "framer-motion";
const Find = () => {
  return (
    <>
      <div className="findcontainer overflow-hidden ">
        <div
          className="findpage position-relative d-flex align-items-center"
          id="page3"
        >
          <div className="findleft d-flex align-items-start flex-column gap-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="findlefttitle"
            >
              Easily find a caregiver you can trust
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="finddesc"
            >
              Numerous studies have documented the benefits of having a doula
              present during labor. A recent Cochrane Review, Continuous Support
              for Women During Childbirth, showed a very high number of positive
              birth outcomes when a doula was present.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
              viewport={{ once: true }}
              className="browserimage d-flex justify-content-center align-items-center gap-2"
            >
              <div className="bs">Browse Service</div>
              <img
                className="object-fit-contain arrowimage"
                src={arrow}
                alt=""
              />
            </motion.div>
          </div>
          <motion.img
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="findimage"
            src={sectional}
            alt=""
          />
        </div>
        ;
      </div>
    </>
  );
};

export default Find;
