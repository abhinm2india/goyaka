
import { Container, Box, Grid, Typography, useTheme, Stack, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    let navigate = useNavigate();

    const { breakpoints } = useTheme();

    return (
        <Container>
            <Box

                display='flex'
                alignItems="center"
                minHeight="80vh"

                sx={{
                    // backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `${linearGradient(rgba(gradients.dark.main, 0.5), rgba(gradients.dark.state, 0.5))}, url(./images/banner_01.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: 'url(./images/banner_01.jpg),radial-gradient(circle, red, yellow, green)',
                    borderRadius: '20px',
                    backgroundColor: '#000',

                }}
            >
                <Container>
                    <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
                        <Typography
                            variant="h2"
                            color="white"
                            mb={3}
                            fontWeight='bold'
                        >
                            Life is all about adventures!
                        </Typography>
                        <Typography variant="h6" color="white" opacity={1} pr={6} mr={6}>
                        Book your dream ride here
                        </Typography>
                        {/* <Stack direction="row" spacing={1} mt={3}>
                            <Button
                                variant='contained'
                                size='large'
                                onClick={()=>{navigate("/tour");}}
                                sx={{
                                    color: '#fff',
                                    borderRadius: '10px'
                                }}>
                                More Packages
                            </Button>
                        </Stack> */}
                    </Grid>
                </Container>
            </Box>
        </Container>

    )
}

export default Hero