import { Card, CardActionArea, CardActions, CardContent, IconButton, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { useNavigate } from 'react-router-dom';

const Tour = ({ tour }) => {

    let navigate = useNavigate();

    console.log(tour);

    const dataId = tour.id;
    return (
        <Grid item xs={4} md={3}>
            <Card sx={{
                maxWidth: 345,
                height: { xs: 'auto', md: '300px' },
            }}

                onClick={() => { navigate("/tour-details", { state: { dataId } }); }}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height='140'
                        image={tour.image}
                        alt={tour.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1">
                            {tour.name}
                        </Typography>
                        {/* <Rating name="half-rating-read" defaultValue={tour.rating} precision={0.5} readOnly /> */}

                    </CardContent>
                    <CardActions disableSpacing>

                        <IconButton aria-label="add to favorites" disabled>
                            <PaidOutlinedIcon color="primary" fontSize='small' />
                            <Typography color="primary" variant='caption'>${tour.price}/Package</Typography>
                        </IconButton>


                    </CardActions>
                </CardActionArea>

            </Card>
        </Grid>
    )
}

export default Tour