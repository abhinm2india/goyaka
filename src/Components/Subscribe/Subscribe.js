import { Container, Box, Typography, TextField, Button } from '@mui/material'
import React from 'react'

const Subscribe = () => {
    return (
        <Container>
            <Box Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'primary.main',
                height: '50vh',
                paddingY: '50px',
                borderRadius: '20px',
                marginBottom: '80px',
            }}>
                <Box container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Box sx={{
                        marginBottom: '30px',
                        width: '400px',
                    }}>
                        <Typography variant='h4' component='h3'
                            sx={{
                                color: 'primary.black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: 'primary.white',
                            }}
                        >
                            Subscribe &
                            Get Special Discount
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: '700px',

                        '@media screen and (max-width: 678px)': {
                            width: '90%',
                        },
                    }}>
                        <Typography variant='body1' align='center' sx={{
                            color: 'primary.white',
                        }} >
                           Write to us your requirements and we will get back to you in no time.
                        </Typography>
                    </Box>
                    <Box container sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: 'primary.white',
                        paddingX: '20px',
                        paddingY: '5px',
                        borderRadius: '10px',
                        marginTop:'20px',
                        boxShadow: '0px 12px 39px rgba(0, 0, 0, 0.25)',

                        '@media screen and (max-width: 678px)': {
                           flexDirection:'column',
                           paddingY:'10px',
                        },
                    }}>
                        <TextField size='small' variant='standard' label='Enter Your Email Address' sx={{
                        }} InputProps={{
                            disableUnderline: true,
                        }} />
                        <Button variant='contained' sx={{
                            color: 'primary.white',
                        }}>SUBSCRIBE</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Subscribe