import React from 'react'
import { Container, Grid, Typography, Box, Paper, Stack, List, ListItem, ListItemText, ListItemIcon } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const GetInTouch = () => {
    const [value, setValue] = React.useState(null);
    return (
        <Container>
            <Box sx={{
                marginBottom: '80px',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                        <Box container sx={{
                            paddingRight: '50px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            height: 'auto'
                        }}>
                            <Box>
                                <Typography variant='h6' color='primary' component='h6'>
                                    GET IN TOUCH
                                </Typography>
                            </Box>
                            <Box>

                                <Typography variant='h4' component='h3'
                                    sx={{
                                        color: 'primary.black',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    Your Doorway To The City Of Dreams
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='body1'>

                                </Typography>
                            </Box>

                            <Box>
                                <Stack direction='column'>
                                    <List spacing={10}>
                                        <ListItem>

                                            <ListItemIcon>
                                                <LocationOnIcon color='primary' />
                                            </ListItemIcon>
                                            <ListItemText primary="Deira, Dubai" />

                                        </ListItem>
                                        <ListItem >

                                            <ListItemIcon>
                                                <PhoneIcon color='primary' />
                                            </ListItemIcon>
                                            <ListItemText primary="+971 45914066" />

                                        </ListItem>
                                        <ListItem>

                                            <ListItemIcon>
                                                <AlternateEmailIcon color='primary' />
                                            </ListItemIcon>
                                            <ListItemText primary="booking@goyakatravels.com" />

                                        </ListItem>
                                    </List>
                                </Stack>
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
                                backgroundImage: 'url(./images/contactus.jpg),radial-gradient(circle, red, yellow, green)',
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

export default GetInTouch