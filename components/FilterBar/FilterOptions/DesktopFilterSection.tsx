import {
    Box,
    Typography,
    TextField,
    MenuItem,
    SelectChangeEvent,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    OutlinedInput,
    Select,
    Backdrop
} from "@mui/material"
import {useState} from "react"
import FilterOption from "./FilterOption"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';



export const defaultState = {
    isPriceFilterOpen: false,
    isTypeFilterOpen: false,
    isBedsFilterOpen: false
}
const propertyTypes = ['lands', 'apartments', 'comericals', 'chalets', 'villas'];
const pricesArray = [
    {
        price: '90k',
        value: 90000
    }, {
        price: '120k',
        value: 120000
    }, {
        price: '180k',
        value: 180000
    }, {
        price: '200k',
        value: 200000
    }, {
        price: '250k',
        value: 250000
    }, {
        price: '350k',
        value: 350000
    }, {
        price: '380k',
        value: 380000
    }, {
        price: '400k',
        value: 400000
    }, {
        price: '500k',
        value: 500000
    }, {
        price: '600k',
        value: 600000
    }, {
        price: '800k',
        value: 800000
    }, {
        price: '1M',
        value: 1000000
    }, {
        price: '1.4M',
        value: 1400000
    }, {
        price: '1.8M',
        value: 1800000
    }, {
        price: '+2M',
        value: 2000000
    }
]

const DesktopFilterSection = () => {
    const [isBackDropOpen,setBackDropOpen] = useState(false)
    const [personName,
        setPersonName] = useState < string[] > ([]);
    const [filterStates,
        setFilterStates] = useState(defaultState)
    const handleChange = (event : SelectChangeEvent < typeof personName >) => {
        const {target: {
                value
            }} = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string'
            ? value.split(',')
            : value,);
    };
    const BackDropHandler = () => {
        setBackDropOpen(!isBackDropOpen)
    }
    

    return (
        <Box
            sx={{
            display: {
                xs: 'none',
                md: ' flex'
            }
        }}>
            <Backdrop
                sx={{background:'transparent',display:{xs:'none',md:'block'}}}
                open={isBackDropOpen}
                onClick={()=>{
                setFilterStates(defaultState)
                setBackDropOpen(false);
                }}
            />
            <FilterOption
                name={'isPriceFilterOpen'}
                title='Filter By Price'
                buttonText='price'
                BackDropHandler={BackDropHandler}
                isOpen={filterStates.isPriceFilterOpen}
                
                setOpen={setFilterStates}>
                <Box sx={{zIndex:'51251251'}}>
                    <TextField
                    id="filled-select-currency"
                    select
                    label="Min"
                    value={90000}
                    size='small'
                    sx={{
                    mx: '5px',
                    width: '100px'
                }}
                    variant="outlined">

                    {pricesArray
                        .filter(price => price.value < 380000)
                        .map(price => {
                            return <MenuItem  key={price.value} value={price.value}>
                                {price.price}
                            </MenuItem>
                        })}
                </TextField>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Max"
                    value={2000000}
                    size='small'
                    sx={{
                    mx: '5px',
                    width: '100px'
                }}
                    variant="outlined">
                    {pricesArray
                        .filter(price => price.value > 380000)
                        .map(price => {
                            return <MenuItem key={price.price} value={price.value}>
                                {price.price}
                            </MenuItem>
                        })}
                </TextField>
            </Box>

        </FilterOption>

        <FilterOption
        BackDropHandler={BackDropHandler}
            name={'isTypeFilterOpen'}
            title='Filter By Type '
            buttonText='Property Type'
            isOpen={filterStates.isTypeFilterOpen}
            setOpen={setFilterStates}>
            <FormControl
                sx={{
                m: 1,
                width: 300
            }}>
                <InputLabel id="demo-multiple-checkbox-label2">Type</InputLabel>
                <Select
                    size='medium'
                    labelId="demo-multiple-checkbox-label2"
                    id="demo-multiple-checkbox2"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={< OutlinedInput label = "Type" />}
                    renderValue={(selected) => selected.join(', ')}>
                    {propertyTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            <Checkbox checked={personName.indexOf(type) > -1}/>
                            <ListItemText primary={type}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </FilterOption>

        <FilterOption
        BackDropHandler={BackDropHandler}
            name='isBedsFilterOpen'
            buttonText={`Beds & baths`}
            isOpen={filterStates.isBedsFilterOpen}
            setOpen={setFilterStates}>
            <Box>
                <>
                    <Typography
                    fontWeight='500'
                    sx={{
                    py: '1.1em'
                }}>
                    Bedrooms
                </Typography>
                <TextField
                    id="filled-select-currency2"
                    select
                    label="Min"
                    value={1}
                    size='small'
                    sx={{
                    mx: '5px',
                    width: '100px'
                }}
                    variant="outlined">

                    {[
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                    ].map(bed => {
                        return <MenuItem key={bed} value={bed}>
                            {`${bed}`}
                        </MenuItem>
                    })}
                </TextField>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Max"
                    value={9}
                    size='small'
                    sx={{
                    mx: '5px',
                    width: '100px'
                }}
                    variant="outlined">
                    {[
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9
                    ].map(bed => {
                        return <MenuItem key={bed} value={bed}>
                            {bed}
                        </MenuItem>
                    })}
                </TextField>
            </>
            <>
                <Typography
                fontWeight='500'
                sx={{
                py: '1.1em',
                pt: '1.5em'
            }}>
                Bathrooms
            </Typography>
            <TextField
                id="filled-select-currency2"
                select
                label="Min"
                value={1}
                size='small'
                sx={{
                mx: '5px',
                width: '100px'
            }}
                variant="outlined">

                {[
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ].map(bath => {
                    return <MenuItem
                    key={bath} value={bath}>
                        {`${bath}`}
                    </MenuItem>
                })}
            </TextField>
            <TextField
                id="filled-select-currency"
                select
                label="Max"
                value={9}
                size='small'
                sx={{
                mx: '5px',
                width: '100px'
            }}
                variant="outlined">
                {[
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ].map(bath => {
                    return <MenuItem key={bath} value={bath}>
                        {bath}
                    </MenuItem>
                })}
            </TextField>
        </>

    </Box>
</FilterOption>

</Box>

    )
}

export default DesktopFilterSection