import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Box, Typography} from '@mui/material';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import {useRouter} from 'next/router';
import { IHouseCard } from '../../src/Types';

export default function HouseCard({width ,isMinWidthDisabled,isFeatured} : IHouseCard) {
    const router = useRouter()
    return (
        <Card
            onClick={() => router.push('/real-estate-and-homes/id', undefined, {scroll: true})}
            sx={{
            height:'100%',
            position: 'relative',
            mb:'15px',
            cursor: 'pointer',
            minWidth: isMinWidthDisabled ? '' : 310,
            width : width ? width : '33%',
            boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',

            ':hover': {
                boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
            }
        }}>
            <CardMedia
                component="img"
                height="140"
                image="https://ap.rdcpix.com/06547a8e2a49c644f7a277130c39e3del-m4093847176od-w480_h360.webp"
                alt="green iguana"/>
            <Box
                sx={{
                display : isFeatured ? 'flex' : 'none',
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
                    Family Home - beirut
                </Typography>
                <Typography fontSize='1em' fontWeight='600'>
                Whole Luxury Building For Sale In Rabieh
                </Typography>
                <Typography fontSize='.9em' color='green' fontWeight='500'>

                    $120,000
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
                        300m
                    </Button>
                    <Button
                        sx={{
                        pointerEvents: 'none',
                        color: 'black'
                    }}
                        startIcon={< BathtubOutlinedIcon />}>
                        3
                    </Button>
                    <Button
                        sx={{
                        pointerEvents: 'none',
                        color: 'black'
                    }}
                        startIcon={< HotelOutlinedIcon />}>
                        1
                    </Button>
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