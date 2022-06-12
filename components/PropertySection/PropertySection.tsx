import {Box, Pagination, Typography} from "@mui/material"
import {IPropertySection} from "../../src/Types"
import HouseCard from "../Cards/HouseCard"

const PropertySection = ({sectionTitle, totalCount, AllProperties} : IPropertySection) => {
    const capitalizeString = (s : string) => s && s[0].toUpperCase() + s.slice(1)
   // first we limit the number of products per page
    const itemsPerPage = 9
   // then we calculate how many pages we have and round it (35.5 => 36)
    const totalPages = Math.round(totalCount / itemsPerPage)
    const numberOfButtons = Math.ceil(totalPages)

    return (
        <Box
            component='section'
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            mt: '2em'
        }}>

        { AllProperties && AllProperties.length > 0 ?
        <>
       
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
                {AllProperties.length || '0'} {sectionTitle || 'propertie'}s
            </Typography>
            
            </> : <Typography fontWeight='500' fontSize='1.3em' color='#ff0000d6'>
                Sorry! No products were found.</Typography> }
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

                {AllProperties && AllProperties.map(prop => {
                    
                    if (!prop.id) {
                        return
                    }
                    return <HouseCard
                    
                        id={prop.id}
                        type={prop.type}
                        baths={prop.bathrooms}
                        rooms={prop.rooms}
                        price={prop.price}
                        propertySize={prop.propertySize}
                        img={prop.images[0] || prop.images[1]}
                        title={prop.title}
                        location={prop.location}
                        currency={prop.currency}
                        key={prop.id}
                        isMinWidthDisabled={true}
                        width={{
                        xs: '98%',
                        sm: '49%',
                        md: '32.5%'
                    }}/>
                })
}

            </Box>
         <Box
                sx={{
                my: '4em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Pagination
                    count={numberOfButtons || 1}
                    shape="rounded"/>
            </Box>
        </Box>
    )
}

export default PropertySection