import { StayPrimaryLandscape } from '@material-ui/icons';
import { Button, Container, FormControl, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const Search = () => {

    const [name, setName] = React.useState('Composed TextField');
    const [value, setValue] = React.useState(null);
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
           paddingLeft:'60px !important',
           paddingRight:'60px !important'
        }}>
            <Box component='form'

                sx={{
                    width: '100%',
                    height: 'auto',
                    backgroundColor: 'primary.white',
                    borderRadius: '10px',
                    // marginTop: '-60px',
                    boxShadow: '0px 6px 29px -4px rgba(0, 0, 0, 0.17)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '30px 30px',
                    flexGrow: 1,
                    // '&:hover': {
                    //     backgroundColor: 'primary.main',
                    //     opacity: [0.9, 0.8, 0.7],
                    // },
                }}>
                <Grid container spacing={{ xs: 1, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="space-around"
                    alignItems="center">
                    <Grid item xs={3}>
                        <TextField
                            label="Departing From"
                            id="outlined-size-small"
                            // defaultValue="Small"
                            size="small"
                            sx={{
                                border: '5px solid primary',
                            }}
                        />
                    </Grid>
                  
                    <Grid item xs={3}>
                        <TextField
                            label="Going To"
                            id="outlined-size-small"
                            // defaultValue="Small"
                            size="small"

                        />
                    </Grid>
                    <Grid item xs={4}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Travel Date"

                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField size='small' {...params} />}
                            />


                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={2} >
                        <Button
                            variant='contained'
                            sx={{
                                color: '#fff',
                            }}
                        >
                            Book Now
                        </Button>
                    </Grid>
                </Grid>

            </Box>




        </Container>
    )
}

export default Search