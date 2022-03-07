import React from 'react'
import { Button, Container, Grid, Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import PoolIcon from '@mui/icons-material/Pool';
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
                        }}>
                            <Box>
                                <Typography variant='h6' color='primary' component='h6'>
                                    RESORTS
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue
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
                                </List>

                            </Box>
                            <Box container sx={{
                                marginY: '30px',
                            }}>
                                <Button variant='contained' sx={{
                                    color: 'primary.white',
                                }}>Know More</Button>
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
                                backgroundImage: 'url(./images/resort.jpg),radial-gradient(circle, red, yellow, green)',
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

export default Resort