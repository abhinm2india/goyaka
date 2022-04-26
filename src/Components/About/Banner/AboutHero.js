import React from 'react'
import { Box, Container, Typography } from '@mui/material'
export const AboutHero = () => {
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
                    backgroundImage: 'linear-gradient(20deg, rgb(0 0 0 / 56%), rgb(0 0 0 / 15%)),url(./images/about_001.jpg)',
                    backgroundSize: 'cover',
                    justifyContent: 'center',
                    backgroundPosition: 'center',
mb:10,
'@media screen and (max-width: 678px)': {
   mb:5,
},
                }}

            >

                <Box container sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // backgroundColor: 'primary.white',
                    paddingX: '20px',
                    paddingY: '20px',
                    borderRadius: '10px',
                    alignItems: 'center',
                    flexDirection: 'column',
                    // boxShadow: '0px 12px 39px rgba(0, 0, 0, 0.25)',

                    '@media screen and (max-width: 678px)': {
                        flexDirection: 'column',
                        paddingY: '10px',
                        alignItems: 'center',
                    },
                }}>
                    <Typography variant='h2' align='center' component='h3' color={'primary.white'}
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        GOYAKA TOURS AND TRAVELS
                    </Typography>
                    <Typography variant='subtutle1' align='center' color={'primary.white'}>
                    We Promise a Journey That You Will Cherish Forever!
                    </Typography>
                </Box>

            </Box>
        </Container>
    )
}
