import {Box, Typography} from "@mui/material"
import Link from "next/link"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import {IBreadcrumb} from "../../src/Types";
import BreadcrumbLink from "./BreadcrumbLink";

const Breadcrumb = ({category, id} : IBreadcrumb) => {

    return (
        <Box
            sx={{
            py: '1em',
            display: 'flex',
            alignItems: 'center'
        }}>
            <Link href='/'>
                <Box
                    sx={{
                    cursor: 'pointer',
                    color: '#1976d2',
                    textDecoration: 'underline',
                    display: 'flex',
                    alignItems: 'center',
                    pr: '1em'
                }}>
                    <ArrowRightAltOutlinedIcon
                        sx={{
                        transform: 'rotate(180deg)'
                    }}/>
                    <Typography fontSize="15px">
                        Home
                    </Typography>
                </Box>

            </Link>
            <BreadcrumbLink href={`/real-estate-and-homes/fasf`} title={category + 's'}/>
            <BreadcrumbLink href={`/real-estate-and-homes/${category}/${id}`} title={id}/>
        </Box>
    )
}

export default Breadcrumb