import React from 'react'
import { Button, Container, Grid,  Typography, Box, TextField, Stack } from '@mui/material'
import { DatePicker,  LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const GetInTouch = () => {
    const [value, setValue] = React.useState(null);
    return (
        <Container>
            <Box sx={{
                marginBottom: '80px',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6}>
                        <Box container sx={{
                            paddingRight: '50px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            flexDirection: 'column'
                        }}>
                            <Box>
                                <Typography variant='h6' color='primary' component='h6'>
                                    BOOKING
                                </Typography>
                            </Box>
                            <Box>

                                <Typography variant='h4' component='h3'
                                    sx={{
                                        color: 'primary.black',
                                        fontWeight: 'bold',

                                    }}
                                >
                                    Lorem Ipsum
                                    Dolor Sit Amet
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box container sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            // padding: '0 40px',
                            width: '100%',                           // paddingY: '60px',

                            borderRadius: '20px',

                        }}>
                            <Box container sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                zIndex: 2,
                                // margin:'30px',
                                boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.12);',
                                paddingY: '50px',
                                paddingX: '30px',
                                backgroundColor: 'primary.white',
                                borderRadius: '10px',
                            }}>
                                <Stack
                                    component="form"

                                    spacing={2}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField


                                        label="Departing From"
                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                    />
                                    <TextField

                                        label="Going To"

                                        variant="outlined"
                                        size="medium"
                                        fullWidth
                                    />
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Travel Date"

                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField size="medium" {...params} />}
                                        />


                                    </LocalizationProvider>
                                    <Button fullWidth variant='contained'
                                        sx={{
                                            color: 'primary.white',
                                        }}
                                    >BOOK NOW</Button>
                                </Stack>

                            </Box>
                            <Box sx={{
                                height: '150px',
                                width: '100%',
                                backgroundColor: 'primary.light',
                                border: 'none',
                                borderRadius: '10px',
                                marginTop: '-100px',



                                '@media screen and (max-width: 678px)': {
                                    display: 'none',
                                },
                            }}>

                            </Box>
                        </Box>


                    </Grid>
                </Grid>

            </Box>
        </Container>
    )
}

export default GetInTouch