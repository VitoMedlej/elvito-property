import {Box, Typography, Button} from '@mui/material';
import router from 'next/router';
import {Dispatch, SetStateAction, useContext} from 'react';
import {Session} from '../../../pages/_app';
import {ICurrentUser, IUserProfile} from '../../../src/Types';
const styles = {
    flexDirection: {
        xs: 'column',
        md: 'row'
    },
    alignItems: {
        xs: 'center',
        md: 'left'
    },
    justifyContent: {
        xs: 'center',
        md: 'left'
    },
    textAlign: {
        xs: 'center',
        md: 'left'
    },
    marginTop: {
        xs: '2.5em',
        md: '0'
    },
    marginLeft: {
        xs: 0,
        md: 'auto'
    },
    width: '100%',
    height: '200px',
    m: '1em',
    display: 'flex'
}

interface IsignOut {
    redirect : boolean;
    redirectUrl?: string;
    setCurrentUser : Dispatch < SetStateAction < ICurrentUser | null >> | undefined;
    setSession : ((newValue : any) => void) | undefined
}
const signOut = async({redirect, redirectUrl, setCurrentUser, setSession} : IsignOut) => {

    const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/sign-out`, {method: 'POST'})

    if (req.status === 200 && redirect) {
        setCurrentUser && setCurrentUser(null);
        setSession && setSession(null)
        router.push(redirectUrl || '/')
        return
    }

}

const UserProfile = ({currentUser, setCurrentUser, logOutOption, isSameUser} : IUserProfile) => {
    const {session, setSession} = useContext(Session);
    const {id} = router.query
    return (
        <Box sx={{
            ...styles
        }}>

            <Box
                sx={{
                width: '100px',
                borderRadius: '50%',
                height: '100px',
                border: '1px solid #00000030'
            }}>
                <img
                    className='img rounded'
                    src="https://res.cloudinary.com/dwcu3wcol/image/upload/v1655796988/Static/551-5510463_default-user-image-png-transparent-png_1_1_wfgkva.png"
                    alt=""/>
            </Box>
            <Box
                sx={{
                display: 'flex',
                p: '1em',
                flexDirection: 'column'
            }}>

                <Box >
                    <Typography
                        sx={{
                        pb: '.15em'
                    }}
                        fontSize="1.3em"
                        fontWeight="500">
                        {currentUser
                            ?.userName}
                    </Typography>
                    <Typography fontSize='.9em'>
                        {currentUser
                            ?.userEmail}
                    </Typography>
                    <Typography fontSize='.9em'>
                        {currentUser
                            ?.userPhone}
                    </Typography>
                </Box>
                <Box sx={{
                    mt: '1em'
                }}>
                    <Button
                        disabled={isSameUser}
                        sx={{
                        mr: '.5em',
                        borderColor: '#d42c2a',
                        color: '#d42c2a',
                        ':hover': {
                            borderColor: '#d42c2a',
                            background: '#80808017'
                        }
                    }}
                        variant='outlined'>
                        <Typography fontSize='.8em'>
                            Contact
                        </Typography>
                    </Button>
                    {logOutOption && session
                        ?.id === id && <Button
                            onClick={async() => {
                            await signOut({redirect: true, redirectUrl: '/', setCurrentUser, setSession});
                        }}
                            sx={{
                            borderColor: '#d42c2a',
                            background: '#d42c2a',
                            color: 'white',
                            ':hover': {
                                borderColor: '#bf201f',
                                background: '#bf201f'
                            }
                        }}
                            variant='outlined'>
                            <Typography fontSize='.8em'>
                                logout
                            </Typography>
                        </Button>}
                </Box>
            </Box>
        </Box>
    )
}

export default UserProfile