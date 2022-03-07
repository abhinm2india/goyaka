import React from 'react'
import { Container, Box, Typography, Grid,Paper, Button } from '@mui/material'
const Description = () => {
    return (
        <Container>
            <Box container sx={{
                marginBottom:'80px',
            }}>
                <Typography variant='h4' align='center' fontWeight='bold' mb={2}>
                    Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant='body2' align='center' mb={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue.

                </Typography>
            </Box>

            <Box sx={{
                marginBottom: '40px',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                        <Box container sx={{
                            paddingRight: '50px',
                        }}>
                          
                            <Box>

                                <Typography variant='h4' component='h3'
                                    sx={{
                                        color: 'primary.black',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    With Our Experience
                                    We Will Serve You
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue
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
                                backgroundImage: 'url(./images/cat_001.jpg),radial-gradient(circle, red, yellow, green)',
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
                                backgroundColor: '#E9FFE1',
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

export default Description