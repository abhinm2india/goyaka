import { Container, Box, Typography, Grid, MenuItem, FormControl, InputLabel, Select, Skeleton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PackageItem from './PackageItem'
// import destinations from './touritem.json';
import axios from 'axios';
import SkeltonLoading from './SkeltonLoading';

const Packages = ({ searchData }) => {

    const [isLoading, SetIsLoading] = useState(false);

    console.log("data from transport");
    console.log(searchData);
    const [vehicle, setVehicle] = useState([]);
    const [rideType, setRideType] = useState(searchData.ridetype);
    const [bookingType, setBookingType] = useState('');

    // const handleChange = (event) => {
    //     if (event.target.value === 1) {
    //         setBookingType('Route')
    //         setRideType(1)
    //       }
    //       if (event.target.value === 2) {
    //         setBookingType('Hourly')
    //         setRideType(2)
    //       }
    //     // setRideType(event.target.value);

    // };

    useEffect(() => {
        if (rideType === 1) {
            setBookingType('Route')
            axios.post('https://chauffeur.lagoontechcloud.com:4200/api/booking/rideTypeforSiteGK', {
                "pickUpLatitude": searchData.loc[0],
                "pickUpLongitude": searchData.loc[1],
                "destinyLatitude": searchData.loc[2],
                "destinyLongitude": searchData.loc[3],
                "countryShortCode": "AE"
            }).then(function (response) {
                console.log(response);
                setVehicle(response.data.data);
                SetIsLoading(true)
            }).catch(function (error) {
                console.log(error);
            })

        } else if (rideType === 2) {
            setBookingType('Hourly')
            axios.post('https://chauffeur.lagoontechcloud.com:4200/api/booking/rideTypeforSiteHourlyGK', {
                "pickUpLatitude": searchData.loc[0],
                "pickUpLongitude": searchData.loc[1],
                "Numberofhours": searchData.ridepackage
            }).then(function (response) {
                setVehicle(response.data.data)
                SetIsLoading(true)
            }).catch(function (error) {
                console.log(error);
            })
        }
        else {
            setRideType(1);
            axios.post('https://chauffeur.lagoontechcloud.com:4200/api/booking/rideTypeforSiteGK', {
                "pickUpLatitude": searchData.loc[0],
                "pickUpLongitude": searchData.loc[1],
                "destinyLatitude": searchData.loc[2],
                "destinyLongitude": searchData.loc[3],
                "countryShortCode": "AE"
            }).then(function (response) {
                console.log(response.data);
                setVehicle(response.data.data)
                SetIsLoading(true)
            }).catch(function (error) {
                console.log(error);
            })
        }

    }, [rideType]);



    return (



        <Box container sx={{
            paddingY: '80px',
            backgroundColor: '#F8F8F8',
        }}>
            <Container>

                {/* <Box sx={{ maxWidth: 500 }}>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                        <InputLabel id="demo-simple-select-helper-label">Ride Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={rideType}
                            label="Ride Type"
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Route</MenuItem>
                            <MenuItem value={2}>Hourly</MenuItem>

                        </Select>
                     
                    </FormControl>
                </Box> */}

                <Box container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>

                    {/* <Box sx={{
                        marginBottom: '30px',
                    }}>
                        <Typography variant='h4' component='h3'
                            sx={{
                                color: 'primary.black',
                                fontWeight: 'bold',

                            }}
                        >
                        Cars
                        </Typography>
                    </Box> */}

                </Box>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{

                }}>
                    {isLoading ? (

                        vehicle.map((data) => (

                            <PackageItem car={data} ride={bookingType} rideType={rideType} searchdata={searchData} />

                        ))


                    ) :
                        <SkeltonLoading/>
                    }

                </Grid>

            </Container>

        </Box>
    )
}

export default Packages