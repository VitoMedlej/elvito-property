import {
    Box,
    Button,
    Fade,
    IconButton,
    Link,
    Popper,
    Typography
} from "@mui/material"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import router from "next/router";
import {useState} from "react";
import {useSession} from "next-auth/react";

const UserAccountBtn = () => {
    const {data: session} = useSession()

    const [anchorEl,
        setAnchorEl] = useState < null | HTMLElement > (null);
    const [isOpen,
        setOpen] = useState(false)
    const handleClick = (event : React.MouseEvent < HTMLElement >) => {
        if (session
            ?.user) {

            router.push(`/dashboard/${session.user.name}`);
            return
        }
        setAnchorEl(event.currentTarget);
        setOpen(!isOpen)
    };
    return (
        <Box>

            <IconButton
                onClick={(e) => handleClick(e)}
                className='btn'
                sx={{
                ml: '10px',
                display: {
                    xs: 'none',
                    md: ' flex'
                }
            }}>
                <AccountCircleOutlinedIcon
                    sx={{
                    color: 'black'
                }}/>

            </IconButton>
            <Popper
                sx={{
                zIndex: '55551',
                width: '200px',
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}
                id={'id'}
                open={isOpen}
                placement='bottom'
                anchorEl={anchorEl}
                transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps}>
                        <Box
                            sx={{
                            background: 'white',
                            px: '1em',
                            py: '1em',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
                        }}>
                            <Typography
                                fontSize='.8em'
                                fontWeight='400'
                                sx={{
                                pb: '.5em'
                            }}>
                                Sign in or register to sync your favorite properties across devices
                            </Typography>
                            <Button
                                onClick={() => {
                                router.push('/account/login');
                                setOpen(false)
                            }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                fontSize: '.8em',
                                backgroundColor: "#d42c2a",
                                border: "1px solid #d42c2a",
                                ":hover": {
                                    background: '#bb0806',
                                    border: "1px solid #bb0806"
                                }
                            }}>
                                Sign In
                            </Button>
                            <Box
                                sx={{
                                mt: '1em'
                            }}>

                                <Box
                                    onClick={() => {
                                    router.push('/account/register');
                                    setOpen(false)
                                }}>
                                    <Typography
                                        sx={{
                                        textDecoration: 'underline',
                                        color: '#1976d2',
                                        cursor: 'pointer'
                                    }}>
                                        Create account
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Fade>
                )}
            </Popper>
        </Box>
    )
}

export default UserAccountBtn