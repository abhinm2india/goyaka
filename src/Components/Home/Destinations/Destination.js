import { Container, Box, Typography, Grid, Button } from '@mui/material'
import React from 'react'
import Tour from './Tour'
import destinations from './data.json';
import { useNavigate } from 'react-router-dom';

const Destination = () => {

    let navigate = useNavigate();

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
                    <Box>
                        <Typography variant='h6' color='primary' component='h6'>
                            TOP DESTINATIONS
                        </Typography>
                    </Box>
                    <Box sx={{
                        marginBottom: '30px',
                    }}>
                        <Typography variant='h4' component='h3'
                            sx={{
                                color: 'primary.black',
                                fontWeight: 'bold',

                            }}
                        >
                            Top Destinations For You
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='body1' align='center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue.
                        </Typography>
                    </Box>
                </Box>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                    paddingTop:'40px',
                }}>

                    {destinations.map((tours) => (

                        <Tour tour={tours} />

                    ))}
                </Grid>
                <Box container sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    paddingTop:'40px',
                }}>
                    <Button variant='contained' onClick={()=>{navigate("/tour");}} color='primary' sx={{
                        color:'primary.white',
                    }}>View All Destinations</Button>
                </Box>
            </Container>

        </Box>
    )
}

export default Destination