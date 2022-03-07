import {
    Container, Box, Typography,
    Rating, Paper,
    BottomNavigation,
    BottomNavigationAction,
    Button, FormControl, InputLabel, Select, MenuItem, TextField, Stack
} from '@mui/material'
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import React from 'react'
import CusReview from '../Review/CusReview'
import TourImages from '../TourImages/TourImages'
import { Modal } from '@mui/material';

const SingleTour = () => {
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
        <Container>
            <Box container marginTop={2}>
            <Box marginTop={3} container sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',

                    '@media screen and (max-width: 678px)': {
                        flexDirection: 'column',

                    },
                }}>
                    <Box component='img' src='./images/tour_002.jpg'
                        sx={{
                            height: 400,
                            borderRadius: 3,
                            '@media screen and (max-width:678px)': {
                                width: '100%',
                                height: 'auto',
                            },
                        }}
                    >

                    </Box>
                    <TourImages />
                </Box>
                <Typography variant='h4' mt={3} sx={{
                    // fontSize: '13px',
                    // fontWeight: 500,
                    '@media screen and (max-width:678px)': {
                        fontSize: '25px',
                    },
                }}>
                    Tour package name
                </Typography>
                <Box container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '15px',
                    justifyContent: 'space-between',
                    '@media screen and (max-width:678px)': {
                        flexDirection: 'column',
                    },
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',

                        justifyContent: 'space-between',
                        
                    }}>
                        <Rating value={4.5} precision={0.5} readOnly />
                        <Typography variant='body1' color={'primary'} marginLeft={4}>Dubai, Lorem iposum</Typography>
                    </Box>
                    <Box>
                        <Typography variant='h6' sx={{
                            fontWeight: 'bold',
                            color: "primary.black",
                        }}>$ 500 / Package</Typography>
                    </Box>

                </Box>

              

                <Box container sx={{
                    marginY: '30px',
                }}>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum sem odio, iaculis laoreet efficitur sed, sodales quis tellus.
                        Ut malesuada elementum nisi non tempor.
                        Integer accumsan dui sit amet magna vestibulum sagittis.
                        In hac habitasse platea dictumst. Cras at venenatis metus,
                        vel consectetur urna. Aliquam in odio augue.
                        Vivamus dapibus neque vel justo viverra, at imperdiet nunc luctus.
                        Nunc magna velit, eleifend ut velit sit amet, congue molestie urna.
                        Praesent vulputate sed magna vitae lobortis.

                    </Typography>
                </Box>
                <Box container sx={{
                    marginBottom: '70px',
                    borderTop: '1px solid #c1c1c1',
                    borderBottom: '1px solid #c1c1c1',
                    paddingY: '20px',
                }}>

                    <CusReview />
                </Box>


                <Paper sx={{
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
                                <Typography variant='h6'>$ 600/Package</Typography>
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


                </Paper>


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
    )
}

export default SingleTour