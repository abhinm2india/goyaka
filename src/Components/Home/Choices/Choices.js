import { Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


const Choices = () => {
    return (
        <Container>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingY: '80px',
            }}>
                <Box>
                    <Typography variant='h6' color='primary' component='h6'>
                        CATEGORIES
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
                        Entire City of Choice
                    </Typography>
                </Box>
                <Box sx={{
                    zIndex: 2,
                }}>

                    <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4}>
                            <Paper elevation={1} sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: 'url(./images/goyaka_dubail_01.jpg),radial-gradient(circle, red, yellow, green)',
                                borderRadius: '15px',
                                backgroundColor: '#000',
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                // flexGrow: 1,
                                height: '350px',
                                width: '300px',
                            }}>

                                <Typography variant='h6' sx={{
                                    color: 'primary.white',
                                }}>
                                    Dubai Museum
                                </Typography>
                             
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={1} sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: 'url(./images/goyaka_dubail_03.jpg),radial-gradient(circle, red, yellow, green)',
                                borderRadius: '15px',
                                backgroundColor: '#000',
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                // flexGrow: 1,
                                height: '350px',
                                width: '300px',
                            }}>

                                <Typography variant='h6' sx={{
                                    color: 'primary.white',
                                }}>
                                    Burj Khalifa
                                </Typography>
                            
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={1} sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: 'url(./images/goyaka_dubail_02.jpg),radial-gradient(circle, red, yellow, green)',
                                borderRadius: '15px',
                                backgroundColor: '#000',
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'flex-start',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                // flexGrow: 1,
                                height: '350px',
                                width: '300px',
                            }}>

                                <Typography variant='h6' sx={{
                                    color: 'primary.white',
                                }}>
                                   Desert Safari
                                </Typography>
                             
                            </Paper>
                        </Grid>
                    </Grid>




                </Box>
                <Box sx={{
                    height: '200px',
                    width: '100%',
                    backgroundColor: 'rgb(166 0 0 / 11%)',
                    border: 'none',
                    borderRadius: '10px',
                    marginTop: '-100px',
                    '@media screen and (max-width: 678px)': {
                        display: 'none',
                    },
                }}>

                </Box>
            </Box>

        </Container >
    )
}

export default Choices