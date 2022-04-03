import {
  Container, Box, Typography,
  Button, FormControl, InputLabel, Select, MenuItem, TextField, Stack, makeStyles
} from '@mui/material'
import { useLocation } from 'react-router-dom';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React, { useState, useEffect } from 'react'

import { Modal } from '@mui/material';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import Subscribe from '../../Subscribe/Subscribe';
import axios from 'axios';
import UseForm from '../../UseForm/UseForm';

import Controls from '../../Controls/Controls';

import * as Cities from '../Cities';




const VehicleDetails = (props) => {
  const [bookingType, setBookingType] = useState();

  const location = useLocation();

  console.log(location.state.ride);


  const initialValues = {
    pickUpLocation: '',
    dropLocation: '',
    rideType: location.state.ride,
    seats: location.state.car.capacity,
    paymentMode: '',
    bookingType: bookingType,
    bookingTimestamp: new Date(),
    userName: '',
    userMail: '',
    userMobile: '',
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // const [value, setValue] = React.useState(0);
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

  const controlStyles = {
    width: '100%',
    bgcolor: '#000',
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //form codes start here...

  const {
    formValues,
    setFormValues,
    handleInputChange
  } = UseForm(initialValues);

  const paymentmethods = [
    { id: '1', title: 'Cash' },
    { id: '2', title: 'Card' },

  ]

  const bookNow = () => {
    if (location.state.ride === 1) {
      setBookingType('Route')
    }
    if (location.state.ride === 2) {
      setBookingType('Hourly')
    }
    console.log(formValues)
    // axios.post('https://chauffeur.lagoontechcloud.com:4200/api/booking/sitebooking', {
    //   "pickUpLatitude": "25.087609",
    //   "pickUpLongitude": "55.193316",
    //   "destinyLatitude": "25.198765",
    //   "destinyLongitude": "55.279605",
    //   "countryShortCode": "US"
    // }).then(function (response) {
    //   // setVehicle(response.data.data);
    // }).catch(function (error) {
    //   console.log(error);
    // })

  }


  return (
    <>

      <Container>
        <NavBar />
        <Box container marginTop={3}>
          <Box marginTop={3} container sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',

            '@media screen and (max-width: 678px)': {
              flexDirection: 'column',

            },
          }}>

            <Box component='img' src={location.state.car.iconPassive}
              sx={{
                height: 400,
                objectFit: 'cover',
                width: '50%',
                borderRadius: 3,
                '@media screen and (max-width:678px)': {
                  width: '100%',
                  height: 'auto',
                },
              }}
            >

            </Box>
            <Box component='div' marginLeft={30}
              sx={{
                height: 400,
                width: '50%',
                borderRadius: 3,
                '@media screen and (max-width:678px)': {
                  width: '100%',
                  height: 'auto',
                },
              }}
            >
              <Box component='div'>
                <Typography variant='h4' mt={3} sx={{
                  // fontSize: '13px',
                  // fontWeight: 500,
                  '@media screen and (max-width:678px)': {
                    fontSize: '25px',
                  },
                }}>
                  {location.state.car.name}
                </Typography>
              </Box>


              <Box sx={{
                display: 'flex',
                alignItems: 'center',

                justifyContent: 'space-between',

              }}>

                <Typography variant='h6' sx={{
                  fontWeight: 'bold',
                  color: "primary.black",
                }}>{location.state.car.priceText}</Typography>

              </Box>


              <Typography variant='body1'>
                Number of Toll :
                {location.state.car.nooftoll}
              </Typography>
              <Typography variant='body1'>
                Toll Cost :
                {location.state.car.tollcost}
              </Typography>
              <Typography variant='body1'>
                Tax :
                {location.state.car.tax}
              </Typography>
              <Typography variant='body1'>
                Waiting Charge :
                {location.state.car.waitingCharge}
              </Typography>
              <Typography variant='body1'>
                Capacity :
                {location.state.car.capacity}
              </Typography>
              <Box component='div' marginTop={5}>
                <Button variant='contained' size='medium' disableElevation sx={{
                  color: 'primary.white',
                  fontSize: '16px',
                  fontWeight: '600',
                }} onClick={handleOpen}>
                  BOOK NOW
                </Button>
              </Box>
            </Box>

          </Box>

          <Box component='div' marginBottom={10}>
            <Typography variant='body1' sx={
              {
                textTransform: 'capitalize',
              }
            }>
              {location.state.car.shortDesc}

            </Typography>
            <Typography variant='body1' sx={
              {
                textTransform: 'capitalize',
              }
            }>
              {location.state.car.longDesc}

            </Typography>
          </Box>

        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant='h6'>
              Book Your Car
            </Typography>
            <Stack direction="column" component='form' spacing={2} mt={3} autoComplete='off'>

              <Controls.Input
                name='userName'
                label='Your Name'
                value={formValues.userName}
                onChange={handleInputChange}

              />
              <Controls.Input
                name='userMail'
                label='Email'
                value={formValues.userMail}
                onChange={handleInputChange}
              />
              <Controls.Input
                name='userMobile'
                label='Phone Number'
                value={formValues.userMobile}
                onChange={handleInputChange}
              />

              <Controls.Select
                name="pickUpLocation"
                label="PickUp Location"
                value={formValues.pickUpLocation}
                onChange={handleInputChange}
                options={Cities.Cities()}

              />
              <Controls.Select
                name="dropLocation"
                label="Drop Location"
                value={formValues.dropLocation}
                onChange={handleInputChange}
                options={Cities.Cities()}

              />
              <Controls.Select
                name="paymentMode"
                label="Payment Mode"
                value={formValues.paymentMode.title}
                onChange={handleInputChange}
                options={paymentmethods}

              />

              <Button fullWidth variant='contained' disableElevation sx={{
                color: 'primary.white',
                fontSize: '16px',
                fontWeight: '600',
              }} onClick={bookNow}>
                BOOK NOW
              </Button>

            </Stack>
          </Box>
        </Modal>



      </Container>
      <Subscribe />
      <Footer />
    </>
  )
}

export default VehicleDetails