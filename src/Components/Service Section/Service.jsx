import React from "react";
import "./Service.css";
import icon1 from "../../Assets/icon1/Duotone/Package.svg";
import icon2 from "../../Assets/icon2/Duotone/Info.svg";
import icon3 from "../../Assets/icon3/Duotone/Stack.svg";
import icon4 from "../../Assets/icon4.svg";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <>
      <div className="servicecontainer overflow-hidden">
        <div className="servicecontainer" id="page2" data-scroll>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="wedoittitle"
            id="service"
          >
            We do it for People in Need
          </motion.div>
          <div className="servicecardcontainer d-flex justify-content-center align-content-center gap-3 flex-wrap">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="abovecards d-flex justify-content-center align-content-center gap-3"
            >
              <div className="servicecard">
                <div className="iconbg">
                  <img src={icon1} alt="" />
                </div>
                <div className="servicecardtitle">Daytime Services</div>
                <div className="servicecarddesc">
                  Our daytime newborn care specialists focus on creating a
                  nurturing environment for your baby. They assist with feeding,
                  establish sleep routines, provide developmental stimulation,
                  and offer expert guidance on infant care. The goal is to
                  ensure your newborn's well-being and help parents navigate the
                  early stages with confidence. If you have specific preferences
                  or concerns, our specialists tailor their support to meet your
                  family's unique needs.
                </div>
              </div>
              <div className="servicecard">
                <div className="iconbg">
                  <img src={icon2} alt="" />
                </div>
                <div className="servicecardtitle">Overnight Care</div>
                <div className="servicecarddesc">
                  Overnight care with our newborn care specialists and
                  postpartum doulas is a comprehensive service designed to
                  support you during the crucial nighttime hours. Our
                  specialists handle night feedings, diaper changes, and employ
                  soothing techniques to ensure your baby sleeps soundly.
                  Postpartum doulas focus on your well-being, offering emotional
                  support, guidance on breastfeeding or bottle-feeding, and
                  assistance with any postpartum recovery concerns. This
                  collaborative approach aims to create a nurturing environment,
                  allowing you to rest and recover while fostering a healthy
                  routine for both you and your baby.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="belowcards d-flex justify-content-center align-content-center gap-3"
            >
              <div className="servicecard">
                <div className="iconbg">
                  <img src={icon3} alt="" />
                </div>
                <div className="servicecardtitle">24 Hour Care</div>
                <div className="servicecarddesc">
                  With 24-hour newborn care, our specialists provide
                  around-the-clock support for both you and your baby. This
                  comprehensive service includes assistance with feeding, diaper
                  changes, sleep routines, and developmental activities. Our
                  specialists adapt to your family's unique needs, offering
                  guidance on newborn care and addressing any concerns you may
                  have. This continuous care aims to provide you with peace of
                  mind, ensuring that your baby receives expert attention and
                  support at any hour, fostering a positive and secure
                  environment for their growth and well-being.
                </div>
              </div>
              <div className="servicecard">
                <div className="iconbg">
                  <img src={icon4} alt="" />
                </div>
                <div className="servicecardtitle">Loctation Support</div>
                <div className="servicecarddesc">
                  Loctation support from a lactation educator or International
                  Board-Certified Lactation Consultant (IBCLC) involves expert
                  guidance to help mothers navigate breastfeeding successfully.
                  A lactation educator offers education on breastfeeding
                  techniques, proper latch, and addressing common challenges. An
                  IBCLC, with advanced certification, provides more in-depth
                  support, assessing and managing complex breastfeeding issues,
                  offering personalized care plans, and ensuring optimal
                  breastfeeding outcomes. Both professionals strive to empower
                  and assist mothers in their breastfeeding journey, promoting a
                  positive and healthy breastfeeding experience for both mom and
                  baby
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
