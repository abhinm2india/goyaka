import { Box, Container,TextField, Button } from '@mui/material'
import React from 'react'


const TransportBanner = () => {
    return (
        <Container maxWidth='lg'>
            <Box
                Container
                sx={{
                    height: '59vh',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '25px',
                    // backgroundColor: '#000',
                    opacity: 1,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: 'url(./images/car_003.jpg)',
                    backgroundSize: 'cover',
                    justifyContent: 'center',
                    backgroundPosition: 'center',

                }}

            >

                <Box container sx={{
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
                    <TextField variant='standard' label='Search Your Car' defaultValue={'Lexus, 7 Seater...'} sx={{
                    }} InputProps={{
                        disableUnderline: true,
                    }} />
                    <Button variant='contained' disableElevation sx={{
                        color: 'primary.white',
                    }}>SEARCH</Button>
                </Box>

            </Box>
        </Container>
    )
}

export default TransportBanner