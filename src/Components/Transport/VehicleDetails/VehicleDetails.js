import {
  Container, Box, Typography,
  Rating, Paper,

  Button, FormControl, InputLabel, Select, MenuItem, TextField, Stack
} from '@mui/material'
import { useLocation } from 'react-router-dom';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React, { useState, useEffect } from 'react'
import CusReview from '../../SinglePackage/Review/CusReview';
import TourImages from '../../SinglePackage/TourImages/TourImages';
import { Modal } from '@mui/material';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import Subscribe from '../../Subscribe/Subscribe';

const VehicleDetails = (props) => {

  const location = useLocation();
  // console.log(location.state.car.name);


  const [carDetails, setCarDetails] = useState();

  // setCarDetails(location.state.car)

  // console.log(location.state.car);


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(0);
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  return (
    <>

      <Container>
        <NavBar />
        <Box container marginTop={2}>
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
                {location.state.car.shortDesc}

              </Typography>

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
                <Button fullWidth variant='contained' size='medium' disableElevation sx={{
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
                textTransform:'capitalize',
              }
            }>
              {location.state.car.shortDesc}
           
            </Typography>
            <Typography variant='body1' sx={
              {
                textTransform:'capitalize',
              }
            }>
              {location.state.car.longDesc}
           
            </Typography>
          </Box>


          {/* <Paper sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '10vh',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '10px',
          '@media screen and (max-width:678px)': {

            height: 'auto',
          },

        }} elevation={3}>
          <Container>
            <Box container sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              // '@media screen and (max-width:678px)': {
              //     flexDirection: 'column',
              // },
            }}>

              <Box container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}>
                <Typography variant='h6'>{location.state.car.priceText}</Typography>
                <Rating value={3.5} precision={0.5} readOnly />
              </Box>

              <Stack direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }} mt={3}>

                <Button fullWidth variant='contained' size='large' disableElevation sx={{
                  color: 'primary.white',
                  fontSize: '16px',
                  fontWeight: '600',
                }} onClick={handleOpen}>
                  BOOK NOW
                </Button>
              </Stack>




            </Box>
          </Container>


        </Paper> */}


        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>

            <Stack direction="column" spacing={3} mt={3}>
              <TextField fullWidth id="outlined-basic" color="primary" focused label="Your Name" variant="outlined" />
              <TextField fullWidth id="outlined-basic" color="primary" focused label="Email" variant="outlined" />
              <TextField fullWidth id="outlined-basic" color="primary" focused label="Phone Number" variant="outlined" />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Number Of Adult</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Number Of Adult"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Number Of Children</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Number Of Children"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
              <TextField fullWidth id="outlined-basic" color="primary" focused label="Your Name" variant="outlined" />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Travel Date"

                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField color="primary" focused fullWidth {...params} />}
                />


              </LocalizationProvider>
              <Button fullWidth variant='contained' disableElevation sx={{
                color: 'primary.white',
                fontSize: '16px',
                fontWeight: '600',
              }} onClick={handleOpen}>
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