import { Container, Box, Typography, Grid, } from '@mui/material'
import React from 'react'
import PackageItem from './PackageItem'
import destinations from './touritem.json';

const Packages = () => {
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
                
                    <Box sx={{
                        marginBottom: '30px',
                    }}>
                        <Typography variant='h4' component='h3'
                            sx={{
                                color: 'primary.black',
                                fontWeight: 'bold',

                            }}
                        >
                            Destinations
                        </Typography>
                    </Box>
                  
                </Box>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                    paddingTop:'40px',
                }}>

                    {destinations.map((tours) => (

                        <PackageItem tour={tours} />

                    ))}
                </Grid>
             
            </Container>

        </Box>
    )
}

export default Packages