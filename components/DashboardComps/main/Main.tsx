import {Box, Typography, Button, Skeleton} from "@mui/material"
import {signOut, useSession} from "next-auth/react"
import {useRouter} from "next/router"
import {IMain} from "../../../src/Types"

// this is the main section where users view other user's profiles or their own

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

const Main = ({isLoading ,setCurrentUser ,currentUser} : IMain) => {
    const {data: session} = useSession()
    const router = useRouter()
    const {id} = router.query
   

   
    return (
        <Box>
            {currentUser && !isLoading
                    && <Box sx={{
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
                                    src="https://www.pngitem.com/pimgs/m/551-5510463_default-user-image-png-transparent-png.png"
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
                                        {currentUser.userName}
                                    </Typography>
                                    <Typography fontSize='.9em'>
                                        {currentUser.userEmail}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                    mt: '1em'
                                }}>
                                    <Button
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
                                    {session?.id === `${id}` && currentUser.id === `${id}` && <Button
                                    
                                        onClick={async() => {await signOut({redirect: false});
                                                            setCurrentUser(null);
                                                            router.push('/');
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
                   
}
{!session && !currentUser && !isLoading &&
  <Typography>Sorry, we couldn't find any users!</Typography>}

            {!session && !currentUser && isLoading && <Box
                sx={{
                display: 'flex',
                my: '1em'
            }}>

                <Skeleton variant="rectangular" width={100} height={100}/>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>

                    <Skeleton
                        sx={{
                        mx: '.5em'
                    }}
                        height={25}
                        width={150}/>
                    <Skeleton
                        sx={{
                        mx: '.5em'
                    }}
                        height={25}
                        width={210}/>
                    <Skeleton
                        sx={{
                        mt: '1em',
                        mx: '.5em'
                    }}
                        variant="rectangular"
                        width={120}
                        height={28}/>

                </Box>
            </Box>
}
        </Box>
    )
}

export default Main