import {Box, Typography, TextField, MenuItem} from "@mui/material"
import {useState} from "react"
import FilterOption from "./FilterOption"

const DesktopFilterSection = () => {

    const [filterOptionState,
        setFilterOptionState] = useState(false)
        
    const [filterOptionState2,
        setFilterOptionState2] = useState(false)
    return (
        <Box sx={{
            display: {xs:'none',md:' flex'}
        }}>
            <FilterOption
                title='Filter By Price'
                buttonText='price'
                isOpen={filterOptionState}
                setOpen={setFilterOptionState}>
          
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
            
            </FilterOption>
            <FilterOption
                title='Filter By Type '
                buttonText='Property Type'
                isOpen={filterOptionState2}
                setOpen={setFilterOptionState2}>
           
            </FilterOption>
        </Box>

    )
}

export default DesktopFilterSection