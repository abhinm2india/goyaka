import React from 'react'
import { Container, Grid, Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
const Services = () => {
    return (
        <Container>
            <Box sx={{
                marginBottom: '80px',
                marginTop: '80px',
            }}>

                <Box container sx={{
                    marginBottom: '80px',
                }}>
                    <Typography variant='h4' align='center' fontWeight='bold' mb={2}>
                        Our Services
                    </Typography>

                </Box>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                        <Box container sx={{
                            paddingRight: '50px',
                            '@media screen and (max-width:678px)': {
                                paddingRight: '0px',
                            },
                        }}>
                            <Box>

                                <Typography variant='h5'
                                    sx={{
                                        color: 'primary.black',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    Limousine Services
                                </Typography>
                            </Box>

                            <Box container sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                marginTop: '30px',
                            }}>

                                <List>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <DirectionsCarIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Airport Transfer" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <DirectionsCarIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Intercity Transfer" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <DirectionsCarIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Hotel Transfer" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <DirectionsCarIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Business Trips" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <DirectionsCarIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Events & Exhibitions" />

                                    </ListItem>
                                </List>

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
                                backgroundImage: 'url(./images/limos.jpg),radial-gradient(circle, red, yellow, green)',
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
                    <Grid item xs={6}>
                        <Box container mt={{ xs: 2, md: 10 }} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            // padding: '0 40px',

                        }}>
                            <Paper sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: 'url(./images/hotelbooking.jpg),radial-gradient(circle, red, yellow, green)',
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
                    <Grid item xs={6}>
                        <Box container mt={{ xs: 5, md: 10 }} sx={{
                            marginLeft: { xs: 0, md: 10 },
                            '@media screen and (max-width:678px)': {
                                paddingRight: '0px',
                            },
                        }}>
                            <Box>

                                <Typography variant='h5'
                                    sx={{
                                        color: 'primary.black',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    Hotel Booking Services
                                </Typography>
                            </Box>

                            <Box container sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                marginTop: '30px',
                            }}>

                                <List>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <HotelIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Exclusive Contracts with Top Hotels" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <HotelIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Instant Booking System" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <HotelIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="24/7 Team Assistant" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <HotelIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Meet & Greet Upon Arrival" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <HotelIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Direct Contact with Reservation Team & Front Office Team" />

                                    </ListItem>
                                </List>

                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box container mt={{ xs: 5, md: 10 }} sx={{

                            '@media screen and (max-width:678px)': {
                                paddingRight: '0px',
                            },
                        }}>
                            <Box>

                                <Typography variant='h5'
                                    sx={{
                                        color: 'primary.black',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    Visa Services
                                </Typography>
                            </Box>

                            <Box container sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                marginTop: '30px',
                            }}>

                                <List>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FlightTakeoffIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Instant Application" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FlightTakeoffIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Hassle-free Process" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FlightTakeoffIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Competitive Price" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FlightTakeoffIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Visa for all Nationalities" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FlightTakeoffIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Dedicated Team & Assistance" />

                                    </ListItem>
                                </List>

                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box container mt={{ xs: 5, md: 10 }} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            // padding: '0 40px',

                        }}>
                            <Paper sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: 'url(./images/visa.jpg),radial-gradient(circle, red, yellow, green)',
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

export default Services