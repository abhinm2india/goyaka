import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Banner = () => {
    return (
        <Container maxWidth='lg'>
            <Box
                Container
                // component="div"

                // alt="The house from the offer."
                // src="./images/banner_01.jpg"
                // background="./images/banner_01.jpg"
                // backgroundSize='cover'
                sx={{
                    height: '85vh',
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '25px',
                    // backgroundColor: '#000',
                    opacity: 1,
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: 'url(./images/banner_01.jpg)',
                    backgroundSize: 'cover',
                    paddingLeft: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    fontWeight: 'bold',


                    // background:""

                    //   maxHeight: { xs: 233, md: 167 },
                    //   maxWidth: { xs: 350, md: 250 },
                }}

            >
                <Typography variant='h2' color='primary'
                    sx={{ color: '#fff', fontWeight: 'bold', lineHeight: '4rem' }}>
                    Enjoy Your<br />
                    Dream Vacation
                </Typography>
                <Typography variant='subtitle1'
                    sx={{ color: '#fff' }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet, nibh non bibendum tincidunt, nulla augue vehicula augue
                </Typography>
                <Typography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
                    The time is now for it be okay to be great. People in this world shun people for being
                    nice.
                </Typography>
            </Box>
        </Container>
    )
}

export default Banner