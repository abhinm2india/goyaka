import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import TourBanner from './Banner/TourBanner'
import Packages from './Packages/Packages'


const TourPackage = (props) => {

   

    return (
        <>
            <NavBar />
            <TourBanner />
            <Packages/>
            <Subscribe />
            <Footer />
        </>
    )
}

export default TourPackage