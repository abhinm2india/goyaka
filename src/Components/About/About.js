
import React from 'react'
import Footer from '../Footer/Footer'
import Choices from '../Home/Choices/Choices'
import GetInTouch from '../Home/Contact/GetInTouch'
import Resort from '../Home/Resort/Resort'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import { AboutHero } from './Banner/AboutHero'
import Chauffeur from './Chauffeur/Chauffeur'
import Description from './Description/Description'
import Services from './Services/Services'


const About = () => {
    return (
        <>
            <NavBar />
            <AboutHero />
            <Description />
            {/* <Choices /> */}
            <Services/>
            {/* <Resort /> */}
           <Chauffeur/>
            <GetInTouch />
            <Subscribe />

            <Footer />
        </>
    )
}

export default About