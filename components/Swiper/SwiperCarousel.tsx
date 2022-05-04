import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Pagination} from "swiper";

// Import Swiper styles
import 'swiper/css';
import {Box} from '@mui/material';
import HouseCard from '../Cards/HouseCard';
const Slide = () => {
    return <Box
        sx={{
        width: '24%',
        minWidth: '300px',
        height: '300px',
        border: '1px solid green',
        margin: '10px',
        background: 'red'
    }}></Box>
}

const SwiperCarousel = () => {
    return (
        <Swiper
            freeMode={true}
            spaceBetween={1}
            pagination={{
            clickable: true
        }}
            modules={[FreeMode, Pagination]}
            breakpoints={{
            200: {
                width: 640,
                slidesPerView: 2
            },
            768: {
                width: 768,
                slidesPerView: 2
            }
        }}>

            <SwiperSlide>
                <HouseCard width='95%' isFeatured={true}/>
            </SwiperSlide>
            <SwiperSlide>
                <HouseCard width='95%' isFeatured={true}/>
            </SwiperSlide>
            <SwiperSlide>
                <HouseCard width='95%' isFeatured={true}/>
            </SwiperSlide>
            <SwiperSlide>
                <HouseCard width='95%' isFeatured={true}/>
            </SwiperSlide>
            <SwiperSlide>
                <HouseCard width='95%' isFeatured={true}/>
            </SwiperSlide>

        </Swiper>
    );
};

export default SwiperCarousel