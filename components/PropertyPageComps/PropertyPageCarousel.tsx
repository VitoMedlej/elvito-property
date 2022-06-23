import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Swiper, SwiperSlide} from "swiper/react";
import CameraswitchOutlinedIcon from '@mui/icons-material/CameraswitchOutlined';
import {Box, Typography, IconButton} from '@mui/material';
import {useState} from 'react';
import 'swiper/css';
import {Autoplay, Pagination, Navigation} from "swiper";


interface IPropertyPageCarousel {
    images : string[]
}
const PropertyPageCarousel = ({images} : IPropertyPageCarousel) => {
    const [className,
        setClassName] = useState('img')

    return (
        <Box
            sx={{
            background: 'white',
            width: {
                xs: '100%',
                md: '68%'
            }
        }}>

            <Swiper
                autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}>
                <Box
                    sx={{
                    transform: {
                        xs: 'scale(.8)',
                        sm: 'scale(1)'
                    },
                    background: 'rgba(0, 0, 0, 0.7)',
                    p: '5px 10px',
                    borderRadius: '5000px',
                    position: 'absolute',
                    bottom: '3%',
                    left: '2%',
                    zIndex: '214124',
                    display: 'flex',
                    color: 'white',
                    alignItems: 'center'
                }}>
                    <CameraAltOutlinedIcon fontSize='small'/>
                    <Typography sx={{
                        ml: '7px'
                    }}>
                        {images.length || '0'}
                    </Typography>
                </Box>

                <Box
                    sx={{
                    transform: {
                        xs: 'scale(.8)',
                        sm: 'scale(1)'
                    },
                    zIndex: '214124',
                    position: 'absolute',
                    bottom: '3%',
                    right: '2%',
                    gap: '5px',
                    display: 'flex'
                }}>
                    <Box
                        sx={{
                        position: 'relative',
                        background: 'white',
                        borderRadius: '50%',
                        boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px'
                    }}>
                        <IconButton >
                            <FavoriteBorderOutlinedIcon
                                sx={{
                                color: '#d42c2a'
                            }}/>
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                        position: 'relative',
                        background: 'white',
                        borderRadius: '50%',
                        boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px'
                    }}>
                        <IconButton
                            onClick={() => setClassName(className === 'img'
                            ? 'img2'
                            : 'img')}>
                            <CameraswitchOutlinedIcon
                                sx={{
                                color: '#333333'
                            }}/>
                        </IconButton>
                    </Box>
                </Box>
                {images && images.map(img => {
                    return <SwiperSlide key={`${img}`}>
                        <Box
                            sx={{
                            position: 'relative',
                            height: {
                                xs: '300px',
                                md: '450px'
                            },
                            width: {
                                xs: '100%'
                            }
                        }}>
                            <img
      
                                className={`${className}`}
                                src={`${img && img}` || 'https://i.stack.imgur.com/6M513.png'}
                                alt="Carousel image"/>

                        </Box>

                    </SwiperSlide>
                })}

            </Swiper>
        </Box>

    )
}

export default PropertyPageCarousel