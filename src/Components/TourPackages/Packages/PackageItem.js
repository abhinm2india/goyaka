import { Card, CardActionArea, CardActions, CardContent, IconButton, CardMedia, Grid, Rating, Typography, Box } from '@mui/material'
import React from 'react'
import { } from '@mui/icons-material'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useNavigate } from 'react-router-dom';


const PackageItem = ({ tour }) => {

    let navigate = useNavigate();

    return (
        <Grid item xs={4} md={3}>
            <Card sx={{ maxWidth: 345 }} onClick={() => { navigate("/tour-details"); }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={tour.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1">
                            {tour.name}
                        </Typography>
                        <Rating name="half-rating-read" defaultValue={tour.rating} precision={0.5} readOnly />
                        <Typography variant="body2" color="text.secondary">
                            {tour.description}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites" disabled >
                            <FmdGoodOutlinedIcon color="primary" fontSize='small' />
                            <Typography color="primary" variant='caption'>{tour.location}</Typography>
                        </IconButton>

                        <IconButton aria-label="add to favorites" disabled>
                            <FmdGoodOutlinedIcon color="primary" fontSize='small' />
                            <Typography color="primary" variant='caption'>${tour.price}/Package</Typography>
                        </IconButton>


                    </CardActions>
                </CardActionArea>

            </Card>
        </Grid>
    )
}

export default PackageItem