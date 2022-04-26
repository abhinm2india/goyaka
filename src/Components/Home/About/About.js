import { Button, Container, Grid, Paper, Typography, Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {

    let navigate = useNavigate();
    return (
        <Container>
            <Box sx={{
                marginBottom: '80px',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                        <Box container sx={{
                            paddingRight: '50px',
                        }}>
                            <Box>
                                <Typography variant='h6' color='primary' component='h6'>
                                    ABOUT US
                                </Typography>
                            </Box>
                            <Box>

                                <Typography variant='h4' component='h3'
                                    sx={{
                                        color: 'primary.black',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    We Promise a Journey That You Will Cherish Forever!
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='body1'>
                                    At Goyaka, you meet a team of wanderlusts dedicated to guide you through the beautiful landscapes in the UAE. Dubai, the city of wonders, welcomes you wholeheartedly to explore the miracles it offers.
                                </Typography>
                            </Box>
                            <Box container sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                marginTop: '30px',
                            }}>
                                <Box sx={{
                                    marginRight: '20px',
                                }}>
                                    <Typography color='primary' variant='h4' sx={{
                                        fontWeight: '600',
                                    }}>
                                        25
                                    </Typography>
                                    <Typography>
                                        Year
                                        Experience
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    marginRight: '20px',
                                }}>
                                    <Typography color='primary' variant='h4' sx={{
                                        fontWeight: '600',
                                    }}>
                                        500+
                                    </Typography>
                                    <Typography>
                                        Destination
                                        Collaborations
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    marginRight: '20px',
                                }}>
                                    <Typography color='primary' variant='h4' sx={{
                                        fontWeight: '600',
                                    }}>
                                        50K+
                                    </Typography>
                                    <Typography>
                                        Happy
                                        Customers
                                    </Typography>
                                </Box>
                            </Box>
                            <Box container sx={{
                                marginY: '30px',
                            }}>
                                <Button variant='contained'
                                onClick={() => { navigate("/about-us"); }}
                                    sx={{
                                        color: 'primary.white',
                                    }}>Read More</Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box container sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            // padding: '0 40px',

                        }}>
                            <Paper sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: 'url(./images/about_001.jpg),radial-gradient(circle, red, yellow, green)',
                                height: '400px',
                                width: '90%',

                                objectFit: 'cover',
                                border: 'none',
                                borderRadius: '15px',
                                zIndex: 1,
                                // padding: '20px',
                                '@media screen and (max-width: 678px)': {
                                    width: '100%',
                                },
                            }}>

                            </Paper>
                            <Box sx={{
                                height: '150px',
                                width: '100%',
                                backgroundColor: 'primary.light',
                                border: 'none',
                                borderRadius: '10px',
                                marginTop: '-100px',


                                '@media screen and (max-width: 678px)': {
                                    display: 'none',
                                },
                            }}>

                            </Box>
                        </Box>


                    </Grid>
                </Grid>

            </Box>
        </Container>
    )
}

export default About