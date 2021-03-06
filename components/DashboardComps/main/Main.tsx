import {Box, Typography, Skeleton} from "@mui/material"
import {useRouter} from "next/router"
import { useContext } from "react"
import { Session } from "../../../pages/_app"
import {IMain} from "../../../src/Types"
import UserProfile from "../UserProfile/UserProfile"

// this is the main section where users view other user's profiles or their own



const Main = ({isLoading ,setCurrentUser ,currentUser} : IMain) => {
    const {session} = useContext(Session);
    const router = useRouter()
    const {id} = router.query
    const isSameUser =  session?.id === id  &&  currentUser?.id === id
   

   
    return (
        <Box>
            {currentUser && !isLoading
                    && <UserProfile setCurrentUser={setCurrentUser} currentUser={currentUser} isSameUser={isSameUser} logOutOption={true}/>
                   
}
{!session && !currentUser && !isLoading &&
  <Typography>Sorry, we couldn&apos;t find any users!</Typography>}

            { !currentUser && <Box
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