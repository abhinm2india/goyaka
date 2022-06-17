import { Container, Grid, Box, Typography, List, ListItem, ListItemText, Stack, Button } from '@mui/material'
import React from 'react'
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    let navigate = useNavigate();

    return (
        <Container>


            <Stack direction={{ xs: 'column', md: 'row' }} alignItems='flex-start'
                justifyContent='space-between'
                sx={{
                    marginTop: 10,
                    marginBottom: 5,
                }}
            >

                <Stack direction='column' spacing={3}>
                    <Box component="img"
                        onClick={() => { navigate("/"); }}
                        sx={{
                            height: '50px',
                            width: '135px',
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            cursor: 'pointer',
                        }}
                        alt="Logo"
                        src="./images/goyaka.png"
                    />
                    <Box sx={{
                        maxWidth: { xs: '100%', md: 270 },
                    }}>
                        <Typography variant='body2'>
                            At Goyaka, you meet a team of wanderlusts dedicated to guide you through the beautiful landscapes in the UAE.
                        </Typography>
                    </Box>
                    <Stack direction='row' spacing={2}>
                        <Facebook color='primary' />
                        <Instagram color='primary' />
                        <Twitter color='primary' />
                        <LinkedIn color='primary' />
                    </Stack>
                </Stack>

                <Stack direction={{ xs: 'row' }} spacing={10} sx={{
                    maxWidth: { xs: '100%', md: 400 },
                    marginTop:{xs:7,md:0},
                    marginBottom:{xs:7, md:0},
                }}>
                    <Box container sx={{


                    }}>
                        <Typography variant='h6'>Tour Packages</Typography>
                        <List>
                            <ListItem alignItems='flex-start' disablePadding>
                                <ListItemText>

                                    <Button component='a' onClick={() => { navigate("/tour"); }}>City Tour</Button>
                                </ListItemText>

                            </ListItem>
                            <ListItem alignItems='flex-start' disablePadding>
                                <ListItemText>

                                    <Button component='a' onClick={() => { navigate("/tour"); }}>Dolphinarium</Button>
                                </ListItemText>

                            </ListItem>

                            <ListItem alignItems='flex-start' disablePadding>
                                <ListItemText>

                                    <Button component='a' onClick={() => { navigate("/tour"); }}>Desert Safari</Button>
                                </ListItemText>

                            </ListItem>

                            <ListItem alignItems='flex-start' disablePadding>
                                <ListItemText>
                                    <Button component='a' onClick={() => { navigate("/tour"); }}>Dubai Museum</Button>
                                </ListItemText>

                            </ListItem>
                            <ListItem alignItems='flex-start' disablePadding>
                                <ListItemText>
                                    <Button component='a' onClick={() => { navigate("/tour"); }}>Burj Khalifa</Button>
                                </ListItemText>

                            </ListItem>

                        </List>
                    </Box>
                    <Box container sx={{
                        marginLeft: '20px',
                    }}>
                        <Typography variant='h6'>Quick Links</Typography>
                        <List>
                            <ListItem alignItems='flex-start' disablePadding>
                                <ListItemText>
                                    <Button component='a' onClick={() => { navigate("/"); }}>Home</Button>
                                </ListItemText>

                            </ListItem>
                            <ListItem alignItems='flex-start' disablePadding>
                                <ListItemText>
                                    <Button component='a' onClick={() => { navigate("/about-us"); }}>About Us</Button>
                                </ListItemText>

                            </ListItem>

                            <ListItem alignItems='flex-start' disablePadding>
                                <ListItemText>
                                    <Button component='a' onClick={() => { navigate("/tour"); }}>Tour Packages</Button>
                                </ListItemText>

                            </ListItem>

                            <ListItem alignItems='flex-start' disablePadding>
                                <ListItemText>
                                    <Button component='a' onClick={() => { navigate("/contact-us"); }}>Contact Us</Button>
                                </ListItemText>

                            </ListItem>

                        </List>
                    </Box>
                </Stack>


                <Box sx={{
                  
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
                                +971 45914066
                            </ListItemText>

                        </ListItem>

                        <ListItem alignItems='flex-start' disablePadding>
                            <ListItemText>
                                booking@goyakatravels.com
                            </ListItemText>

                        </ListItem>



                    </List>
                </Box>


            </Stack>





            {/* <Box container sx={{
                // marginY: '50px',
                marginTop: '80px',
                marginBottom: '40px',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
                    <Grid item xs={3} md={3}>

                    </Grid>
                    <Grid item xs={2} md={3}>
                      
                    </Grid>
                    <Grid item xs={2} md={3}>
                      
                    </Grid>
                    <Grid item xs={3}>
                      
                    </Grid>

                </Grid>
            </Box> */}


            <Stack direction={{xs:'column', md:'row'}} spacing={2}
            alignItems='flex-start'
            justifyContent='space-between'
            sx={{
                marginBottom:3,
            }}
            >
                <Box container>
                    <Stack direction={{xs:'column',md:'row'}} spacing={1}>
                        <Typography variant='body1'>Copy Rights @ Goyaka 2022 |</Typography>
                        <Typography variant='body1' component='a' href='./doc/Termsandconditions.docx'>Terms and Condition</Typography>
                    </Stack>

                </Box>
                <Box container>
                    <Typography variant='body1'>Design & Developed By : <a href='https://wudinfyre.com/'>Wudinfyre</a></Typography>
                </Box>
            </Stack>
        </Container>
    )
}

export default Footer