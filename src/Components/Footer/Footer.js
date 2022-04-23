import { Container, Grid, Box, Typography, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (
        <Container>
            <Box container sx={{
                // marginY: '50px',
                marginTop:'80px',
                marginBottom:'40px',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
                    <Grid item xs={3}>
                        <Box container sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Box container>
                                <Typography variant='h4' sx={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    marginBottom: '10px',


                                }}>LOGO</Typography>
                            </Box>
                            <Box container>
                                <Typography variant='body2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue
                                </Typography>
                            </Box>
                            <Box container sx={{
                                display: 'flex',
                                marginTop: '10px',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Facebook color='primary' />
                                <Instagram color='primary' />
                                <Twitter color='primary' />
                                <LinkedIn color='primary' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box container sx={{
                            marginLeft: '20px',

                        }}>
                            <Typography variant='h6'>Tour Packages</Typography>
                            <List>
                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Tour Package
                                    </ListItemText>

                                </ListItem>
                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Tour Package
                                    </ListItemText>

                                </ListItem>

                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Tour Package
                                    </ListItemText>

                                </ListItem>

                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Tour Package
                                    </ListItemText>

                                </ListItem>
                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Tour Package
                                    </ListItemText>

                                </ListItem>

                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box container sx={{
                            marginLeft: '20px',
                        }}>
                            <Typography variant='h6'>Top Destination</Typography>
                            <List>
                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Top Destination
                                    </ListItemText>

                                </ListItem>
                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Top Destination
                                    </ListItemText>

                                </ListItem>

                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Top Destination
                                    </ListItemText>

                                </ListItem>

                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Top Destination
                                    </ListItemText>

                                </ListItem>
                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                        Top Destination
                                    </ListItemText>

                                </ListItem>

                            </List>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box container sx={{
                            marginLeft: '20px',
                        }}>
                            <Typography variant='h6'>Contact Us</Typography>
                            <List>
                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                    Deira, Dubai
                                    </ListItemText>

                                </ListItem>
                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                       +971 50 273 6276
                                    </ListItemText>

                                </ListItem>

                                <ListItem alignItems='flex-start' disablePadding>
                                    <ListItemText>
                                    webbooking@goyakatravels.com
                                    </ListItemText>

                                </ListItem>



                            </List>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            <Box container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingY: '30px',
               
                '@media screen and (max-width: 678px)': {
                    flexDirection:'column',
                    
                 },

            }}>
                <Box container>
                    <Typography variant='body1'>Copy Rights @ Company Name 2022</Typography>
                </Box>
                <Box container>
                    <Typography variant='body1'>Design & Developed By : <a href='#'>Wudinfyre</a></Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer