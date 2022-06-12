import {Box, Breadcrumbs, Typography} from "@mui/material"
import Link from "next/link"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import {IBreadcrumb} from "../../src/Types";
import BreadcrumbLink from "./BreadcrumbLink";

const Breadcrumb = ({category, title} : IBreadcrumb) => {

    return (

        <Box
            sx={{
            py: '1em',
            display: 'flex',
            alignItems: 'center'
        }}>

            <Breadcrumbs aria-label="breadcrumb">
                <Link href="/">
                    Home
                </Link>
                <Link href={`/real-estate-and-homes/${category}`}>
                    {category + 's'}
                </Link>
                <Typography color="text.primary">{title}</Typography>
            </Breadcrumbs>
        </Box>
    )
}

export default Breadcrumb