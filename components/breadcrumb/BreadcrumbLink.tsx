import { Box, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { IBreadcrumbLink } from "../../src/Types"

const BreadcrumbLink = ({href, title} : IBreadcrumbLink) => {
    const router = useRouter()
    return <>
       
            /
            <Box
            onClick={()=>router.push(href)}
            sx={{
            cursor: 'pointer',
            color: '#1976d2',
            textDecoration: 'underline',
            display: 'flex',
            alignItems: 'center',
            px: '1em'
        }}>

            <Typography fontSize="15px">
                {title}
            </Typography>
        </Box>
    </>
}

export default BreadcrumbLink