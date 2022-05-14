import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography
} from "@mui/material"
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from "react";
import AccountRequiredNote from "../components/SubmitProperty/AccountRequiredNote"
import DetailsSection from "../components/SubmitProperty/DetailsSection";
import ImageGalleryForm from '../components/SubmitProperty/Forms/ImageGalleryForm';



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
const defaultFormState = {}
const submitProperty = () => {
    const [formData,setFormData] = useState(defaultFormState)

    return (

        <Box
            onSubmit={(e : any)=>{
                e.preventDefault();
          
                
            }}
            component='form'
            maxWidth="lg"
            sx={{
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
            my: '3em',
            minHeight: '90vh',
            mx: {
                xs: '3vw',
                lg: 'auto'
            }
        }}>
            {false && <AccountRequiredNote/>}

            <DetailsSection title='Main Details'>
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

                    <TextField
                        
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

                    <TextField
                        
                        sx={{
                        ...textFieldStyles
                    }}
                        size='small'
                        id="outlined-basic-location"
                        label="Location"
                        type='text'
                        variant="outlined"/>

                </Box>
            </DetailsSection>

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

            {true && <DetailsSection title='Property Features'>
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

            </DetailsSection>}

            <DetailsSection title='Contact Details'>
                <TextField
                    sx={{
                    ...textFieldStyles
                }}
                    size='small'
                    type='text'
                    id="ContactName"
                    label="Name"
                    
                    variant="outlined"/>
                <TextField
                    sx={{
                    ...textFieldStyles
                }}
                    
                    size='small'
                    type='email'
                    id="ContactEmail"
                    label="Email"
                    autoComplete=''
                    variant="outlined"/>

                <TextField
                    sx={{
                    ...textFieldStyles
                }}
                    
                    size='small'
                    InputProps={{
                    inputProps: {
                        min: 1,
                        max: 30
                    }
                }}
                    id="ContactPhone"
                    label="Phone Number"
                    variant="outlined"/>
            </DetailsSection>

        <ImageGalleryForm/>


            <DetailsSection
                sx={{
                mx: '0 auto',
                justifyContent: 'center'
            }}
                title=''>
                <Button
                    type='submit'
                    sx={{
                    background: '#d42c2a',
                    width: {
                        xs: '100%',
                        sm: '300px'
                    },
                    ':hover': {
                        background: '#bb0806'
                    },
                    color: 'white'
                }}>
                    Submit
                </Button>
            </DetailsSection>
        </Box>
    )
}

export default submitProperty