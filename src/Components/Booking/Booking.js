import React from 'react'
import { Box, Container, Grid, Stack } from '@mui/material'
import NavBar from '../NavBar/NavBar'
import CustomMap from './CustomMap'
import BookingForm from './BookingForm'
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Subscribe from '../Subscribe/Subscribe'

const Booking = () => {

    console.log('from booking')
    const location = useLocation();
    console.log(location.state)

    return (
        <>
            <NavBar />
            <Container>
                <Stack spacing={2} mt={3} mb={10}>
                    <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4}>
                            <BookingForm origin={location.state.pickName} destination={location.state.dropName}
                            bookingData={location.state}
                            />

                        </Grid>
                        <Grid item xs={8}>

                            <CustomMap origin={location.state.pickName} destination={location.state.dropName}>

                            </CustomMap>

                        </Grid>
                    </Grid>
                </Stack>
            </Container>
            <Subscribe />
            <Footer />

            {/* <Container> */}

            {/* <Box container sx={{
                width: '100vw',
                height: '100vh',
                overflow: 'hidden'
            }}>

                <Stack sx={{
                    zIndex: 1001,
                    width: '100vw',
                    height: '100vh',
                }}>

                </Stack>
                <Stack padding={7} sx={{
                    zIndex: 1000,
                    position: 'absolute',
                    top: 50,
                    width: 300,
                    backgroundColor: '#fff',
                }}>

                </Stack>

            </Box> */}


            {/* <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4}><BookingForm /></Grid>
                    <Grid item xs={8}><CustomMap /></Grid>
                </Grid> */}
            {/* </Container> */}


        </>
    )
}

export default Booking