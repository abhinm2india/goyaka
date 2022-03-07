import { Box } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import About from './About/About'
import Hero from './Banner/Hero'
import Choices from './Choices/Choices'
import GetInTouch from './Contact/GetInTouch'
import Destination from './Destinations/Destination'
import Car from './LuxuryCar/Car'
import Resort from './Resort/Resort'
import Search from './Search/Search'
import Testimonial from './Testimonial/Testimonial'

function Home() {
    return (
        <>

            <NavBar />
            <Hero />
            <Box container sx={{
                marginTop: '-60px',
            }}>
                <Search />
            </Box>

            <Choices />
            <About />
            <Destination />
            <Resort />
            <Car />
            <Testimonial />
            <GetInTouch />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Home