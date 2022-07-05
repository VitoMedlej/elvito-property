import {Box, Grid, Typography} from "@mui/material"
import Link from "next/link"
import {useRouter} from "next/router"
import {useContext, useEffect, useState} from "react"
import FavoriteProperties from "../../../components/DashboardComps/favorites/FavoriteProperties"
import Main from "../../../components/DashboardComps/main/Main"
import UpperTabs from "../../../components/DashboardComps/Tabs/UpperTabs"
import SideTabs from "../../../components/DashboardComps/Tabs/SideTabs"
import UserContacts from "../../../components/DashboardComps/userContacts/UserContacts"
import {ICurrentUser} from "../../../src/Types"
import {Session} from "../../_app"

const Section = () => {
    const router = useRouter()
    const {section, id} = router.query

    const {session} = useContext(Session);

    const [currentUser,
        setCurrentUser] = useState < null | ICurrentUser > (null)
    const [isLoading,
        setLoading] = useState(false)
    // currentUser is the profile of whom is being visited like for example you
    // visit the profile of a home owner now, currentUser holds the details for that
    // user (name,email,phone number...) if the profile we're visiting is ours, then
    // the current session becomes the currentuser

    const getCurrentUser = async(id?: string) => {
        setLoading(true)
        if (session && session
            ?.id) {

            setCurrentUser({
                userName: session.name,
                userEmail: session.email,
                userImage: session.image,
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
            const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/get-user/${id}?id=${id}`)
            const results = await req.json()
            if (results) 
                setCurrentUser(results)
            setLoading(false)

        } catch (err) {
            setLoading(false)
            console.log('err 1 : ', err);

        }

    }

    useEffect(() => {
        if (id ) {
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

                    {!session || !session.id && <Box>
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