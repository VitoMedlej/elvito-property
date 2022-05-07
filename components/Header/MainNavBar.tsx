import {AppBar, Box, Button, Container, IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import SwipeableMenuDrawer from "./SwipeableMenuDrawer";



const TopNavBarLink = ({title} : any) => {
    return <Button
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
        {title}
    </Button>
}

const MainNavBar = () => {
    const [isDrawerOpen,
        setDrawerOpen] = useState(false)
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
            <SwipeableMenuDrawer
            setDrawerOpen={setDrawerOpen}
            isDrawerOpen={isDrawerOpen}
            />
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
                    data-cy='logo'
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
                    width: '90%',
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
                        {(['Buy', 'sell', 'Rent']as const).map(title => {
                            return <TopNavBarLink key={title} title={title}/>
                        })
}

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
                            onClick={() => setDrawerOpen(!isDrawerOpen)}
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