import { Card, CardActionArea, CardActions, CardContent, IconButton, CardMedia, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { useNavigate } from 'react-router-dom';
import { height } from '@mui/system';

const Tour = ({ tour }) => {

let navigate = useNavigate();

    console.log(tour);
   
    const dataId = tour.id;
    return (
        <Grid item xs={4} md={3}>
            <Card sx={{ maxWidth: 345,
           
        }} 
           
           onClick={() => { navigate("/tour-details", { state: {dataId} }); }}
            >
                <CardActionArea sx={{
                    height:{xs:'auto' ,md:'300px'},
                }}>
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