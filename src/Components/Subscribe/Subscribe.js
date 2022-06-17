import { Container, Box, Typography, TextField, Button, Stack } from '@mui/material'
import React from 'react'

const Subscribe = () => {
    return (
        <Container>
            <Stack direction='column' alignItems='center' spacing={2} sx={{
                paddingX: '10px',
                paddingY: '80px',
                backgroundColor: 'primary.main',
                borderRadius: '10px'
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

                <Typography variant='body1' align='center' sx={{
                        color: 'primary.white',
                    }} >
                        Write to us your requirements and we will get back to you in no time.
                    </Typography>


                <Box container sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'primary.white',
                    paddingX: '20px',
                    paddingY: '5px',
                    borderRadius: '10px',
                    marginTop: '20px',
                    boxShadow: '0px 12px 39px rgba(0, 0, 0, 0.25)',
                    width:450,

                    '@media screen and (max-width: 678px)': {
                        flexDirection: 'column',
                        paddingY: '10px',
                        width:280,
                    },
                }}>
                    <TextField size='small' variant='standard' label='Enter Your Email Address' sx={{
                    }} InputProps={{
                        disableUnderline: true,
                    }} />
                    <Button variant='contained' sx={{
                        color: 'primary.white',
                        paddingX:'30px',
                    }}>SUBSCRIBE</Button>
                </Box>
            </Stack>

        </Container>
    )
}

export default Subscribe