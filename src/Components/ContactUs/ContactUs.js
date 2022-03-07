import React from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Subscribe from '../Subscribe/Subscribe'
import ContactHero from './ContactBanner/ContactHero'
import ContactForm from './ContactForm/ContactForm'

const ContactUs = () => {
    return (
        <>
            <NavBar />
            <ContactHero />
            <ContactForm/>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default ContactUs