import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {Box, IconButton, List} from '@mui/material';
import router from 'next/router';
import {ISwipeableMenuDrawer} from '../../src/Types';
import MenuBtn from './MenuBtn';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSession } from 'next-auth/react';

const SwipeableMenuDrawer = ({setDrawerOpen, isDrawerOpen} : ISwipeableMenuDrawer) => {
    const {data : session } = useSession()
    return (
        <SwipeableDrawer
            sx={{
            display: {
                xs: 'auto',
                md: 'hidden'
            }
        }}
            onOpen={() => setDrawerOpen(true)}
            onClose={() => setDrawerOpen(false)}
            open={isDrawerOpen}
            anchor={'right'}>
            <Box
                sx={{
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                width: '280px',
                justifyContent: 'space-between',
                padding: '0 3vw',
                borderBottom: '1px solid #00000042'
            }}>
                <Box
                    data-cy='logo'
                    className='logo'
                    onClick={() => {
                    router.push('/');
                    setDrawerOpen(false)
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
                <Box>
                    <IconButton
                        onClick={() => setDrawerOpen(false)}
                        className='btn'
                        sx={{
                        display: {
                            xs: 'flex',
                            md: 'none'
                        }
                    }}>
                        <ClearOutlinedIcon
                            sx={{
                            color: 'red'
                        }}/>
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <List>

                    <MenuBtn
                        handleClick={() => setDrawerOpen(false)}
                        title='Buy'
                        href='/real-estate-and-homes/properties?for=sale'
                        Icon={PaidOutlinedIcon}/>

                    <MenuBtn
                        handleClick={() => setDrawerOpen(false)}
                        title='Sell'
                        href='/submit-property'
                        Icon={SellOutlinedIcon}/>

                    <MenuBtn
                        handleClick={() => setDrawerOpen(false)}
                        title='Rent'
                        href='/real-estate-and-homes/properties?for=rent'
                        Icon={CalendarMonthOutlinedIcon}/>

                    <MenuBtn
                        handleClick={() => setDrawerOpen(false)}
                        title='User'
                        href={session?.user ? `/dashboard/${session.user.name}` :'/account/login'}
                        Icon={PersonOutlineOutlinedIcon}/>

                </List>

            </Box>
        </SwipeableDrawer>
    )
}

export default SwipeableMenuDrawer