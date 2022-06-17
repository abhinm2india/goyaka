import React from 'react'
import { Container, Grid, Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
const Chauffeur = () => {
    return (
        <Container>
            <Box sx={{
                marginBottom: '100px',
                marginTop: '100px',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

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
                    <Grid item xs={6}>
                        <Box container sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            marginLeft: { xs: 0, md: 5 },
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
                                    Chauffeur Service in Dubai That Excels Your Expectation!
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='body1'>
                                    Our vast range of vehicles cater to the everyday business travel requirements and fun rides alike.
                                    Our executive cars are driven by qualified, vaccinated chauffeurs,
                                    which makes us promise you safe on-demand rides within the country.
                                    Airport transfer services operate from Dubai, Abu Dhabi, Sharjah and private jet centers in the UAE.
                                    If you plan to travel to the UAE, book with us a complete stay package at best rates.
                                </Typography>
                            </Box>


                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box container sx={{

                            '@media screen and (max-width:678px)': {
                                paddingRight: '0px',
                            },
                        }}>
                            <Box container sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                marginTop: '30px',
                            }}>

                                <List>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="24/7 Chauffeur Service " />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="GPS-enabled Vehicles (upon request)" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Hotel Transfer" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Airport Transfer" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Airport Meet & Greet" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Award Nights" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Corporate and Group Functions" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Conferences & Exhibitions" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Party Limo for Proms, Wedding, etc." />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Events and Business Meetings" />

                                    </ListItem>
                                    <ListItem disablePadding>

                                        <ListItemIcon>
                                            <FiberManualRecordIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Wedding, Birthday, Anniversary and Special Occasion Functions" />

                                    </ListItem>
                                </List>

                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box container sx={{
                            marginLeft: { xs: 0, md: 5 },
                            '@media screen and (max-width:678px)': {
                                paddingRight: '0px',
                            },
                        }}>

                            <Box>
                                <Typography variant='body1'>
                                    You can find all the necessary amenities such as mineral water, wet tissue, free WiFi and daily newspaper in all the vehicles managed by us. Child seats and airport meet and greet are also provided upon request. Our forte has been handling great events requiring over 300 vehicles on site with a dedicated team to handle it. We are honored to transfer guests during some of the major events such as Dubai Airshow, Formula 1, numerous Filmfare awards and Movie shootings, among other events. Keeping the vehicle costs to the minimum is one of the biggest challenges faced by the fleet managers. But with our expertise, we can work together to identify the most efficient way of improving your fleet.
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box container mt={4} sx={{
                            marginLeft: { xs: 0, md: 0 },
                            backgroundColor: 'primary.light',
                            padding: 6,
                            borderRadius: 6,
                            '@media screen and (max-width:678px)': {
                                paddingRight: '0px',
                            },
                        }}>

                            <Box mb={3}>

                                <Typography variant='h5'
                                    sx={{
                                        color: 'primary.black',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    Range of Vehicles
                                </Typography>
                            </Box>
                            <Box>
                                <Stack spacing={{ xs: 0, md: 10 }} direction={{ xs: 'column', md: 'row' }}>
                                    <Box>
                                        <List>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Rolls Royce" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Bentley" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Cadillac Escalade" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Audi A6" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Lexus ES 350" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="BMW 7 Series" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="BMW 5 Series" />

                                            </ListItem>
                                        </List>
                                    </Box>
                                    <Box>
                                        <List>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Mercedes S Class" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Mercedes E Class" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Mercedes Viano" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Audi A8" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Chevrolet Suburban" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Toyota Previa" />

                                            </ListItem>
                                            <ListItem disablePadding>

                                                <ListItemIcon>
                                                    <DirectionsCarIcon color='primary' />
                                                </ListItemIcon>
                                                <ListItemText primary="Stretched Party Limo" />

                                            </ListItem>
                                        </List>
                                    </Box>
                                </Stack>

                            </Box>

                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    )
}

export default Chauffeur