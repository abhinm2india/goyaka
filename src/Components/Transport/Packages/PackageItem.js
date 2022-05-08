import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { useNavigate } from 'react-router-dom';


const PackageItem = ({ car, ride, rideType, searchdata}) => {
    console.log('from package item')
    console.log(searchdata);

    const [pickName, setPickName] = useState(searchdata.pickName);
    const [dropName, setDropName] = useState(searchdata.dropName);
    const bdate = searchdata.ridedate;
    const btime = searchdata.ridetime;
    const plat = searchdata.loc[0];
    const plog = searchdata.loc[1];
    const dlat = searchdata.loc[2];
    const dlog = searchdata.loc[3];

    const packageName = searchdata.ridepackage;

    let navigate = useNavigate();

    return (
        <Grid item xs={4} md={3}>
            <Card sx={{ maxWidth: 345 }}
                onClick={() => { navigate("/booking", { state: { car, ride, rideType, pickName, dropName, packageName, bdate, plat, plog, dlat, dlog, } }); }}>
                <CardActionArea sx={{
                    height:{xs:'auto',md:'350px'}
                }}>
                    <CardMedia
                        component="img"
                        height="180"
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
                            Book Now
                        </Button>

                    </CardActions>
                </CardActionArea>

            </Card>
        </Grid>
    )
}

export default PackageItem