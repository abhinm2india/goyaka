import { Box, Rating, Typography } from '@mui/material'
import React from 'react'

const TestimonialItem = ({ item }) => {
    return (
        <Box container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingY:'30px',
            
        }}>
            <Box component='img' src={item.photo}
                sx={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '100%',
                    marginBottom: '40px',
                }}
            ></Box>
            <Box container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginBottom: '30px',
            }}>
                <Typography variant='h6' color='primary'>{item.name}</Typography>
                <Rating value={item.rating} precision={0.5} readOnly />
                <Typography variant='body2' sx={{
                    textAlign: 'center',
                }}>{item.message}</Typography>
            </Box>

        </Box>
    )
}

export default TestimonialItem