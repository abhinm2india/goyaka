import { Card, CardActionArea, CardActions, CardContent, IconButton, CardMedia, Grid, Button, Typography } from '@mui/material'
import React from 'react'

import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useNavigate } from 'react-router-dom';


const PackageItem = ({ car }) => {

    let navigate = useNavigate();

    return (
        <Grid item xs={4} md={3}>
            <Card sx={{ maxWidth: 345 }} onClick={() => { navigate("/vehicle-details"); }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={car.iconPassive}
                        alt="green iguana"
                        sx={{
                            objectFit: 'cover'
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="body1">
                            {car.name}
                        </Typography>
                        {/* <Rating name="half-rating-read" defaultValue={car.priceValue} precision={0.5} readOnly /> */}
                        <Typography variant="body2" color="text.secondary">
                            Price :  {car.priceText}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      
                        <Button fullWidth variant='contained' size='small' disableElevation sx={{
                            color: 'primary.white',
                            fontSize: '13px',
                            fontWeight: '600',
                        }} >
                            View Details
                        </Button>

                    </CardActions>
                </CardActionArea>

            </Card>
        </Grid>
    )
}

export default PackageItem