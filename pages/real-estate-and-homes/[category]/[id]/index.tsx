import {Box, IconButton, Typography} from "@mui/material"
import {useRouter} from "next/router";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import CameraswitchOutlinedIcon from '@mui/icons-material/CameraswitchOutlined';
import 'swiper/css'
import 'swiper/css/navigation';
import {useState} from "react";

const Index = () => {
    const [className,
        setClassName] = useState('img')
    const router = useRouter()
    return (
        <Box
            sx={{
            px: {
                xs: '3vw',
                lg: '0'
            },
            mb: '4em',
            borderTop: '1px solid #80808061'
        }}>
            <Box maxWidth="lg" sx={{
                margin: '0 auto'
            }}>
                <Breadcrumb id={`${router.query.id}`} category={`${router.query.category}`}/>
                <Box
                    sx={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap'
                }}>
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
                                        md: '400px',
                                        lg: '450px'
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

                    {/* <Box
                        sx={{
                        position: 'relative',
                        height: {
                            xs: '300px',
                            md: '400px'
                        },
                        width: {
                            xs: '100%',
                            md: '68%'
                        }
                    }}>
                        <img
                            className='img'
                            src="https://ap.rdcpix.com/9286d3dd573c2099b5213f5809d0d197l-m3066780094od-w480_h360_x2.webp"
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
                            bottom: '-5%',
                            right: '1%',
                            background: 'white',
                            borderRadius:'50%',
                            boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 8px',
                        }}>
                            <IconButton >
                                <FavoriteBorderOutlinedIcon
                                    sx={{
                                    color: '#d42c2a'
                                }}/>
                            </IconButton>
                        </Box>
                    </Box> */}
                    <Box
                        sx={{
                        maxWidth: "300px",
                        width: {
                            xs: 0,
                            md: '30%'
                        },
                        height: '300px',
                        background: 'red'
                    }}>
                        fasf
                    </Box>
                </Box>
                <Box sx={{
                    pt: '1em'
                }}>
                    <Box>

                        <Typography fontSize="1.4em" fontWeight="500">
                            Hello world
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Index