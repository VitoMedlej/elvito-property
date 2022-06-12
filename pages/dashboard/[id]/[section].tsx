import {
    Box,
    Button,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,

    Typography
} from "@mui/material"
import {signOut, useSession} from "next-auth/react"
import Link from "next/link"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import FavoriteProperties from "../../../components/DashboardComps/favorites/FavoriteProperties"
import Main from "../../../components/DashboardComps/main/Main"
import UpperTabs from "../../../components/DashboardComps/Tabs/UpperTabs"
import SideTabs from "../../../components/DashboardComps/Tabs/SideTabs"
import UserContacts from "../../../components/DashboardComps/userContacts/UserContacts"
import {ICurrentUser} from "../../../src/Types"

const Section = () => {
    const router = useRouter()
    const {section, id} = router.query

    const {data: session} = useSession()
    const [currentUser,
        setCurrentUser] = useState < null | ICurrentUser > (null)
    const [isLoading,
        setLoading] = useState(false)

    const getCurrentUser = async(id?: string) => {
        setLoading(true)
        if (session
            ?.user && session
                ?.id) {

            setCurrentUser({
                userName : session.user.name,
                userEmail : session.user.email,
                userImage : session.user.image,
                id: `${session
                    ?.id}`
            })
            setLoading(false)

            return
        }
        try {
            if (!id) {
                return
            }

            setLoading(true)
            const req = await fetch(`http://localhost:3000/api/get-user/${id}?id=${id}`)
            const results = await req.json()
            if (results) 
                setCurrentUser(results)
            setLoading(false)

        } catch (err) {
            setLoading(false)
            console.log('err 1 : ' ,err);

        }

    }

    useEffect(() => {
        if (id) {
            getCurrentUser(`${id}`)
        }
    }, [id, session])

    
    return (
        <Box
            maxWidth='lg'
            sx={{
            mt: {
                xs: '1em'
            },
            mx: {
                xs: '3vw',
                lg: 'auto'
            }
        }}>

            <Grid container>

                <UpperTabs/>
                <SideTabs/>

                <Grid item xs={12} md={9}>

                    {section === 'favorites'
                        ? <FavoriteProperties/>
                        : section === 'contacts'
                            ? <UserContacts/>
                            : <Main
                                setCurrentUser={setCurrentUser}
                                currentUser={currentUser}
                                isLoading={isLoading}/>}

                    {!session || !session.user && <Box>
                        <Typography fontSize='1.2em'>
                            You are not logged in yet ,create your account {' '}
                            <Link href='/account/register'>Here</Link>
                        </Typography>
                    </Box>
}

                </Grid>
            </Grid>
        </Box>
    )
}

export default Section