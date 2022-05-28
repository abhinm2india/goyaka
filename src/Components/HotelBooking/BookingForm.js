import {
    Container, Typography, Modal, Box, Stack, TextField,
    Paper, FormControl, InputLabel, Select, MenuItem, Button,
    List, ListItem, ListItemIcon, ListItemText
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { DatePicker, LocalizationProvider, LoadingButton } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Form, UseForm } from '../UseForm/UseForm';
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser'
// import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const BookingForm = () => {

    let navigate = useNavigate()
    const API_KEY = process.env.REACT_APP_API_KEY;

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY,
        libraries: ['places'],
        region: "AE",
    })

    const [pickautocomplete, setPickAutocomplete] = useState(null);
    const [dropautocomplete, setDropAutocomplete] = useState(null);
    const [ridedate, setRideDate] = React.useState(new Date());

    const [adults, setAdults] = useState('');
    const [children, setChildren] = useState('No Child');




    const handleChangeAdults = (e) => {
        setAdults(e.target.value)

    }
    const handleChangeChild = (e) => {
        setChildren(e.target.value)
    }

    function pickOnLoad(pickautocomplete) {
        // console.log(pickautocomplete);

        setPickAutocomplete(pickautocomplete);
    };
    function dropOnLoad(dropautocomplete) {
        // console.log('autocomplete: ', autocomplete);

        setDropAutocomplete(dropautocomplete);
    };

    const [departure, setDeparture] = useState('')
    const [goingto, setGoingto] = useState('')

    const getPickupCordinates = () => {
        const pickplace = pickautocomplete.getPlace();
        // console.log(pickplace.name);
        setDeparture(pickplace.name)
    }


    const getDropCordinates = () => {
        const dropplace = dropautocomplete.getPlace();
        // console.log(dropplace.name)
        setGoingto(dropplace.name)
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openSecM, setOpenSecM] = useState(false);
    const handleCloseSecM = () => {
        setOpenSecM(false)
        navigate("/");
    };

    const handleSubmitSecM = () => setOpenSecM(true)

    const handleSubmit = (e) => {
        e.preventDefault()

        setOpen(true)
    }

    const initialValues = {
        userName: '',
        userEmail: '',
        userPhone: '',

    }

    const {
        formValues,
        setFormValues,
        errors,
        setErrors,
        handleInputChange
    } = UseForm(initialValues);

    const validate = () => {
        let temp = {}
        temp.userName = formValues.userName ? "" : "This field is required."
        temp.userEmail = (/$^|.+@.+..+/).test(formValues.userEmail) ? "" : "Email is not valid."
        temp.userPhone = formValues.userPhone.length > 9 ? "" : "Mobile number not valid."
        // temp.paymentMode = formValues.paymentMode.length != 0 ? "" : "This field is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }

    const sendReq = (e) => {
        e.preventDefault()
        if (validate()) {
            console.log('hello')
        }
        console.log(formValues)
    }

    const templateParams = {
        name: formValues.userName,
        email: formValues.userEmail,
        phoneNumber: formValues.userPhone,
        departure: departure,
        goingto: goingto,
        adults: adults,
        children: children,
        ridedate: ridedate,

    };

    const [loading, setLoading] = useState(false);
    // function handleClick() {
    //     setLoading(true);
    // }


    const [emailResposne, setEmailResponse] = useState(null)

    useEffect(() => {
        if (emailResposne) {
            setLoading(false)
            setOpen(false)
            handleSubmitSecM()
        }
        console.log(loading)

        return () => {
            // cancel the subscription
            setEmailResponse(null);
        };

    }, [emailResposne])

    const sendEmail = (e) => {

        e.preventDefault();
        if (validate()) {
            setLoading(true)
            emailjs.send('service_dn309pg', 'template_xxmcdir', templateParams, 'S3F5_MUBsi9MJbGzU')
                .then(function (response) {
                    setEmailResponse(response.status)
                    console.log('SUCCESS!', response.status, response.text);

                }, function (error) {
                    console.log('FAILED...', error);
                });
        }
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:{xs:285, md:400},
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
      
    };


    return (
        <>
            <Container >
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
                        backgroundImage: 'linear-gradient(20deg, rgb(0 0 0 / 56%), rgb(0 0 0 / 15%)),url(./images/hotel_booking.jpg)',
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
                            Hotel Booking
                        </Typography>
                        <Typography variant='subtutle1' align='center' color={'primary.white'}>
                            Book Your Dream Hotel
                        </Typography>
                    </Box>

                </Box>

                <Paper
                    sx={{
                        border: '0px solid #000',
                        borderRadius: '10px',
                        boxShadow: 'rgb(0 0 0 / 17%) 0px 6px 29px -4px',

                        marginBottom: 10,

                    }}

                >
                    <Stack spacing={3} component='form' onSubmit={handleSubmit}
                        padding={{ xs: 3, md: 5 }}
                    >
                        <Stack alignItems='center' justifyContent='center'
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 2, sm: 2, md: 4 }}
                        >

                            <Autocomplete onLoad={pickOnLoad} onPlaceChanged={getPickupCordinates}>
                                <TextField size='small'
                                    label="Departing From"
                                    fullWidth
                                    // inputRef={pickRef}
                                    id="picktext"
                                    // defaultValue="Small"
                                    size="small"
                                    sx={{
                                        border: '5px solid primary',
                                    }}
                                    required
                                />
                            </Autocomplete>
                            <Autocomplete onLoad={dropOnLoad} onPlaceChanged={getDropCordinates}>
                                <TextField size='small'
                                    label="Going To"

                                    // inputRef={dropRef}
                                    id="droptext"

                                    // defaultValue="Small"
                                    size="small"
                                    sx={{
                                        border: '5px solid primary',
                                    }}
                                    required
                                    fullWidth
                                />
                            </Autocomplete>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    views={['day']}
                                    label="Travel Date"
                                    value={ridedate}
                                    onChange={(newDate) => {
                                        setRideDate(newDate);
                                    }}
                                    renderInput={(params) => <TextField {...params} required size='small' helperText={null} />}
                                />


                            </LocalizationProvider>

                        </Stack>
                        <Stack direction={{ xs: 'column', sm: 'row' }}
                            spacing={{ xs: 2, sm: 2, md: 4 }} alignItems='center' justifyContent='center'>

                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-simple-select-label" >Adults</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={adults}
                                    label="Package"
                                    onChange={handleChangeAdults}
                                    displayEmpty
                                    required
                                >
                                    <MenuItem value={'1 Adults'}>1 Adults</MenuItem>
                                    <MenuItem value={'2 Adults'}>2 Adults</MenuItem>
                                    <MenuItem value={'3 Adults'}>3 Adults</MenuItem>
                                    <MenuItem value={'4 Adults'}>4 Adults</MenuItem>
                                    <MenuItem value={'5 Adults'}>5 Adults</MenuItem>
                                    <MenuItem value={'6 Adults'}>6 Adults</MenuItem>
                                    <MenuItem value={'7 Adults'}>7 Adults</MenuItem>
                                    <MenuItem value={'8 Adults'}>8 Adults</MenuItem>
                                    <MenuItem value={'9 Adults'}>9 Adults</MenuItem>
                                    <MenuItem value={'10 Adults'}>10 Adults</MenuItem>
                                    <MenuItem value={'11 Adults'}>11 Adults</MenuItem>
                                    <MenuItem value={'12 Adults'}>12 Adults</MenuItem>
                                    <MenuItem value={'13 Adults'}>13 Adults</MenuItem>
                                    <MenuItem value={'14 Adults'}>14 Adults</MenuItem>
                                    <MenuItem value={'15 Adults'}>15 Adults</MenuItem>

                                </Select>
                            </FormControl>
                            <FormControl fullWidth size='small'>
                                <InputLabel id="demo-simple-select-label" >Children</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={children}
                                    label="Package"
                                    onChange={handleChangeChild}
                                    displayEmpty
                                    required
                                >
                                    <MenuItem value={'No Child'}>No Child</MenuItem>
                                    <MenuItem value={'1 Child'}>1 Child</MenuItem>
                                    <MenuItem value={'2 Children'}>2 Children</MenuItem>
                                    <MenuItem value={'3 Children'}>3 Children</MenuItem>
                                    <MenuItem value={'4 Children'}>4 Children</MenuItem>
                                    <MenuItem value={'5 Children'}>5 Children</MenuItem>
                                    <MenuItem value={'6 Children'}>6 Children</MenuItem>
                                    <MenuItem value={'7 Children'}>7 Children</MenuItem>
                                    <MenuItem value={'8 Children'}>8 Children</MenuItem>
                                    <MenuItem value={'9 Children'}>9 Children</MenuItem>
                                    <MenuItem value={'10 Children'}>10 Children</MenuItem>

                                </Select>
                            </FormControl>
                            <Button type='submit' fullWidth variant='contained'>Search Now</Button>
                        </Stack>
                    </Stack>
                </Paper>

                <Box mb={10}>
                    <Typography variant='body2' mb={3}>
                        The year 2022 is witnessing a spike in the number of people staying in hotels and dining out to relax from their stressful daily life. In a city like Dubai, where the world’s stunning architectures are situated, the residents and tourists alike like to spend their holidays by choosing the best hotels in the city. The hotels in the UAE are welcoming their guests with the best packages ever and they make sure their customers return to them for the next staycation as well.
                    </Typography>
                    <Typography variant='body2'>
                        Business travelers staying in the country are not less in number and they too prefer an ambience where they can work, relax, and feel home when at a hotel. Hotels in Dubai provide all the facilities necessary for corporates with fastest Wi-Fi connections, uninterrupted power supply, and other necessary amenities such as work desk, comfy chairs, and lamps.
                    </Typography>
                </Box>
                <Box container mb={10}>
                    <Typography variant='h4' component='h2' sx={{
                        fontWeight: 700,
                    }}>
                        A stay as comfortable as at home!
                    </Typography>
                    <Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={7} alignItems='center' >
                        <Box>

                            <Typography variant='body2' mt={2}>
                                Goyaka has tie ups with the UAE’s best hotels and we help you book the best-in-class rooms for you to make your stay in the country more memorable. In line with the Expo 2020, the convergence of sustainability and hygiene is an area of innovation in the hospitality sector now. Our primary goal is to provide our guests with shelter, food, refreshment, and other services, offering a homely atmosphere for people on a journey away from home.
                            </Typography>
                            <Typography variant='body2' mt={2}>
                                We offer the best list of hotels in the most affordable budgets for your enquiries with us. One of our executives will get in touch with you once you submit the enquiry using the above enquiry form. We accept all modes of payments and make the entire process hassle-free. *Free cancellation up to 24 hours prior to check-in is available. We make the search easier for you!
                            </Typography>
                        </Box>
                        <Box component='img'
                            src='./images/resort.jpg'
                            alt='hotel-booking'
                            sx={{
                                height: 'auto',
                                width: '100%',
                                objectFit: 'cover',
                                borderRadius: '25px',
                                marginTop: { xs: '40px !important' },
                            }}
                        />
                    </Stack>

                </Box>
                <Box container mb={10}>
                    <Typography variant='h4' component='h2' mb={3} sx={{
                        fontWeight: 700,
                    }}>
                        Ramada Plaza by Wyndham
                    </Typography>
                    <Typography variant='body2'>
                        Ramada Plaza by Wyndham in Dubai, Deira is an excellent choice for corporate travelers and tourists equally. The hotel is in the historical district of Dubai called Deira. It is conveniently located just 50 meters from the Dubai Metro Station and just 15 minutes from the Dubai International Airport. You can find all the necessary facilities for business and shopping in the proximity of Ramada Plaza. The hotel has 250 sleek and contemporary rooms and suites featuring minimalist, elegant interiors with soundproof windows.
                    </Typography>
                    <Box mb={3} mt={2}>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 0, md: 3 }}>
                            <Box>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Indoor pool" />

                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Spa" />

                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Hot tub/Jacuzzi" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Fitness center" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Sauna" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Massage" />
                                    </ListItem>
                                </List>
                            </Box>

                            <Box>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Sauna" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Massage" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Hairstyling" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Manicure" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Head massage" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Locker rooms" />
                                    </ListItem>

                                </List>
                            </Box>
                            <Box>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Back massage" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Waxing services" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Nightclub/DJ" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Beauty services" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Spa facilities" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Haircut" />
                                    </ListItem>

                                </List>

                            </Box>
                            <Box>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Full-body massage" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Facial treatments" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Foot massage" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Makeup services" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Hand massage" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Pedicure" />
                                    </ListItem>

                                </List>

                            </Box>
                            <Box>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Body treatments" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Hair treatments" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Fitness" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Hair coloring" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Neck massage" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Steam room" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon fontSize='small' color='primary' />
                                        </ListItemIcon>
                                        <ListItemText primary="Indoor pool (year-round)" />
                                    </ListItem>
                                </List>

                            </Box>

                        </Stack>
                    </Box>
                    <Box>
                        <Typography variant='body2' mb={3}>
                            The hotel also offers state-of-the-art meeting rooms intuitively designed to facilitate the corporate meetings and events. The fully equipped halls offer comprehensive technical support, which includes internet connectivity, projectors, speakers, mic, etc.
                        </Typography>
                        <Typography variant='body2'>
                            Apart from Ramada Plaza, we have tie-ups with numerous 4-stars and 5-stars rated hotels in the UAE, in all emirates. Please get in touch with us to find the best one for your stay in the UAE.
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Box component='img'
                    mb={5}
                            src='./images/hotel_booking.jpg'
                            alt='hotel-booking'
                            sx={{
                                height: 'auto',
                                width: '100%',
                                objectFit: 'cover',
                                borderRadius: '25px',
                                // marginTop: { xs: '40px !important' },
                            }}
                        />
                        <Stack spacing={3} component={Form} onSubmit={sendEmail}>
                            <TextField variant='outlined' size='small'
                                label='Your Name'
                                name='userName'
                                value={formValues.userName}
                                onChange={handleInputChange}
                                error
                                helperText={errors.userName}
                            />
                            <TextField variant='outlined' size='small'
                                label='Email Id'
                                name='userEmail'
                                value={formValues.userEmail}
                                onChange={handleInputChange}
                                error
                                helperText={errors.userEmail}
                            />
                            <TextField variant='outlined' size='small'
                                label='Phone Number'
                                name='userPhone'
                                value={formValues.userPhone}
                                onChange={handleInputChange}
                                error
                                helperText={errors.userPhone}
                            />

                            {
                                loading ? <LoadingButton
                                    disabled
                                    loading={loading}
                                    loadingPosition="end"
                                    variant="contained"
                                >
                                    Sending..
                                </LoadingButton> : (<Button type='submit' variant='contained'>Submit</Button>)
                            }


                        </Stack>
                    </Box>
                </Modal>


                <Modal
                    open={openSecM}
                    onClose={handleCloseSecM}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Stack spacing={2} alignItems='center' justifyContent='center'>
                            <Typography variant='h6'>
                                Message send successfully.
                            </Typography>
                            <Typography variant='subtitle1'>
                                Our executive will contact you shortly!
                            </Typography>
                            <Button variant='outlined' onClick={handleCloseSecM}>Thank You</Button>
                        </Stack>


                    </Box>

                </Modal>


            </div>
        </>

    )
}
export default BookingForm