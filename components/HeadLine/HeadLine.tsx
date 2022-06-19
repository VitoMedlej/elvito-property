import {Box, Button, Typography} from "@mui/material"
import {useRouter} from "next/router"
import {useEffect, useRef} from "react"
import {gsap} from "gsap";
import Image from 'next/image'




const HeadLine = () => {
    const router = useRouter()

    const ref = useRef()
    const q = gsap
        .utils
        .selector(ref);

    useEffect(() => {

        gsap.fromTo(q('.item '), {
            opacity: 0,
            y: '25px'
        }, {
          
            y: 0,
            opacity: 1,
            stagger: .19,
            scrollTrigger: {
                trigger: '.item2',
                start :'bottom 70%'
            }
        })
    })

    return (
        <Box
            sx={{
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            my: {
                xs: '6em',
                sm: '10em'
            }
        }}>
            <Box className='layer2'></Box>

            <Box
                sx={{
                pointerEvents: 'none',
                zIndex: '-1',
                width: '100%',
                height: '400px',
                position: 'absolute'
            }}>
                <Image priority={true} layout='fill' className='img'src={`https://res.cloudinary.com/dwcu3wcol/image/upload/v1655632032/Static/photo-1510629326852-3f0946701bc6_1_kqahkn.jpg`} alt="Headline image"/>

               
            </Box>
            <Box ref={ref} sx={{
                zIndex: '1412'
            }}>
                <Typography
                    className='item '
                    color='white'
                    sx={{
                    textTransform: 'capitalize',
                    fontWeight: '200',
                    fontSize: {
                        xs: '1.4em',
                        sm: '1.8em',
                        md: '2.2em',
                        lg: '2.4em',
                        xl: '2.6em'
                    }
                }}>
                    Your home is your biggest investment
                </Typography>
                <Button
                    className='item item2'
                    onClick={() => router.push('/real-estate-and-homes/properties')}
                    variant="contained"
                    sx={{
                    fontWeight: '200',
                    mt: '1em',
                    background: '#d42c2a',
                    color: 'white',
                    border: '1px solid #d42c2a',
                    ':hover': {
                        background: 'transparent',
                        border: '1px solid white'
                    }
                }}>
                    Invest with us
                </Button>
            </Box>
        </Box>
    )
}

export default HeadLine