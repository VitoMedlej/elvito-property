import {Box, Button, Drawer} from "@mui/material"
import {useSession} from "next-auth/react"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import FilterBar from "../../../components/FilterBar/FilterBar"
import PropertySection from "../../../components/PropertySection/PropertySection"

const Index = () => {
    const router = useRouter()
    const {data: session} = useSession()

    const [isDrawerOpen,
        setDrawerOpen] = useState(false)
    const toggleDrawer = (open : boolean) => (event : React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);

    };

    return (
        <Box
            sx={{
            px: {
                xs: '3vw',
                lg: '0'
            },
            borderTop: '1px solid #80808061'
        }}>

            <FilterBar/>
            <PropertySection sectionTitle={`${router.query.id || 'propertie'}`}/>

            <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{
                    width: '300px'
                }}></Box>
            </Drawer>

        </Box>
    )
}

export default Index