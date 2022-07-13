import React from 'react'
import {
    Container, Typography, Box, Stack, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material'
import VisBookingForm from './VisBookingForm'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const VisaContent = () => {
    return (
        <Container>
            <Box
                Container
                sx={{
                    height: '50vh',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '25px',
                    // backgroundColor: '#000',
                    opacity: 1,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: 'linear-gradient(20deg, rgb(0 0 0 / 56%), rgb(0 0 0 / 15%)),url(./images/visa.jpg)',
                    backgroundSize: 'cover',
                    justifyContent: 'center',
                    backgroundPosition: 'center',
                    mb: 10,
                    '@media screen and (max-width: 678px)': {
                        mb: 5,
                    },
                }}

            >

                <Box container sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    // backgroundColor: 'primary.white',
                    paddingX: '20px',
                    paddingY: '20px',
                    borderRadius: '10px',
                    alignItems: 'center',
                    flexDirection: 'column',
                    // boxShadow: '0px 12px 39px rgba(0, 0, 0, 0.25)',

                    '@media screen and (max-width: 678px)': {
                        flexDirection: 'column',
                        paddingY: '10px',
                        alignItems: 'center',
                    },
                }}>
                    <Typography variant='h2' align='center' component='h3' color={'primary.white'}
                        sx={{
                            fontWeight: 'bold',
                        }}
                    >
                        Visa Booking
                    </Typography>
                    <Typography variant='subtutle1' align='center' color={'primary.white'}>
                        Book Your Dubai Visiting Visa
                    </Typography>
                </Box>

            </Box>

            <Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={5} justifyContent='space-around'>
                <Box sx={{
                    width: { xs: '100%', md: '60%' }
                }}>
                    <Box container mb={10}>
                        <Typography variant='h4' component='h2' sx={{
                            fontWeight: 700,
                        }}>
                            Book Your UAE Visit Visa On-the-go!
                        </Typography>
                        <Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={7} alignItems='center' >
                            <Box>

                                <Typography variant='body2' mt={2}>
                                    The UAE is one of the safest countries in the world to live in and travel. The lively night life, desert safari, most modern architectures, skyscrapers, the beautiful beaches, and corniches, along with numerous other attractions call the people from all around the world to visit the country. The country offers a safe and easy way to travel by providing visit visas for 30 days, 90 days and 5 years as per the latest regulations by the official visa issuing authorities.
                                </Typography>
                                <Typography variant='body2' mt={2}>
                                    The United Arab Emirates' Government portal explains that the tourist visas to the UAE can be issued for 30 days or 90 days for single or multiple entries. You have the flexibility to extend the tourist visa for 30 days twice without the need to leave the country. Recently, the Government of the UAE has facilitated a five-year visa, which allows the tourists to enter multiple times on self-sponsorship and remain in the country for 90 days on each visit, which can be extended for another 90 days.
                                </Typography>
                            </Box>
                            {/* <Box component='img'
                            src='./images/resort.jpg'
                            alt='hotel-booking'
                            sx={{
                                height: 'auto',
                                width: '100%',
                                objectFit: 'cover',
                                borderRadius: '25px',
                                marginTop: { xs: '40px !important' },
                            }}
                        /> */}
                        </Stack>

                    </Box>
                    <Box container mb={10}>
                        <Typography variant='h4' component='h2' sx={{
                            fontWeight: 700,
                        }}>
                            How Goyaka Helps You?
                        </Typography>
                        <Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={7} alignItems='center' >
                            <Box>

                                <Typography variant='body2' mt={2}>
                                To obtain a visit visa to enter the UAE, you need to contact a UAE-based airlines, a tour agency like Goyaka Tours or a hotel (where you plan to stay) in the UAE who will apply visit visa on your behalf to the official visa-issuing authorities in the UAE. We will aid you in getting approvals by submitting the necessary documents to the official bodies and update you with necessary travel guidelines from time to time. Goyaka extends its support by offering tailored tour packages that include desert safari, city tour, limousine rides, chauffeur service, hotel bookings, and guided tours to our guests.
                                    </Typography>

                            </Box>
                            {/* <Box component='img'
                            src='./images/resort.jpg'
                            alt='hotel-booking'
                            sx={{
                                height: 'auto',
                                width: '100%',
                                objectFit: 'cover',
                                borderRadius: '25px',
                                marginTop: { xs: '40px !important' },
                            }}
                        /> */}
                        </Stack>

                    </Box>
                </Box>
                <Box mb={5} sx={{
                    width: { xs: '100%', md: '40%' }
                }}>
                    <VisBookingForm />
                </Box>
            </Stack>



            <Box container mb={10}>
                <Typography variant='h4' component='h2' sx={{
                    fontWeight: 700,
                }}>
                    Types of Visas and Entry Permits
                </Typography>
                <Stack direction={{ xs: 'column-reverse', md: 'row' }}
                    spacing={2}
                    alignItems='flex-start'
                    justifyContent='space-between'
                >


                    <Box>

                        <Typography variant='body2' mt={2}>
                        Depending on the purpose of your visit you can avail different types of visas and entry permits from the UAE Government. 
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                </ListItemIcon>
                                <ListItemText primary="Business visa" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                </ListItemIcon>
                                <ListItemText primary="Tourist visa" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                </ListItemIcon>
                                <ListItemText primary="Transit visa" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                </ListItemIcon>
                                <ListItemText primary="Student visa" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                </ListItemIcon>
                                <ListItemText primary="Retirement visa" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                </ListItemIcon>
                                <ListItemText primary="eVisa for GCC residents" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                </ListItemIcon>
                                <ListItemText primary="Patient and his/her companion’s entry permits" />
                            </ListItem>
                        </List>
                        <Typography variant='body2' mt={2}>
                        Get in touch with us if you are looking to avail any of these visas. We will guide you with the best options available. Do not miss the amazing offers we have for you, call us now!
                        </Typography>
                    </Box>
                    <Box component='img'
                        src='./images/visa_dubai.jpg'
                        alt='hotel-booking'
                        sx={{
                            height: 'auto',
                            width: { md: '500px', xs: '320px' },
                            objectFit: 'cover',
                            borderRadius: '25px',

                        }}
                    />
                </Stack>

            </Box>
            <Box container mb={10}>
                <Typography variant='h6' sx={{
                    fontWeight: 700,
                    fontSize: 20,
                }}>
                    Terms & Conditions for Obtaining Dubai Visa
                </Typography>
                <Stack spacing={10} alignItems='flex-start' >


                    <List>
                        <ListItem disablePadding>
                            <ListItemText sx={{ fontSize: '15px', fontWeight: '400' }} disableTypography primary="  • Visa application process starts only after all the documents are verified" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ fontSize: '15px', fontWeight: '400' }} disableTypography primary="  • Visa application charges depend on the passenger’s nationality" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ fontSize: '15px', fontWeight: '400' }} disableTypography primary="  • We do not take responsibility for forged documents. We assume all the documents are valid and original and submit the same to the relevant authorities." />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ fontSize: '15px', fontWeight: '400' }} disableTypography primary="  • We do not guarantee the approval of all visa applications. Visa approval is solely from the Government authority." />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ fontSize: '15px', fontWeight: '400' }} disableTypography primary="  • Visa application fee is non-refundable under any circumstances once the application is submitted to the immigration department" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ fontSize: '15px', fontWeight: '400' }} disableTypography primary="  • Passengers are expected to enter the country within 14 days of the visa issuance and exit the country within the visa period" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ fontSize: '15px', fontWeight: '400' }} disableTypography primary="  • Goyaka is not responsible for any crimes attempted during the visit and will be dealt by the UAE Police as per the nation’s law and orders" />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText sx={{ fontSize: '15px', fontWeight: '400' }} disableTypography primary="   • Travelers are required to have medical insurance while in the country" />
                        </ListItem>
                    </List>

                </Stack>

            </Box>
        </Container>
    )
}

export default VisaContent