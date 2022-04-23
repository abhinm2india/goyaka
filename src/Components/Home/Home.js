import { Box, Modal, Typography, Button } from '@mui/material'
import React, { useEffect } from 'react'
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
    border: '0px solid',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
    height: '400px',
    backgroundImage: 'url(./images/goyakaad.jpeg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '@media screen and (max-width: 678px)': {
        width:'70vw',
        height:'50vh',
        objcetFit:'cover',
    },
};


function Home() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {

        setTimeout(() => {
            setOpen(true);
        }, 3000)

    }, [])


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
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
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