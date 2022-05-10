import { Container, Typography, Modal, Box, Stack, TextField, Paper, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { DatePicker, LocalizationProvider, TimePicker, TabContext, TabList, TabPanel, MobileTimePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Form, UseForm } from '../UseForm/UseForm';

const BookingForm = () => {

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
        console.log("hey")
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

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
        // if (validate()) {
        //     console.log('hello')
        // }
        console.log(formValues)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '0px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
    };


    return (
        <>
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
                        // boxShadow: 'rgb(0 0 0 / 17%) 0px 6px 29px -4px',
                        padding: 10
                    }}
                >
                    <Stack spacing={3} component='form' onSubmit={handleSubmit}>
                        <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>

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
                        <Stack direction='row' spacing={2} alignItems='center' justifyContent='center'>

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
            </Container>
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Stack spacing={3} component={Form} onSubmit={sendReq}>
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
                            <Button type='submit' variant='contained'>Submit</Button>
                        </Stack>
                    </Box>
                </Modal>
            </div>
        </>

    )
}
export default BookingForm