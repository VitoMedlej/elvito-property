import {
    Box,
    Button,
    Fade,
    IconButton,
    MenuItem,
    Popover,
    Popper,
    TextField,
    Typography
} from "@mui/material"
import {useState} from "react"
import DesktopFilterSection from "./FilterOptions/DesktopFilterSection"

import SearchBox from "./SearchBox"

const FilterBar = () => {


    return (
        <Box
            maxWidth='lg'
            sx={{
            width: '100%',
            margin: '0 auto',
            height: '50px',
            pt: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: {
                xs: 'space-between',
                md: 'left'
            }
        }}>
            <SearchBox/>
            <DesktopFilterSection/>

            <Box>
                <Button
                    
                    sx={{
                    py: '7px',
                    mx : '5px',
                    background: 'transparent',
                    color: '#d42c2a',
                    border: '1px solid #d42c2a',
                    ':hover': {
                        border: '1px solid #d42c2a',
                        background: '#d42c2a',
                        color: 'white'
                    }
                }}
                    variant='outlined'
                    size='small'>

                    <Typography
                        fontWeight='500'
                        fontSize={{
                        xs: '12px'
                    }}>
                        More Filters

                    </Typography>
                </Button>

            </Box>
        </Box>
    )
}

export default FilterBar