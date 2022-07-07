import {Box, IconButton, Typography} from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useEffect, useRef, useState} from "react";
import gsap from "gsap";
import { useRouter } from "next/router";
import Image from 'next/image'


const Hero = () => {
    const [formValue,setFormValue] = useState({searchValue:'',isLoading:false})
    const elementRef = useRef()
    const router = useRouter()
    useEffect(() => {

        if (router.route === '/') {
            const q = gsap
            .utils
            .selector(elementRef)
            gsap.fromTo(q('.title'),
            {
                y: '40px',
                opacity:'0'
            }, {
                opacity:'1',
                y:0,
                duration: .7,
                delay:1,
                stagger: .35
            })
        }
     
    },[])

    return (
        <Box>
            <Box
                className='LandingPage'
                sx={{
                zIndex: '-1',
                width: '100%',
                height: {
                    xs: '400px',
                    sm: '500px'
                },
                position: 'absolute'
            }}>
            
                    {/* <img
                    className='img'
                    alt="Main picture"  src={"https://res.cloudinary.com/dwcu3wcol/image/upload/v1655796712/Static/piotr-chrobot-KqEYj1VHA_o-unsplash_1_1_vwehb9_1_1_iaxbd3.jpg"}/> */}
        
        <Box
                    sx={{
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                }}>
                    <Image
                        priority
                        className='img'
                        alt="Main picture"
                        src={"https://res.cloudinary.com/dwcu3wcol/image/upload/v1655796712/Static/piotr-chrobot-KqEYj1VHA_o-unsplash_1_1_vwehb9_1_1_iaxbd3.jpg"}
                        objectFit='cover'
                        layout="fill"
                       />
                </Box>
        
        
            </Box>




            <Box
            ref={elementRef}
                sx={{
                height: {
                    xs: '20em',
                    sm: '25.25em'
                },
                zIndex: '2',
                pt: {
                    xs: '5em',
                    sm: '6em'
                },
                color: 'white',
                textAlign: 'center',
                px: '3vw'
            }}>
                <Box  className='title'>

                    <Typography
                        sx={{
                        fontSize: {
                            xs: '2em',
                            sm: '2.4em',
                            md: '2.8em',
                            lg: '3.2em',
                            xl: '3.6em'
                        },
                        fontWeight: '700'
                    }}>
                        Everyone Needs A Place To Call Home
                    </Typography>
                </Box>
                <Box >

                    <Typography
                        className='title'
                        color='#ffffffb8'
                        sx={{
                        pt: '.7em',
                        fontSize: {
                            xs: '1em',
                            sm: '1.2em',
                            xl: "1.4em"
                        },
                        fontWeight: '400'
                    }}>
                        We&apos;ll help you find your perfect home
                    </Typography>
                </Box>
                <Box
                    onSubmit={async (e: React.FormEvent)=>{
                    e.preventDefault();
                    setFormValue({...formValue,isLoading:true})
                   await router.push(`/real-estate-and-homes/properties?q=${formValue.searchValue}`)
                    setFormValue({...formValue,isLoading:false})
                    
                }}
                        
                    component='form'
                    className='title'
                    sx={{
                    position: 'relative',
                    margin: '2em auto',
                    width: 'max-content'
                }}>
                    <input value={formValue.searchValue} onChange={(e)=>setFormValue({...formValue,searchValue:`${e.target.value}`})} type="text" placeholder="Enter Keyword" className='HeroInput p1'/>
                    <IconButton
                    type='submit'
                        disabled={formValue.isLoading}
                        sx={{
                        color: 'white',
                        position: 'absolute',
                        top: '0%',
                        right: '0%',
                        border: '1px solid white',
                        borderRadius:'7px',
                        padding: '8px',
                        background: '#d42c2a',
                        ':hover': {
                            background: '#c10d0b',
                            color: 'white',
                            opacity: '.9'
                        }
                    }}>
                        <SearchOutlinedIcon/>
                    </IconButton>
                </Box>
            </Box>

        </Box>
    )
}

export default Hero