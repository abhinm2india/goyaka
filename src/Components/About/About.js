import { Container } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import Choices from '../Home/Choices/Choices'
import GetInTouch from '../Home/Contact/GetInTouch'
import Resort from '../Home/Resort/Resort'
import Testimonial from '../Home/Testimonial/Testimonial'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import { AboutHero } from './Banner/AboutHero'
import Description from './Description/Description'


const About = () => {
    return (
        <>
            <NavBar />
            <AboutHero />
            <Description />
            <Choices />
            <Resort />
            <Testimonial />
            <GetInTouch />
            <Subscribe />

            <Footer />
        </>
    )
}

export default About