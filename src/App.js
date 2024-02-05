import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Service from "./Components/Service Section/Service";
import Hit from "./Components/How It Work/Hit";
import Testimonial from "./Components/Testimonial/Testimonial";
import Find from "./Components/Find/Find";
import Near from "./Components/Near center/Near";
import Touch from "./Components/Touch/Touch";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form1 from "./Components/Form1/Form1";
import Form2 from "./Components/Form2/Form2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Service />
              <Hit />
              <Testimonial />
              <Find />
              <Near />
              <Touch />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
