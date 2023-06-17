import React from 'react'
import { Box, Stack, Typography, Button, IconButton } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'
import { Padding } from '@mui/icons-material'


function HeroBanner() {
    return (
        <Box sx={{
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px' }
        }} position={'relative'} p={'20px'}>
            <Typography
                color={'#ff2625'}
                fontWeight={'600'}
                fontSize={'26px'}
            >
                Fitness Club
            </Typography>
            <Typography
                fontWeight={'700'}
                mb={'23px'} mt={'30px'}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
            >
                Sweat,Smile  <br /> And Repeat
            </Typography>
            <Typography
                fontSize={'25px'}
                lineHeight={'35px'}
                mb={'60px'}
                mt={'60px'}>
                Check out the most effective exercises
            </Typography>
            <Button
                variant="contained"
                color="error"
                href='#exercises'
                sx={{
                    backgroundColor: '#ff2625',
                    Padding: '10px'
                }}

            >Explore Exercises</Button>
            <Typography
                fontWeight={'600'}
                color={'#ff2625'}
                fontSize={'200px'}
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner
