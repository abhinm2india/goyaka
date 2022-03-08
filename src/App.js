
import React from "react";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import theme from "./Theme/theme";
import Home from "./Components/Home/Home";
import TourPackage from "./Components/TourPackages/TourPackage";
import SinglePackage from "./Components/SinglePackage/SinglePackage";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  let mytheme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={mytheme}>

      {/* <Home /> */}
      {/* <TourPackage /> */}
      {/* <SinglePackage/> */}
      {/* <About /> */}
      {/* <ContactUs/> */}

      <Router>
        <Routes>
          <Route exact path="/goyaka" exact element={<Home />} />
          <Route path="/goyaka/tour" exact element={<TourPackage />} />
          <Route path="/goyaka/tour-details" exact element={<SinglePackage />} />
          <Route path="/goyaka/about-us" exact element={<About />} />
          <Route path="/goyaka/contact-us" exact element={<ContactUs />} />
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;
