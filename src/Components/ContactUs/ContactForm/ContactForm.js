import React from 'react'
import {
    Button, Container, Grid, Paper, Typography, Box, TextField, Stack,
    List, ListItem, ListItemText, ListItemIcon, ListItemButton
} from '@mui/material'
import { DraftsIcon } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { border } from '@mui/system';

const ContactForm = () => {
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
                            '@media screen and (max-width:678px)': {
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 0,
                            },
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
                                    Lorem Ipsum
                                    Dolor Sit Amet
                                </Typography>
                            </Box>
                            <Box container>
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
                                        <ListItemText primary="+971 50 273 6276" />

                                    </ListItem>
                                    <ListItem>

                                        <ListItemIcon>
                                            <AlternateEmailIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="webbooking@goyakatravels.com" />

                                    </ListItem>
                                </List>
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
                            width: '100%',                           // paddingY: '60px',

                            borderRadius: '20px',

                        }}>
                            <Box container sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                zIndex: 2,
                                // margin:'30px',
                                boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.12);',
                                paddingY: '50px',
                                paddingX: '30px',
                                backgroundColor: 'primary.white',
                                borderRadius: '10px',
                            }}>
                                <Stack
                                    component="form"

                                    spacing={2}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField


                                        label="Name"
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                    />
                                    <TextField

                                        label="Email"

                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                    />
                                    <TextField

                                        label="Phone Number"

                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                    />
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}

                                    />
                                    <Button fullWidth variant='contained'
                                        sx={{
                                            color: 'primary.white',
                                        }} disableElevation
                                    >SEND MESSAGE</Button>
                                </Stack>

                            </Box>
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
            <Box container component='div' sx={{
                borderRadius:'10px',
                marginBottom:'80px',
            }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011926352!2d54.94755306321453!3d25.076381469525984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1646677497481!5m2!1sen!2sin" width={"100%"} height={"450px"} sx={{
                    border600px:'none'
                }} style={{borderRadius:10,border:0}}></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.30119263526!2d54.947553063214514!3d25.076381469525977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1646677833497!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
            </Box>
        </Container>
    )
}

export default ContactForm