import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Pagination} from "swiper";
import 'swiper/css';
import HouseCard from '../Cards/HouseCard';
import {IFormData} from '../../src/Types';
import { IfeaturedProperties } from '../Featured/Featured';

// const Slide = () => {     return <Box         sx={{         width: '24%',
//     minWidth: '300px',         height: '300px',         border: '1px solid
// green',         margin: '10px',         background: 'red'     }}></Box> }


const SwiperCarousel = ({featuredProperties} :IfeaturedProperties) => {
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

            {featuredProperties && featuredProperties.map(property => {

                return <SwiperSlide key={property.id}>
                    <HouseCard
                        img={property.images[0] || property.images[1]}
                        width='95%'
                        id={property.id}
                        isFeatured={true}
                        propertySize={property.propertySize}
                        type={property.type}
                        baths={property.bathrooms}
                        rooms={property.rooms}
                        currency={property.currency}
                        price={property.price}
                        title={property.title}
                        location={property.location}/>
                </SwiperSlide>

            })
}

        </Swiper>
    );
};

export default SwiperCarousel