import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import TourBanner from './Banner/TransportBanner'
import Packages from './Packages/Packages'
import axios from 'axios'
import { useLocation } from 'react-router-dom'




// useEffect(async () => {
//     const API_URL = "https://chauffeur.lagoontechcloud.com:4200/api/booking/rideTypeforSite";
//     let response = await fetch(API_URL);
//     let data = await response.json();
//     console.log(data);
// }, []);



const Transport = (props) => {

    const location = useLocation();

    return (
        <>
            <NavBar />
            <TourBanner />
            <Packages data={location.state}/>
            <Subscribe />
            <Footer />
        </>
    )
}

export default Transport