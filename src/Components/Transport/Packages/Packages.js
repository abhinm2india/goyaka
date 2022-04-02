import { Container, Box, Typography, Grid, } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PackageItem from './PackageItem'
import destinations from './touritem.json';
import axios from 'axios';

const Packages = () => {

    const [vehicle, setVehicle] = useState([]);

    useEffect(() => {

        axios.post('https://chauffeur.lagoontechcloud.com:4200/api/booking/rideTypeforSite', {
            "pickUpLatitude": "25.087609",
            "pickUpLongitude": "55.193316",
            "destinyLatitude": "25.198765",
            "destinyLongitude": "55.279605",
            "countryShortCode": "US"
        })
            .then(function (response) {
                console.log(response.data.data);
              setVehicle(response.data.data);
              
            })
            .catch(function (error) {
                console.log(error);
            });


    }, []);



    return (
        <Box container sx={{
            paddingY: '80px',
            backgroundColor: '#F8F8F8',
        }}>
            <Container>
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
                    paddingTop: '40px',
                }}>

                    {vehicle.map((data) => (

                        <PackageItem car={data} />

                    ))}
                </Grid>

            </Container>

        </Box>
    )
}

export default Packages