import {Box, Typography} from "@mui/material"
import {IDetailsSection} from "../../src/Types"

const styles = {
    width: '100%',
    display: 'flex',
    gap: '1em',
    flexWrap: 'wrap'
}
const DetailsSection = ({title, children, sx} : IDetailsSection) => {
    return (
        <Box
            sx={{
            p: {
                xs: '.8em',
                sm: '1.5em 1em',
                md: ' 2em 1em'
            }
        }}>
            <Typography
                fontWeight='500'
                fontSize='1.2em'
                sx={{
                py: '1em'
            }}>
                {title}
            </Typography>
            <Box sx={{
                ...styles,
                ...sx
            }}>
                {children}
            </Box>
        </Box>
    )
}

export default DetailsSection