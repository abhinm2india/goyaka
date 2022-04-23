import { Box, Modal, Typography, Button } from '@mui/material'
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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backgroundImage:'url(./images/goyakaad.jpeg)',
    
  };


function Home() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    return (
        <>

            <NavBar />
            <Hero />
            <Box container sx={{
                marginTop: '-120px',
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


            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                       
                    </Box>
                </Modal>
            </div>



        </>
    )
}

export default Home