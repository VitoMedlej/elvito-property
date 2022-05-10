import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material"
import OutlinedInput from '@mui/material/OutlinedInput';
import AccountRequiredNote from "../components/SubmitProperty/AccountRequiredNote"
import DetailsSection from "../components/SubmitProperty/DetailsSection";

const propertyTypes = ['apartment', 'villa', 'comercial', 'land', 'chalet']
const currencies = ['USD', 'EUR', 'LBP']
const styles = {
    width: '100%',
    display: 'flex',
    gap: '1em',
    flexWrap: 'wrap'
}
const keywords = [
    'cheap',
    'clean',
    'for sale',
    'sale',
    'beirut',
    'family house',
    'villa',
    'for rent',
    'wide area',
    'backyard',
    'garden',
    'garage',
    'maids room',,
    'furnished',
    'modern'
]
const RentFrequency = ['Annually', 'Monthy', 'Weekly']
const paymentMethods = ['Cash', 'Cheque', 'Credit/Debit Card']
const textFieldStyles = {
    width: {
        xs: '100%',
        sm: '48%',
        md: '32%'
    }
}

const submitProperty = () => {
    return (

        <Box
            maxWidth="lg"
            sx={{
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
            mt: '3em',
            minHeight: '90vh',
            mx: {
                xs: '3vw',
                lg: 'auto'
            }
        }}>
            {false && <AccountRequiredNote/>}
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
                    Main Details
                </Typography>
                <Box sx={{
                    ...styles
                }}>

                    <TextField
                        sx={{
                        ...textFieldStyles
                    }}
                        size='small'
                        id="PropertyTitle"
                        label="Property title"
                        variant="outlined"/>
                    <TextField
                        select
                        sx={{
                        ...textFieldStyles
                    }}
                        size='small'
                        id="outlined-basic-state"
                        label="State"
                        variant="outlined">
                        <MenuItem value={'active'}>
                            <Typography>
                                active
                            </Typography>
                        </MenuItem>
                        <MenuItem value={'inactive'}>
                            <Typography>
                                inactive
                            </Typography>
                        </MenuItem>

                    </TextField>
                    <TextField
                        required
                        sx={{
                        ...textFieldStyles
                    }}
                        size='small'
                        id="outlined-basic-type"
                        label="type"
                        select
                        variant="outlined">
                        {propertyTypes.map(type => {

                            return <MenuItem key={type}>
                                <Typography>
                                    {type}
                                </Typography>
                            </MenuItem>
                        })}

                    </TextField>

                    <Box sx={{
                        ...styles
                    }}>

                        <TextField
                            sx={{
                            ...textFieldStyles
                        }}
                            size='small'
                            required
                            id="outlined-basic-currency"
                            label="currency"
                            select
                            variant="outlined">
                            {currencies.map(currency => {
                                return <MenuItem key={currency}>
                                    <Typography>
                                        {currency}
                                    </Typography>
                                </MenuItem>
                            })}

                        </TextField>
                        <TextField
                            sx={{
                            ...textFieldStyles
                        }}
                            type="number"
                            size='small'
                            id="price"
                            label="Price (numbers only)"
                            variant="outlined"/>

                        <TextField
                            sx={{
                            ...textFieldStyles
                        }}
                            size='small'
                            id="sizes"
                            label="Property Size (provide unit)"
                            variant="outlined"/> {true && <TextField
                            sx={{
                            ...textFieldStyles
                        }}
                            size='small'
                            required
                            id="outlined-basic-rentFreq"
                            label="Rent frequency"
                            select
                            variant="outlined">
                            {RentFrequency.map(frequency => {
                                return <MenuItem key={frequency}>
                                    <Typography>
                                        {frequency}
                                    </Typography>
                                </MenuItem>
                            })}

                        </TextField>
}
                        <FormControl
                            size='small'
                            sx={{
                            ...textFieldStyles
                        }}>
                            <InputLabel id="demo-multiple-name-label">Key words</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label2"
                                id="demo-multiple-name2"
                                multiple
                                value={[]}
                                input={< OutlinedInput label = "keywords" />}>
                                {keywords.map((word) => (
                                    <MenuItem key={word} value={word}>
                                        {word}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            required
                            sx={{
                            ...textFieldStyles
                        }}
                            size='small'
                            id="outlined-basic-paymentMethod"
                            label="Payment Method"
                            select
                            variant="outlined">
                            {paymentMethods.map(method => {

                                return <MenuItem key={method}>
                                    <Typography>
                                        {method}
                                    </Typography>
                                </MenuItem>
                            })}

                        </TextField>

                    </Box>
                </Box>

            </Box>

            <DetailsSection title='Property Description'>
                <TextField
                    id="outlined-multiline-Description"
                    label="Description"
                    multiline
                    rows={4}
                    sx={{
                    width: {
                        xs: '100%',
                        sm: '99%'
                    }
                }}/>
            </DetailsSection>

            {true && <DetailsSection title='Property Features' >
                <TextField
                    sx={{
                    ...textFieldStyles
                }}
                    size='small'
                    type='number'
                    InputProps={{
                    inputProps: {
                        min: 0,
                        max: 15
                    }
                }}
                    id="PropertyBathrooms"
                    label="Bathrooms"
                    variant="outlined"/>

                <TextField
                    sx={{
                    ...textFieldStyles
                }}
                    size='small'
                    type='number'
                    InputProps={{
                    inputProps: {
                        min: 0,
                        max: 15
                    }
                }}
                    id="PropertyBedrooms"
                    label="Bedrooms"
                    variant="outlined"/>

                <TextField
                    sx={{
                    ...textFieldStyles
                }}
                    size='small'
                    type='number'
                    InputProps={{
                    inputProps: {
                        min: 0,
                        max: 15
                    }
                }}
                    id="PropertyBalconies"
                    label="Balconies"
                    variant="outlined"/>
                <TextField
                    size='small'
                    label="Furnished"
                    sx={{
                    ...textFieldStyles
                }}
                    select>
                    <MenuItem>
                        <Typography>
                            Furnished
                        </Typography>
                    </MenuItem>

                    <MenuItem>
                        <Typography>
                            Not Furnished
                        </Typography>
                    </MenuItem>
                </TextField>
            </DetailsSection>}

    

        </Box>
    )
}

export default submitProperty