import { Box, Container, TextField, Button, Typography } from '@mui/material'
import React from 'react'


const TourBanner = () => {
    return (
        <Container maxWidth='lg'>
            <Box
                Container
                sx={{
                    height: '50vh',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '25px',
                    // backgroundColor: '#000',
                    opacity: 1,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: 'url(./images/dubai/goyaka_dubai_tour_26.jpg)',
                    backgroundSize: 'cover',
                    justifyContent: 'center',
                    backgroundPosition: 'center',

                }}

            >
                <Box sx={{
                    // marginBottom: '30px',
                }}>
                    <Typography variant='h3' component='h3'
                        sx={{
                           
                            color: 'primary.white',
                            fontWeight: 'bold',
                            textShadow: '1px 3px #0000003d'
                        }}
                    >
                        Dubai Tourism Packages
                    </Typography>
                </Box>

                {/* <Box container sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'primary.white',
                    paddingX: '20px',
                    paddingY: '20px',
                    borderRadius: '10px',

                    boxShadow: '0px 12px 39px rgba(0, 0, 0, 0.25)',

                    '@media screen and (max-width: 678px)': {
                        flexDirection: 'column',
                        paddingY: '10px',
                    },
                }}>
                    <TextField variant='standard' label='Search Your Destination' defaultValue={'Dubai, Beaches...'} sx={{
                    }} InputProps={{
                        disableUnderline: true,
                    }} />
                    <Button variant='contained' disableElevation sx={{
                        color: 'primary.white',
                    }}>SEARCH</Button>
                </Box> */}

            </Box>
        </Container>
    )
}

export default TourBanner