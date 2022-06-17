import React from 'react'
import { Container, Grid, Paper, Typography, Box, } from '@mui/material'
// import PoolIcon from '@mui/icons-material/Pool';
const Resort = () => {
    return (
        <Container>
            <Box sx={{
                marginBottom: '80px',
                marginTop: '80px',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                        <Box container sx={{
                            paddingRight: '50px',
                            '@media screen and (max-width:678px)': {
                                paddingRight: '0px',
                            },
                        }}>
                            <Box>
                                <Typography variant='h6' color='primary' component='h6'>
                                  TRANSPORT BOOKING
                                </Typography>
                            </Box>
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
                                Goyaka’s widest range of vehicles cater to the everyday business travel requirements and fun rides alike. Our executive cars are driven by qualified, vaccinated chauffeurs, which makes us promise you a safe on-demand rides within the country. Airport transfer services operate from Dubai, Abu Dhabi, Sharjah and private jet centers in the UAE. If you plan to travel to the UAE, book with us a complete stay package at best rates.
                                </Typography>
                            </Box>
                            <Box container sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                marginTop: '30px',
                            }}>

                                {/* <List>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <PoolIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Infinity Pool" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <PoolIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="The Beach" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <PoolIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Beach Surprise" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <PoolIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Beach Activities" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <PoolIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Beach Activities" />

                                    </ListItem>
                                </List> */}

                            </Box>
                            {/* <Box container sx={{
                                marginY: '30px',
                            }}>
                                <Button variant='contained' sx={{
                                    color: 'primary.white',
                                }}>Know More</Button>
                            </Box> */}
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
                                backgroundImage: 'url(./images/car_002.jpg),radial-gradient(circle, red, yellow, green)',
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

export default Resort