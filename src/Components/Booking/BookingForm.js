import {
    Box, Button, Stack, TextField, Typography, FormControlLabel, Checkbox, FormGroup,
    Radio, RadioGroup, Modal
} from '@mui/material'
import React, { useEffect, useState } from 'react'
// import ReactPhoneInput from 'react-phone-input-material-ui';
import { format } from 'date-fns';
import axios from 'axios';
import { Form, UseForm } from '../UseForm/UseForm';
import Controls from '../Controls/Controls';
import { useNavigate } from 'react-router-dom';
import MuiPhoneNumber from 'material-ui-phone-number';
const BookingForm = ({ origin, destination, bookingData }) => {

    let navigate = useNavigate();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '0px solid #8FC27D',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        '@media screen and (max-width:678px)': {
            width: '90%',
            margin: '10px',
        },
    };

    const [openSecModal, setOpenSecModal] = useState(false);
    const handleOpenSecModal = () => {
        setOpenSecModal(true);

    }
    const handleCloseSecModal = () => {
        setOpenSecModal(false);
    }

    const [packageName, setPackageName] = useState(bookingData.packageName);
    const [headvalue, setHeadValue] = useState()
    const [desc, setDesc] = useState();

    useEffect(() => {


        if (packageName === "") {
            setHeadValue('Drop Off Location:')
            setDesc(destination)
        } else {
            setHeadValue('Package Name:')
            setDesc(packageName)

        }
    }, [packageName])


    const [flightc, setFlightc] = useState(false);
    const [namesign, setNamesign] = useState(false);
    const [specialmsg, setSpecialmsg] = useState(false);
    const [payment, setPayment] = useState('cash');
    const [phnum, setPhnum] = useState('');

    const today = format(bookingData.bdate, 'yyyy-MM-dd kk:mm')
    const pdt = today.split(" ");

    const handlePaymentmode = (event) => {
        setPayment(event.target.value);
    }

    const [bookingRes, setBookingRes] = useState({});

    const initialValues = {
        pickUpLocation: origin,
        dropLocation: destination,
        pickUpLatitude: bookingData.plat,
        pickUpLongitude: bookingData.plog,
        destinyLatitude: bookingData.dlat,
        destinyLongitude: bookingData.dlog,
        rideType: bookingData.rideType,
        seats: bookingData.car.capacity,
        paymentMode: payment,
        bookingType: bookingData.ride,
        bookingTimestamp: today,
        userName: '',
        userMail: '',
        userMobile: phnum,
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
        temp.userMail = (/$^|.+@.+..+/).test(formValues.userMail) ? "" : "Email is not valid."
        // temp.userMobile = formValues.userMobile.length > 9 ? "" : "Mobile number not valid."
        // temp.paymentMode = formValues.paymentMode.length != 0 ? "" : "This field is required"
        setErrors({
            ...temp
        })

        return Object.values(temp).every(x => x === "")
    }


    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            Booking();
        }
    }

    const Booking = async () => {
        const formData = { ...formValues }
        // https://chauffeur.lagoontechcloud.com:4200/api/booking/sitebooking
        await axios.post('https://chauffeur.lagoontechcloud.com:4200/api/booking/sitebookingGoyaka', formData
        ).then(function (response) {


            const bookingNo = response.data.data.bookingNo

            setBookingRes(response.data)

            if (payment === "cash") {
                handleOpenSecModal()
                // setVehicle(response.data.data);
            }
            if (payment === "card") {


                axios.post('https://chauffeur.lagoontechcloud.com:4200/api/booking/stripe', {
                    "price": bookingData.car.priceValue,
                    "booking": {
                        "error": false,
                        "msg": "Your booking has been confirmed. Please wait until we match our best Driver for you.",
                        "data": { "bookingNo": bookingNo }
                    }
                }
                ).then(function (stripRes) {

                    window.location = stripRes.data.url

                }).catch(function (error) {
                    console.log(error);
                })
            }

        }).catch(function (error) {
            console.log(error);
        })

    }
    const handleOnChange = (val) => {
        setPhnum(val)
    }

    return (

        <>
            <Stack spacing={2}>
                <Stack spacing={2} sx={{

                }}>
                    <Typography variant='h5'>
                        Travel Details
                    </Typography>
                    <Stack spacing={0} sx={{
                        border: '1px solid #000',
                        borderRadius: '5px',
                        padding: '3px',
                    }}>
                        <Typography variant='body2'>Pick Up Location:</Typography>
                        <Typography variant='body1'>{origin}</Typography>
                    </Stack>
                    <Stack spacing={0} sx={{
                        border: '1px solid #000',
                        borderRadius: '5px',
                        padding: '3px',
                    }}>
                        <Typography variant='body2'>{headvalue}</Typography>
                        <Typography variant='body1'>{desc}</Typography>
                    </Stack>
                    <Stack spacing={0} sx={{
                        border: '1px solid #000',
                        borderRadius: '5px',
                        padding: '3px',
                    }}>
                        <Typography variant='body2'>Pick Up Date:</Typography>
                        <Typography variant='body1'>{pdt[0]}</Typography>
                    </Stack>
                    <Stack spacing={0} sx={{
                        border: '1px solid #000',
                        borderRadius: '5px',
                        padding: '3px',
                    }}>
                        <Typography variant='body2'>Pick Up Time:</Typography>
                        <Typography variant='body1'>{pdt[1]}</Typography>
                    </Stack>

                </Stack>
                <Button sx={{ color: 'red' }}>Change Vehicle</Button>
                <Stack spacing={3}>

                    <Stack spacing={1}>
                        <Typography variant='body2'>Additional Options</Typography>
                        <Stack spacing={1}>
                            <FormGroup row>
                                <FormControlLabel
                                    value="start"
                                    control={<Checkbox
                                        onChange={() => setFlightc(!flightc)}
                                        checked={flightc}
                                        size='small' />}
                                    label="Flight Number"
                                    labelPlacement="end"
                                />

                            </FormGroup>
                            {
                                flightc === true && (
                                    <TextField size='small'
                                        label='Flight Number'
                                    />
                                )
                            }
                        </Stack>
                        <Stack spacing={1}>
                            <FormGroup row>
                                <FormControlLabel
                                    value="start"
                                    control={<Checkbox size='small'
                                        onChange={() => setNamesign(!namesign)}
                                        checked={namesign}
                                    />}
                                    label="Meeting with Namesign Required"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                            {
                                namesign === true && (
                                    <TextField size='small'
                                        label='Namesign'
                                    />
                                )
                            }
                        </Stack>
                        <Stack spacing={1}>
                            <FormGroup row>
                                <FormControlLabel

                                    value="start"
                                    control={<Checkbox size='small'
                                        onChange={() => setSpecialmsg(!specialmsg)}
                                        checked={specialmsg}
                                    />}
                                    label="Any Special Message"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                            {
                                specialmsg === true && (
                                    <TextField size='small'
                                        label='Special Message'
                                    />
                                )
                            }
                        </Stack>
                    </Stack>
                    <Stack spacing={3} component='form' onSubmit={handleSubmit}>
                        <Typography>Traveller Details</Typography>
                        <Stack spacing={1}>

                            <TextField
                                name='userName'
                                label='Your Name'
                                value={formValues.userName}
                                onChange={handleInputChange}
                                helperText={errors.userName}
                                size='small'
                            />


                            <TextField
                                name='userMail'
                                label='Email'
                                value={formValues.userMail}
                                onChange={handleInputChange}

                                helperText={errors.userMail}
                                size='small'
                            />

                            {/* <Controls.Input
                                name='userMobile'
                                label='Phone Number'
                                value={formValues.userMobile}
                                onChange={handleInputChange}
                                error={errors.userMobile}
                            /> */}
                            <MuiPhoneNumber defaultCountry={'ae'} variant='outlined' size='small'
                                fullWidth
                                label='Phone Number'
                                name='userMobile'

                                onChange={handleOnChange}
                            // helperText={errors.userMobile}

                            />


                            {/* <ReactPhoneInput
                            defaultCountry='ae'
                            regions={'europe'}
                            component={TextField}
                            /> */}
                        </Stack>

                        <Stack spacing={1}>
                            <Typography variant='h6'
                                component='h2'
                                sx={{
                                    fontWeight: 'bold',
                                }}
                            >SUB TOTAL: {bookingData.car.priceText}</Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                No Hidden Charges, No Waiting Charges, No Airport Parking Charges,No Congestion/tolls Charges - Enjoy 60 minutes Waiting At Airport
                            </Typography>
                        </Stack>
                        <Stack spacing={1}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={payment}
                                onChange={handlePaymentmode}
                            >
                                <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                                <FormControlLabel value="card" control={<Radio />} label="Card" />
                            </RadioGroup>
                            <Typography variant="caption" display="block" gutterBottom>
                                By pressing the button you accept the terms of FC Fleets Service Agreement
                            </Typography>
                        </Stack>
                        <Stack>
                            <Button
                                variant='contained'
                                sx={{
                                    color: "#fff",
                                }}
                                type="submit"
                            >Book Now</Button>
                            {/* <Button variant="contained">Book Now</Button> */}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>


            <Modal
                open={openSecModal}
                onClose={handleCloseSecModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box component='div' container mt={2} sx={{
                        textAlign: 'center',
                    }}>
                        {/* <Typography variant='h6'>Booking Id : {bookingRes.data.bookingNo}</Typography> */}
                        <Typography variant='body1'>
                            {bookingRes.msg}
                        </Typography>

                        <Stack direction='row' spacing={2} mt={3} alignItems='center' justifyContent='center'>
                            <Button variant='outlined' onClick={() => { navigate("/") }}>
                                Do you need to book more?
                            </Button>
                            <Typography>OR</Typography>
                            <Button variant='contained' disableElevation sx={{
                                color: 'primary.white',
                                fontSize: '13px',
                                fontWeight: '600',
                            }} onClick={handleCloseSecModal}>
                                Continue
                            </Button>
                        </Stack>

                    </Box>
                    <Box component='div' container mt={2} sx={{
                        textAlign: 'center',
                    }}>

                    </Box>
                </Box>


            </Modal>


        </>

    )
}

export default BookingForm