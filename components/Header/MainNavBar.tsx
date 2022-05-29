import {
    AppBar,
    Box,
    Container,
    IconButton,
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useRouter} from "next/router";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import SwipeableMenuDrawer from "./SwipeableMenuDrawer";
import TopNavBarLink from "./TopNavBarLink";
import UserAccountBtn from './UserAccountBtn';
import {useSession} from "next-auth/react";

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

    const {data: session} = useSession()
    
    return (
        <AppBar
            id='appbar'
            sx={{
            boxShadow: 'none',
            background: 'white',
            position: 'relative'
        }}>
            <SwipeableMenuDrawer setDrawerOpen={setDrawerOpen} isDrawerOpen={isDrawerOpen}/>
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
                        {([
                            {
                                title: 'Buy',
                                href: "/real-estate-and-homes/properties?for=sale"
                            }, {
                                title: 'Sell',
                                href: "/submit-property"
                            }, {
                                title: 'Rent',
                                href: "/real-estate-and-homes/properties?for=rent"
                            }
                        ]as const).map(item => {
                            return <TopNavBarLink key={item.title} href={item.href} title={item.title}/>
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
                            onClick={() => {
                          
                            
                            setDrawerOpen(!isDrawerOpen)
                        }}
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

                        <UserAccountBtn/>
                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}

export default MainNavBar