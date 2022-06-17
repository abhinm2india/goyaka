import { Container } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import testi from './testimonial.json'
import TestimonialItem from './TestimonialItem'
import { Box, Typography } from '@mui/material'

const Testimonial = () => {
    return (
        <Container>
            <Box sx={{
                marginBottom: '80px',
                marginTop: '80px',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: 'url(./images/testibg.png)',
                paddingBottom: '40px',
                opacity: '0.8',

            }}>
                <Box container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <Box>
                        <Typography variant='h6' color='primary' component='h6'>
                            TESTIMONIALS
                        </Typography>
                    </Box>
                    <Box sx={{
                        marginBottom: '30px',
                    }}>
                        <Typography variant='h4' component='h3'
                            sx={{
                                color: 'primary.black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            What Our
                            Travellers Says?
                        </Typography>
                    </Box>

                </Box>

                <Carousel>
                    {
                        testi.map((item, i) => <TestimonialItem key={i} item={item} />)
                    }
                </Carousel>
            </Box>

        </Container >
    )
}

export default Testimonial