
import React from "react";
import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles"
import theme from "./Theme/theme";
import Home from "./Components/Home/Home";
import TourPackage from "./Components/TourPackages/TourPackage";
import SinglePackage from "./Components/SinglePackage/SinglePackage";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transport from "./Components/Transport/Transport";
import VehicleDetails from "./Components/Transport/VehicleDetails/VehicleDetails";
import Booking from "./Components/Booking/Booking";
import HotelBooking from "./Components/HotelBooking/HotelBooking";
import Visa from "./Components/Visa/Visa";

import Fab from '@mui/material/Fab';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function App() {
  let mytheme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={mytheme}>

      {/* <Home /> */}
      {/* <TourPackage /> */}
      {/* <SinglePackage/> */}
      {/* <About /> */}
      {/* <ContactUs/> */}

      <Router basename="/">
      {/* <Router> */}
        <Routes>
       
     
          <Route exact path="/" element={<Home />} />
          <Route path="/tour" element={<TourPackage />} />
          <Route path="/tour-details" element={<SinglePackage />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/vehicle-details" element={<VehicleDetails />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/visa" element={<Visa/>}/>
       
        </Routes>
      </Router>

      {/* https://wa.me/971502736276?text=Hi, Can you provide me details? */}

      <Fab color="primary" aria-label="whatsapp" 
      href="https://wa.me/971502736276?text=Hi, Can you provide me details?"
      sx={{
        position:'fixed',
        right:0,
        bottom:0,
        margin:'10px'
      }}>
        <WhatsAppIcon />
      </Fab>
    </ThemeProvider>
  );
}

export default App;
