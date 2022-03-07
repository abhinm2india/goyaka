import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Category = () => {

    return (



        <Grid Grid item xs={4} >
            <Paper elevation={3} sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: 'url(./images/banner_01.jpg),radial-gradient(circle, red, yellow, green)',
                borderRadius: '5px',
                backgroundColor: '#000',
                padding: '20px',
                display:'flex',
                alignItems:'flex-start',
                flexDirection:'column',
                justifyContent:'flex-end',
                flexGrow:1,
                height:'200px',
                width:'300px',
            }}>

               <Typography variant='body1' sx={{
                   color:'primary.white',
               }}>
               Lorem ipsum dummy
               </Typography>
               <Typography variant='body2' sx={{
                   color:'primary.white',
               }}>
               Lorem ipsum dummy
               </Typography>
            </Paper>
        </Grid >


    )
}

export default Category