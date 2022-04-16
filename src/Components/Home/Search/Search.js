
import { Button, Container, Grid, TextField, Box, Tab, FormControl, InputLabel, Select, MenuItem, Skeleton } from '@mui/material'

import React, { FC, RefObject, useRef, useState } from 'react'
import { DatePicker, LocalizationProvider, TimePicker, TabContext, TabList, TabPanel } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import { GpsFixed } from '@mui/icons-material'
// import Autocomplete, { usePlacesWidget } from "react-google-autocomplete";

import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { useNavigate } from 'react-router-dom';

const Search = (props) => {




    const API_KEY = process.env.REACT_APP_API_KEY;
    // console.log(API_KEY);
    // const [name, setName] = React.useState('Composed TextField');
    // const [value, setValue] = React.useState(null);
    // const handleChange = (event) => {
    //     setName(event.target.value);
    // };
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const [ridedate, setRideDate] = React.useState(new Date());

    const [ridetime, setRideTime] = useState(null);

    const [ridepackage, setRidepackage] = useState('');

    const handleChangedrop = (event) => {
        setRidepackage(event.target.value);
        // console.log(event.target)
    };

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: API_KEY,
        libraries: ['places'],
        region:"ae",
    })

    const [pickup, setPickup] = useState();
    const [drop, setDrop] = useState();

    const [pickupLat, setPickupLat] = useState();
    const [pickupLng, setPickupLng] = useState();
    const [dropLat, setDropLat] = useState();
    const [dropLng, setDropLng] = useState();

    const [pickName,setPickName]=useState();
    const [dropName,setDropName]=useState();

    const [pickautocomplete, setPickAutocomplete] = useState(null);
    const [dropautocomplete, setDropAutocomplete] = useState(null);

    function pickOnLoad(pickautocomplete) {
        // console.log(pickautocomplete);

        setPickAutocomplete(pickautocomplete);
    };
    function dropOnLoad(dropautocomplete) {
        // console.log('autocomplete: ', autocomplete);

        setDropAutocomplete(dropautocomplete);
    };

    const getPickupCordinates = () => {
        const pickplace = pickautocomplete.getPlace();
        // console.log(pickautocomplete.getPlace().name);
        
        setPickName(pickautocomplete.getPlace().name)
        // console.log(pickplace.geometry.location.lat().lat.toFixed(6));
        const ptl = pickplace.geometry.location.lat()
        const ptls = ptl.toFixed(6)
        setPickupLat(ptls)

        const ptlo = pickplace.geometry.location.lng()
        const ptlos = ptlo.toFixed(6)
        setPickupLng(ptlos)

        setPickup(pickplace)
    }

    const getDropCordinates = () => {
        const dropplace = dropautocomplete.getPlace();
        // console.log(dropplace.geometry.location.lng());
        // console.log(typeof(place));
        setDropName(dropautocomplete.getPlace().name)

        const dtl = dropplace.geometry.location.lat()
        const dtls = dtl.toFixed(6)
        setDropLat(dtls)

        const dtlo = dropplace.geometry.location.lng()
        const dtlos = dtlo.toFixed(6)
        setDropLng(dtlos)

        setDrop(dropplace)
    }
    // console.log(pickup);
    // console.log(drop)
    // onClick={() => { navigate("/vehicle-details",{state:{car,ride,rideType}}); }}
    const loc = [pickupLat, pickupLng, dropLat, dropLng];
    let navigate = useNavigate();
    const toTransport = (event) => {
        // event.preventDefault();
        navigate('/transport', { state: {loc, ridedate, ridetime, ridepackage, ridetype: parseInt(value),pickName,dropName } });
    }


    if (!isLoaded) {
        return <Skeleton />
    }



    return (

        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: '60px !important',
            paddingRight: '60px !important'
        }}>

            <Box sx={{
                width: '100%',
                typography: 'body1',
                bgcolor: '#fff',
                borderRadius: '10px',
                boxShadow: '0px 6px 29px -4px rgba(0, 0, 0, 0.17)',
            }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Ride" value="1" />
                            <Tab label="Hourly" value="2" />

                        </TabList>
                    </Box>
                    <TabPanel value="1">

                        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={3}>
                                <Autocomplete onLoad={pickOnLoad} onPlaceChanged={getPickupCordinates}>
                                    <TextField size='small'
                                        label="Pick me at"

                                        // inputRef={pickRef}
                                        id="picktext"
                                        // defaultValue="Small"
                                        size="small"
                                        sx={{
                                            border: '5px solid primary',
                                        }}
                                    />
                                </Autocomplete>


                            </Grid>
                            <Grid item xs={3}>
                                <Autocomplete onLoad={dropOnLoad} onPlaceChanged={getDropCordinates}>
                                    <TextField size='small'
                                        label="Drop me at"

                                        // inputRef={dropRef}
                                        id="droptext"

                                        // defaultValue="Small"
                                        size="small"
                                        sx={{
                                            border: '5px solid primary',
                                        }}
                                    />
                                </Autocomplete>


                            </Grid>
                            <Grid item xs={2}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        views={['day']}
                                        label="Travel Date"
                                        value={ridedate}
                                        onChange={(newDate) => {
                                            setRideDate(newDate);
                                        }}
                                        renderInput={(params) => <TextField {...params} size='small' helperText={null} />}
                                    />


                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={2}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        label="Travel Time"
                                        value={ridetime}
                                        onChange={(newTime) => {
                                            setRideTime(newTime);
                                        }}
                                        renderInput={(params) => <TextField {...params} size='small' />}
                                    />


                                </LocalizationProvider>
                            </Grid>
                            {/* onClick={() => { navigate("/transport", { state: { pickup, drop, ridedate, ridetime } }); }} */}
                            <Grid item xs={2}>
                                <Button
                                    onClick={toTransport}
                                    variant='contained'
                                    sx={{
                                        color: '#fff',
                                    }}

                                >
                                    Search Car
                                </Button>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2">
                        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={3}>
                                <Autocomplete onLoad={pickOnLoad} onPlaceChanged={getPickupCordinates}>
                                    <TextField size='small'
                                        label="Pick me at"

                                        // inputRef={pickRef}
                                        id="picktext"
                                        // defaultValue="Small"
                                        size="small"
                                        sx={{
                                            border: '5px solid primary',
                                        }}
                                    />
                                </Autocomplete>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl fullWidth size='small'>
                                    <InputLabel id="demo-simple-select-label" >Package</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={ridepackage}
                                        label="Package"
                                        onChange={handleChangedrop}
                                        displayEmpty
                                    >
                                        <MenuItem value={'Dubai 5hrs City Tour'}>Dubai 5hrs City Tour</MenuItem>
                                        <MenuItem value={'Dubai 10hrs City Tour'}>Dubai 10hrs City Tour</MenuItem>
                                        <MenuItem value={'Abu Dhabi 10hrs City Tour'}>Abu Dhabi 10hrs City Tour</MenuItem>
                                        <MenuItem value={'Fujairah 10hrs City Tour'}>Fujairah 10hrs City Tour</MenuItem>
                                        <MenuItem value={'Al Ain 10hrs City Tour'}>Al Ain 10hrs City Tour</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        views={['day']}
                                        label="Travel Date"
                                        value={ridedate}
                                        onChange={(newDate) => {
                                            setRideDate(newDate);
                                        }}
                                        renderInput={(params) => <TextField {...params} size='small' helperText={null} />}
                                    />


                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={2}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        label="Travel Time"
                                        value={ridetime}
                                        onChange={(newTime) => {
                                            setRideTime(newTime);
                                        }}
                                        renderInput={(params) => <TextField {...params} size='small' />}
                                    />


                                </LocalizationProvider>
                            </Grid>

                            <Grid item xs={2} >
                                <Button
                                    onClick={toTransport}
                                    variant='contained'
                                    sx={{
                                        color: '#fff',
                                    }}

                                >
                                    Search Car
                                </Button>
                            </Grid>
                        </Grid>
                    </TabPanel>

                </TabContext>
            </Box>
        </Container>
    )
}

export default Search