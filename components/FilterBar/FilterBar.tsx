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
    const [isOpen,
        setOpen] = useState(false)

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
                    onClick={() => setOpen(!isOpen)}
                    sx={{
                    py: '7px',
                    border: 'none',
                    background: '#d42c2a',
                    ':hover': {
                        background: '#c10d0b',
                        border: 'none'
                    }
                }}
                    variant='outlined'
                    size='small'>

                    <Typography
                        color='white'
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