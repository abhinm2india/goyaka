import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import SingleTour from './TourDetails/SingleTour'

const SinglePackage = () => {
    return (
        <Container>
            <NavBar />
            <SingleTour />
            <Subscribe />
            <Footer />
        </Container>
    )
}

export default SinglePackage