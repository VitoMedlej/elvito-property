import {Box, Pagination, Typography} from "@mui/material"
import {IPropertySection} from "../../src/Types"
import HouseCard from "../Cards/HouseCard"

const PropertySection = ({sectionTitle} : IPropertySection) => {
    const capitalizeString = (s : string) => s && s[0].toUpperCase() + s.slice(1)
    return (
        <Box
            component='section'
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            mt: '2em'
        }}>

            <Typography
                sx={{
                fontWeight: '600',
                fontSize: {
                    xs: '1.1em',
                    sm: '1.3em',
                    md: '1.4em'
                }
            }}>
                {capitalizeString(sectionTitle || 'propertie')}s for sale and rent in lebanon
            </Typography>
            <Typography color='#000000ad'>
                35 {sectionTitle || 'propertie'}s
            </Typography>
            <Box
                sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: {
                    xs: 'center',
                    sm: "space-between"
                },
                mt: '2em'
            }}>
                <HouseCard
                    isMinWidthDisabled={true}
                    width={{
                    xs: '98%',
                    sm: '49%',
                    md: '32.5%'
                }}/>
                <HouseCard
                    isMinWidthDisabled={true}
                    width={{
                    xs: '98%',
                    sm: '49%',
                    md: '32.5%'
                }}/>
                <HouseCard
                    isMinWidthDisabled={true}
                    width={{
                    xs: '98%',
                    sm: '49%',
                    md: '32.5%'
                }}/>
                <HouseCard
                    isMinWidthDisabled={true}
                    width={{
                    xs: '98%',
                    sm: '49%',
                    md: '32.5%'
                }}/>
                <HouseCard
                    isMinWidthDisabled={true}
                    width={{
                    xs: '98%',
                    sm: '49%',
                    md: '32.5%'
                }}/>

            </Box>
            <Box
                sx={{
                    my:'4em',
                    display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Pagination count={4} shape="rounded"/>
            </Box>
        </Box>
    )
}

export default PropertySection