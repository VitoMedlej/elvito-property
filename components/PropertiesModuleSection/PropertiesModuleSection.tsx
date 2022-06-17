import {Box, Button, Typography} from '@mui/material'
import { useRouter } from 'next/router';
import SwiperCarouselSkeleton from '../../Skeletons/SwiperCarouselSkeleton';
import {IProperties} from '../Featured/Featured';
import SwiperCarousel from '../SwiperComps/SwiperCarousel';

const PropertiesModuleSection = ({PropertiesArray} : IProperties) => {
    const router = useRouter()
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
                className='sectionTitle box'
                sx={{
                pb: '.5em',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '600'
            }}>
                Check Various Types Of Properties
            </Typography>
          { PropertiesArray ? <SwiperCarousel delay={2500} isFeatured={false} PropertiesArray={PropertiesArray}/> : <SwiperCarouselSkeleton/>}
            <Box
                sx={{
                margin: '2em 0 auto',
                justifyContent: 'center',
                display: 'flex'
            }}>

                <Button
                onClick={()=>router.push('/real-estate-and-homes/properties')}
                    sx={{
                    p:'.35em 4em ',
                    mr: '.5em',
                    borderColor: '#d42c2a',
                    color: '#d42c2a',
                    ':hover': {
                        borderColor: '#d42c2a',
                        background: '#80808017'
                    }
                }}
                    variant='outlined'>
                    <Typography fontSize='.9em'>
                        View All
                    </Typography>
                </Button>
            </Box>

        </Box>
    )
}

export default PropertiesModuleSection