
import { Box, Container, Typography, Button } from '@mui/material'
import React from 'react'

const Car = () => {
    return (
        <Box container component='div' sx={{
            paddingY: '50px',
            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.black',
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom: '80px',
            backgroundImage: 'linear-gradient(20deg, rgb(0 0 0 / 56%), rgb(0 0 0 / 15%)),url(./images/car.jpg)',
            height: '70vh',
            '@media screen and (max-width: 678px)': {
                height: '50vh',
            },

        }}>
            <Container>
                <Box container sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    width: '50%',
                    '@media screen and (max-width: 678px)': {
                        width: '100%',
                    },
                }}>
                    <Box>
                        <Typography variant='h6' color='primary' component='h6'>
                            LOREM IPOSUM
                        </Typography>
                    </Box>
                    <Box>

                        <Typography variant='h4' component='h3'
                            sx={{
                                color: 'primary.white',
                                fontWeight: 'bold',

                            }}
                        >
                            Lorem Ipsum
                            Dolor Sit amet consectetur
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' color='primary.white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue
                        </Typography>
                    </Box>
                    <Box container sx={{
                        marginY: '30px',
                    }}>
                        <Button variant='contained' sx={{
                            color: 'primary.white',
                        }}>Know More</Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Car