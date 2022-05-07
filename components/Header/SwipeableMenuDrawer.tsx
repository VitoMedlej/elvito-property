import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {Box, IconButton} from '@mui/material';
import router from 'next/router';
import { ISwipeableMenuDrawer } from '../../src/Types';

const SwipeableMenuDrawer = ({setDrawerOpen,isDrawerOpen} : ISwipeableMenuDrawer ) => {
    return (
        <SwipeableDrawer
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

        </SwipeableDrawer>
    )
}

export default SwipeableMenuDrawer