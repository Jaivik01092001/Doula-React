import React, { useState } from "react";
import "./Testimonial.css"; // Assuming you have your CSS file
import user1 from "../../Assets/test1.svg";
import user2 from "../../Assets/test2.svg";

import previous from "../../Assets/previous.png";
import next from "../../Assets/next.png";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      avtar: user1,
      name: "Belli Smith",
      text: "Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted by the readable content.",
    },
    {
      id: 2,
      avtar: user2,

      name: " Smith",
      text: "Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted by the readable content.",
    },
    {
      id: 3,
      avtar: user1,

      name: "Belli ",
      text: "Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted by the readable content.",
    },
    {
      id: 4,
      avtar: user2,
      name: "asd ",
      text: "Centuries but also the leap into electronic typesetting, established fact that a reader will be distracted by the readable content.",
    },
    // Add more testimonials as needed
  ]);

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="testimonial-container">
      <div className="testtitle">What people say about us</div>

      <div className="testimonial">
        <div className="testimonial-navigation">
          <div className="arrow" onClick={handlePrevTestimonial}>
            <img src={previous} alt="" />
          </div>
        </div>

        <div className="testimonial-body">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              className="testleft"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={currentTestimonial.avtar} alt="" />
            </motion.div>
            <motion.div
              key={currentTestimonial.id}
              className="testright"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testname">{currentTestimonial.name}</div>
              <div className="testtext">{currentTestimonial.text}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="testimonial-navigation">
          <div className="arrow" onClick={handleNextTestimonial}>
            <img src={next} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
