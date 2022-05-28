import React from 'react'
import {
    Container, Grid, Typography, Box,
    List, ListItem, ListItemText, ListItemIcon,
} from '@mui/material'

import PhoneIcon from '@mui/icons-material/Phone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const ContactForm = () => {
    // const [value, setValue] = React.useState(null);
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
                                    Find Us Here
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
                                        <ListItemText primary="+971 45914066" />

                                    </ListItem>
                                    <ListItem>

                                        <ListItemIcon>
                                            <AlternateEmailIcon color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="booking@goyakatravels.com" />

                                    </ListItem>
                                </List>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box container component='div' sx={{
                            borderRadius: '10px',

                        }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57728.70667430926!2d55.29058389576944!3d25.269099638041716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f37cdae93%3A0xde756363a1b78491!2sDeira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1651079362687!5m2!1sen!2sin" width={"100%"} height={"350px"} sx={{
                                border600px: 'none'
                            }} style={{ borderRadius: 10, border: 0 }}></iframe>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.30119263526!2d54.947553063214514!3d25.076381469525977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1646677833497!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                        </Box>
                    </Grid>
                </Grid>

            </Box>

        </Container>
    )
}

export default ContactForm