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
import id from "../../pages/real-estate-and-homes/[id]"
import SearchBox from "./SearchBox"

const FilterBar = () => {
    const [isOpen,
        setOpen] = useState(false)

    const [anchorEl,
        setAnchorEl] = useState < null | HTMLElement > (null);

    const handleClose = () => {
        setOpen(false)
    }
    const handleClick = (event : React.MouseEvent < HTMLElement >) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };
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
            <Box
                sx={{
                background: 'white',
               
            }}>
                <Button
                    onClick={(e) => handleClick(e)}
                    sx={{
                    py: '4px',
                    color: '#d42c2a',
                    border: '1px solid #d42c2a',
                    ':hover': {
                        background: '#c10d0b',
                        border: '1px solid #d42c2a',
                        color: 'white'
                    }
                }}
                    size='small'
                    variant='outlined'>Price</Button>
            

            <Popper id={'id'} open={isOpen} anchorEl={anchorEl} transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps}>
                    <Box
                    sx={{background:'white',px:'1em',pb:'2em',mt:'1em',boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}}
                    >
                        <Typography fontWeight='500' sx={{py:'1.1em'}}>
                            Filter by price
                        </Typography>
                        <TextField
                            id="filled-select-currency"
                            select
                            label="Min"
                            value={0}
                            size='small'
                            sx={{
                            width: '100px'
                        }}
                            variant="outlined">
                            <MenuItem value='foo'>
                                foo
                            </MenuItem>
                            <MenuItem value='foo'>
                                foo
                            </MenuItem>
                            <MenuItem value='foo'>
                                foo
                            </MenuItem>
                        </TextField>
                        <TextField
                            id="filled-select-currency"
                            select
                            label="Max"
                            value={'foo'}
                            size='small'
                            sx={{
                            width: '100px'
                        }}
                            variant="outlined">
                            <MenuItem value='foo'>
                                foo
                            </MenuItem>
                            <MenuItem value='foo'>
                                foo
                            </MenuItem>
                            <MenuItem value='foo'>
                                foo
                            </MenuItem>
                        </TextField>
                    </Box>
                    </Fade>
                )}
            </Popper>

            
            </Box>
            
            {/* <Box>

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

            </Box> */}
        </Box>
    )
}

export default FilterBar