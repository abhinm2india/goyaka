import { Box, Container, Skeleton, Stack, Grid } from '@mui/material'
import React from 'react'

const SkeltonLoading = () => {


    return (
        <Container>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{}}>
                <Grid item xs={4} md={3}>
                    <Stack>
                        <Skeleton
                            variant='rectangle'
                            animation='wave'
                            // width={200}
                            height={200}
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </Stack>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Stack>
                        <Skeleton
                            variant='rectangle'
                            animation='wave'
                            // width={200}
                            height={200}
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </Stack>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Stack>
                        <Skeleton
                            variant='rectangle'
                            animation='wave'
                            // width={200}
                            height={200}
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </Stack>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Stack>
                        <Skeleton
                            variant='rectangle'
                            animation='wave'
                            // width={200}
                            height={200}
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </Stack>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Stack>
                        <Skeleton
                            variant='rectangle'
                            animation='wave'
                            // width={200}
                            height={200}
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </Stack>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Stack>
                        <Skeleton
                            variant='rectangle'
                            animation='wave'
                            // width={200}
                            height={200}
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </Stack>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Stack>
                        <Skeleton
                            variant='rectangle'
                            animation='wave'
                            // width={200}
                            height={200}
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </Stack>
                </Grid>
                <Grid item xs={4} md={3}>
                    <Stack>
                        <Skeleton
                            variant='rectangle'
                            animation='wave'
                            // width={200}
                            height={200}
                        />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                    </Stack>
                </Grid>
            </Grid>


        </Container>
    )
}

export default SkeltonLoading