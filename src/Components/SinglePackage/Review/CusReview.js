import { Typography, Box, Grid } from '@mui/material'
import React from 'react'
import review from './review.json';
import ReviewItem from './ReviewItem';

const CusReview = () => {
    return (
        <>
            <Box Container>
                <Typography variant='h5'>
                    Reviews
                </Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                    paddingTop:'20px',
                }}>

                    {review.map((cusreviews) => (

                        <ReviewItem cusreviews={cusreviews} />

                    ))}
                </Grid>
        </>


    )
}

export default CusReview