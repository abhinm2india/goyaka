
import React from "react";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import theme from "./Theme/theme";
import Home from "./Components/Home/Home";
import TourPackage from "./Components/TourPackages/TourPackage";
import SinglePackage from "./Components/SinglePackage/SinglePackage";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  let mytheme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={mytheme}>

      {/* <Home /> */}
      {/* <TourPackage /> */}
      {/* <SinglePackage/> */}
      {/* <About /> */}
      {/* <ContactUs/> */}

      <Router basename="/goyaka">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tour" element={<TourPackage />} />
          <Route path="/tour-details" element={<SinglePackage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;
