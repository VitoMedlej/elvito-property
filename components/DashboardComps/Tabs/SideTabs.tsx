import {Grid, List, Divider, ListItem, ListItemText} from "@mui/material"
import {useRouter} from "next/router"

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
    mr: '1em'
};
const Tabs = () => {
    const router = useRouter()
    const {id} = router.query

    return (
        <Grid
            sx={{
            display: {
                xs: 'none',
                md: 'flex'
            }
        }}
            item
            md={3}>
            <List sx={style} component="nav" aria-label="mailbox folders">

                <Divider light/>

                <ListItem onClick={() => router.push(`/dashboard/${id}/main`)} button divider>
                    <ListItemText primary="Main"/>
                </ListItem>
                <ListItem onClick={() => router.push(`/dashboard/${id}/favorites`)} button>
                    <ListItemText primary="Favorites"/>
                </ListItem>
                <Divider light/>
                <ListItem button>
                    <ListItemText
                        onClick={() => router.push(`/dashboard/${id}/properties`)}
                        primary="listed Properties"/>
                </ListItem>

                <Divider light/>

            </List>
        </Grid>
    )
}

export default Tabs