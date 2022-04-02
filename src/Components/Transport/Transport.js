import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import TourBanner from './Banner/TransportBanner'
import Packages from './Packages/Packages'
import axios from 'axios'






// useEffect(async () => {
//     const API_URL = "https://chauffeur.lagoontechcloud.com:4200/api/booking/rideTypeforSite";
//     let response = await fetch(API_URL);
//     let data = await response.json();
//     console.log(data);
// }, []);



const Transport = () => {



    return (
        <>
            <NavBar />
            <TourBanner />
            <Packages />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Transport