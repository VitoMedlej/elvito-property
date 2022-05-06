import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import CameraswitchOutlinedIcon from '@mui/icons-material/CameraswitchOutlined';
import {Box, Typography, IconButton} from '@mui/material';
import {useState} from 'react';

const PropertyPageCarousel = () => {
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
                modules={[Navigation, Pagination]}
                navigation
                spaceBetween={50}
                slidesPerView={1}>
                <SwiperSlide>
                    <Box
                        sx={{
                        position: 'relative',
                        height: {
                            xs: '300px',
                            md: '450px',
                           
                        },
                        width: {
                            xs: '100%'
                        }
                    }}>
                        <img
                            className={`${className}`}
                            src="https://www.rizkproperties.net/storage/uploads/property_images/622fad9339239c710eda4af5df0a4b7b.jpg"
                            alt=""/>
                        <Box
                            sx={{
                            background: 'rgba(0, 0, 0, 0.7)',
                            p: '5px 10px',
                            borderRadius: '5000px',
                            position: 'absolute',
                            bottom: '3%',
                            left: '2%',
                            display: 'flex',
                            color: 'white',
                            alignItems: 'center'
                        }}>
                            <CameraAltOutlinedIcon fontSize='small'/>
                            <Typography
                                sx={{
                                ml: '7px'
                            }}>
                                20
                            </Typography>
                        </Box>

                        <Box
                            sx={{
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
                    </Box>

                </SwiperSlide>

            </Swiper>
        </Box>

    )
}

export default PropertyPageCarousel