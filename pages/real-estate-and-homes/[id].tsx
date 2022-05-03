import {Box, Button, Drawer} from "@mui/material"
import {useRouter} from "next/router"
import {useState} from "react"
import FilterBar from "../../components/FilterBar/FilterBar"

const id = () => {
    const router = useRouter()
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
        
            <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{
                    width: '300px'
                }}></Box>
            </Drawer>

        </Box>
    )
}

export default id