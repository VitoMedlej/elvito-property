import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode,Autoplay, Pagination} from "swiper";
import 'swiper/css';
import HouseCard from '../Cards/HouseCard';
import { IProperties } from '../Featured/Featured';


const SwiperCarousel = ({PropertiesArray,delay, isFeatured} :IProperties) => {
   
    return (
        <Swiper
            pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: delay || 3000,
                disableOnInteraction: false,
              }}
              navigation={true}
            spaceBetween={10}
            modules={[FreeMode,Autoplay, Pagination]}
            breakpoints={{
                
                200: {
                    width: 310,
                    slidesPerView: 1
                },
                768: {
                    width: 768,
                    slidesPerView: 2
                },
             
               
        }}>

            {PropertiesArray && PropertiesArray.map(property => {

                return <SwiperSlide key={property.id}>
                    <HouseCard
                        img={property.images[0] || property.images[1]}
                        width='95%'
                        id={property.id}
                        isFeatured={isFeatured !== undefined ? isFeatured : true}
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