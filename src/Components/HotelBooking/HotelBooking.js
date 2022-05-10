import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import BookingForm from './BookingForm'

const HotelBooking = () => {
    return (
        <>
            <NavBar />
            <BookingForm />
            <Footer/>
        </>
    )
}

export default HotelBooking