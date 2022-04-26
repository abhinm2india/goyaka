import { Container } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import SingleTour from './TourDetails/SingleTour'
import { useLocation } from 'react-router-dom'

const SinglePackage = () => {

    const location = useLocation();
console.log(location.state.dataId)
    return (
        <Container>
            <NavBar />
            <SingleTour dataId={location.state.dataId}/>
            <Subscribe />
            <Footer />
        </Container>
    )
}

export default SinglePackage