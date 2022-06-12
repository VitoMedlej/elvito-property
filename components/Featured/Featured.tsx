import {Box, Typography} from '@mui/material'
import SwiperCarouselSkeleton from '../../Skeletons/SwiperCarouselSkeleton'
import { IFormData } from '../../src/Types'
import SwiperCarousel from '../SwiperComps/SwiperCarousel'

export interface IfeaturedProperties {
    featuredProperties : IFormData[]
}

const Featured = ({featuredProperties}  : IfeaturedProperties) => {
    
    console.log('featuredProperties: ', featuredProperties);
    return (
        <Box
            maxWidth='lg'
            sx={{
            mt: {
                xs: '4em',
                sm: '6em'
            },
            mx: {
                xs: '3vw',
                lg: 'auto'
            }
        }}>
            <Typography
                sx={{
                pb: '.5em',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '600'
            }}>
                New Featured Homes
            </Typography>
            <Box>
                {true 
                    ? <SwiperCarousel featuredProperties={featuredProperties}/>
                    : <SwiperCarouselSkeleton/>
}
            </Box>
        </Box>
    )
}

export default Featured