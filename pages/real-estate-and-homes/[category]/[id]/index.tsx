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
import ContactForm from "../../../../components/PropertyPageComps/ContactForm";
import PropertyPageCarousel from "../../../../components/PropertyPageComps/PropertyPageCarousel";

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
                
                

                    <PropertyPageCarousel/>
                   <ContactForm isHiddenOnMobile={true}/>
                </Box>
                <Box sx={{
                    pt: '1.4em',
                    width: {
                        xs: '100%',
                        md: '68%'
                    }
                }}>
                    <Box>

                        <Typography fontSize="1.5em" fontWeight="500">
                            Whole Luxury Building For Sale In Rabieh
                        </Typography>
                        <Typography fontSize="1em" fontWeight="400">
                        2653 Rosemont Cir, Davenport, FL 33837
                        </Typography>
                    </Box>
                    <Box sx={{pt:'.3em'}}>
                    <Typography fontSize="1em" fontWeight="400">
                        $350,000
                        </Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Index