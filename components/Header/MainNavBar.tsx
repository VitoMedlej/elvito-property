import {AppBar, Box, Button, Container, IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {useRouter} from "next/router";
import {useEffect, useRef} from "react";
import gsap from "gsap";



const MainNavBar = () => {


    const router = useRouter()
    const ref = useRef()

    
    const q = gsap
        .utils
        .selector(ref);

    useEffect(() => {
        if (router.route === '/') {

            gsap.fromTo('.logo', {
                opacity: 0
        }, {
            opacity: 1,
            delay: .3
        })
        gsap.fromTo(q(".btn"), {
            transform: 'translateY(-60px)',
            opacity: 0
        }, {
            opacity: '1',
            transform: 'translateY(0)',
            stagger: 0.15,
            delay: .1
        });
    }

    }, []);

    return (
        <AppBar
        id='appbar'
            sx={{
            boxShadow: 'none',
            background: 'white',
            position: 'relative'
        }}>
            <Container
                sx={{
                px: {
                    lg: '0 !important'
                },
                py: '10px',
                color: 'black',
                display: 'flex',
                justifyContent: 'space-between'
            }}
                maxWidth="lg">
                <Box
                    className='logo'
                    onClick={() => {
                        
                    router.push('/')
                }}
                    sx={{
                    cursor: 'pointer',
                    width: '120px',
                    height: '40px'
                }}>
                    <img
                        className='img'
                        src={`https://ucarecdn.com/cf7a29ca-a79d-4c05-bfae-f6ae35e16a23/`}
                        alt=""/>

                </Box>
                <Box
                    sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: {
                        xs: 'flex-end',
                        md: 'space-between'
                    }
                }}
                    ref={ref}>

                    <Box
                        sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        width: '80%',
                        ml: {
                            md: '2em'
                        }
                    }}>
                        <Button
                            className='btn'
                            sx={{
                            color: 'black',
                            mr: '10px',
                            borderBottom: '2px solid transparent',
                            borderRadius: '0',
                            ':hover': {
                                borderBottom: '2px solid #DA020E',
                                background: 'none'
                            }
                        }}>
                            Buy
                        </Button>
                        <Button
                            className='btn'
                            sx={{
                            color: 'black',
                            mr: '10px',
                            borderBottom: '2px solid transparent',
                            borderRadius: '0',
                            ':hover': {
                                borderBottom: '2px solid #DA020E',
                                background: 'none'
                            }
                        }}>
                            Rent
                        </Button>
                        <Button
                            className='btn'
                            sx={{
                            color: 'black',
                            mr: '10px',
                            borderBottom: '2px solid transparent',
                            borderRadius: '0',
                            ':hover': {
                                borderBottom: '2px solid #DA020E',
                                background: 'none'
                            }
                        }}>
                            Sell
                        </Button>

                    </Box>

                    <Box sx={{
                        display: 'flex'
                    }}>

                        <IconButton className='btn'>
                            <FavoriteBorderIcon
                                sx={{
                                color: 'black'
                            }}/>
                        </IconButton>
                        <IconButton
                            className='btn'
                            sx={{
                            display: {
                                xs: 'flex',
                                md: 'none'
                            }
                        }}>
                            <MenuIcon
                                sx={{
                                color: 'black'
                            }}/>
                        </IconButton>
                        <IconButton
                            className='btn'
                            sx={{
                            display: {
                                xs: 'none',
                                md: ' flex'
                            }
                        }}>
                            <AccountCircleOutlinedIcon
                                sx={{
                                ml: '10px',
                                color: 'black'
                            }}/>

                        </IconButton>

                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}

export default MainNavBar