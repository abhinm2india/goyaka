import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import BookingForm from './BookingForm'

const HotelBooking = () => {
    return (
        <>
            <NavBar />
            <BookingForm />
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default HotelBooking