import {
    Box,
    Typography,
    Card,
    Button,
    CardMedia,
    CardContent,
    CardActions
} from '@mui/material';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import {useRouter} from 'next/router';
import {IHouseCard} from '../../src/Types';
import BalconyIcon from '@mui/icons-material/Balcony';

export default function HouseCard({
    width,
    isMinWidthDisabled,
    img,
    propertySize,
    baths,
    rooms,
    currency,
    price,
    title,
    location,
    isFeatured,
    id,
    type,
    
} : IHouseCard) {
    const router = useRouter()
    return (
        <Card
            className='houseCard'
            onClick={() => router.push(`/real-estate-and-homes/${type}/${id}`, undefined, {scroll: true})}
            sx={{
            height: '100%',
            position: 'relative',
            my: '10px',
            cursor: 'pointer',
            minWidth: isMinWidthDisabled
                ? ''
                : 310,
            width: width
                ? width
                : '33%',
            boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
            ':hover': {
                boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
            }
        }}>
            <CardMedia
                component="img"
                className='img cardImg'
                height="140"
                image={img || "https://ap.rdcpix.com/06547a8e2a49c644f7a277130c39e3del-m4093847176od-w480_h360." +
                "webp"}
                alt="green iguana"/>
            <Box
                sx={{
                display: isFeatured
                    ? 'flex'
                    : 'none',
                pointerEvents: 'none',
                position: 'absolute',
                top: '3%',
                padding: '2px 6px',
                left: '3%',
                background: '#d42c2a'
            }}>

                <Typography
                    sx={{
                    fontWeight: '600',
                    fontSize: '.9em'
                }}
                    color='white'>
                    Featured
                </Typography>
            </Box>
            <CardContent sx={{
                padding: ' 8px'
            }}>
                <Typography fontSize='.9em' fontWeight='300'>
                    {location}
                </Typography>
                <Typography fontSize='1em' fontWeight='600'>
                    {title}
                </Typography>
                <Typography fontSize='.9em' color='green' fontWeight='500'>

                    {currency === 'USD'
                        ? '$'
                        : currency === 'EUR'
                            ? '€'
                            : 'L.L'}{price}
                </Typography>
                <Box>

                    <Button
                        sx={{
                        textTransform: 'inherit',
                        pointerEvents: 'none',
                        color: 'black',
                        fontSize: '.8em'
                    }}
                        startIcon={< StraightenOutlinedIcon />}>
                        {propertySize}
                    </Button>
                    {baths
                        ? <Button
                                sx={{
                                pointerEvents: 'none',
                                color: 'black'
                            }}
                                startIcon={< BathtubOutlinedIcon />}>
                                {baths}
                            </Button>
                        : ''}
                    {rooms
                        ? <Button
                                sx={{
                                pointerEvents: 'none',
                                color: 'black'
                            }}
                                startIcon={< HotelOutlinedIcon />}>
                                {rooms}
                            </Button>
                        : ''}

                
                </Box>

            </CardContent>
            <CardActions sx={{
                py: '0'
            }}>
                <Button size="small">View Property</Button>
            </CardActions>
        </Card>
    );
}