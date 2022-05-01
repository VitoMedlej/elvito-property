import {Box, Typography} from '@mui/material'
import SwiperCarouselSkeleton from '../../Skeletons/SwiperCarouselSkeleton'
import SwiperCarousel from '../Swiper/SwiperCarousel'




const Featured = () => {
    return (
        <Box>
            <Box
            maxWidth='lg'
                sx={{
                mt: {
                    xs: '4em',
                    sm:'6em',
                },
                mx: {xs:'3vw',lg:'auto'}
                }}>
                <Typography
                    sx={{
                    pb:'.5em',
                    fontSize: {
                        xs: '1.2em',
                        sm: '1.4em'
                    },
                    fontWeight: '600'
                }}>
                    New Featured Homes
                </Typography>
                <Box>
                  {
                      true ?
                      <SwiperCarousel />
                      : <SwiperCarouselSkeleton/>
                  }
                </Box>
            </Box>
        </Box>
    )
}

export default Featured