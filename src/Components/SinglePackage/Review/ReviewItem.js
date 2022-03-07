import React from 'react'
import { Grid, Typography, Box, Rating } from '@mui/material'
const ReviewItem = ({ cusreviews }) => {
    return (
        <>
            <Grid item xs={12} md={6}>
                <Box container>
                    <Typography variant='body1'>
                        {cusreviews.name}
                    </Typography>
                    <Typography variant='body2' color={"#717171"}>
                        {cusreviews.date}
                    </Typography>
                    <Rating value={cusreviews.rating} precision={0.5} readOnly />
                    <Typography variant='body2'>
                        {cusreviews.description}
                    </Typography>
                
                </Box>
            </Grid>
        </>
    )
}

export default ReviewItem