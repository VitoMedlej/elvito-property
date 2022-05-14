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
import {useState} from "react";
import AccountRequiredNote from "../components/SubmitProperty/AccountRequiredNote"
import DetailsSection from '../components/SubmitProperty/DetailsSection';
import ImageGalleryForm from '../components/SubmitProperty/Forms/ImageGalleryForm';
import TextInput from "../components/SubmitProperty/Forms/TextInput";
import FormHandlingHook from "../src/Hooks/FormHandlingHook";

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
    const {handleImageChange, handleOwnerDetailsChange, handleInputChange, formData} = FormHandlingHook()

    return (

        <Box
            onSubmit={(e : any) => {
            e.preventDefault();
            console.log(formData)
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
                {/* <TextField
                    sx={{
                    ...textFieldStyles
                }}
                    value={formData.title}
                    onChange={(e) => handleInputChange(e)}
                    name='title'
                    size='small'
                    id="PropertyTitle"
                    label="Property title"
                    variant="outlined"/> */}
                    <TextInput value={formData.title}
                    name='title'
                    handleChangeEvent={handleInputChange}
                    label='Property title'
                    />

                <TextField
                    select
                    sx={{
                    ...textFieldStyles
                }}
                    size='small'
                    onChange={(e) => handleInputChange(e)}
                    value={`${formData.state}`}
                    id="outlined-basic-state"
                    label="State"
                    name='state'
                    variant="outlined">
                    <MenuItem value={'active'}>
                        <Typography>
                            ready
                        </Typography>
                    </MenuItem>
                    <MenuItem value={'inactive'}>
                        <Typography>
                            inactive
                        </Typography>
                    </MenuItem>

                </TextField>
                <TextField
                    onChange={(e) => handleInputChange(e)}
                    value={`${formData.type}`}
                    sx={{
                    ...textFieldStyles
                }}
                    size='small'
                    id="outlined-basic-type"
                    label="type"
                    name='type'
                    select
                    variant="outlined">
                    {propertyTypes.map(type => {

                        return <MenuItem value={type} key={type}>
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
                        onChange={(e) => handleInputChange(e)}
                        value={`${formData.currency}`}
                        defaultValue={`${formData.currency}`}
                        sx={{
                        ...textFieldStyles
                    }}
                        name='currency'
                        size='small'
                        id="outlined-basic-currency"
                        label="currency"
                        select
                        variant="outlined">
                        {currencies.map(currency => {
                            return <MenuItem value={currency} key={currency}>
                                <Typography>
                                    {currency}
                                </Typography>
                            </MenuItem>
                        })}

                    </TextField>
                    <TextField
                        onChange={(e) => handleInputChange(e)}
                        value={formData.price}
                        sx={{
                        ...textFieldStyles
                    }}
                        name='price'
                        type="number"
                        size='small'
                        id="price"
                        label="Price (numbers only)"
                        variant="outlined"/>
                        
                        {formData.purpose === 'for-rent' && <TextField
                        sx={{
                        ...textFieldStyles
                    }}
                        onChange={(e) => handleInputChange(e)}
                        value={`${formData.rentFrequency}`}
                        size='small'
                        name='rentFrequency'
                        id="outlined-basic-rentFreq"
                        label="Rent frequency"
                        select
                        variant="outlined">
                        {RentFrequency.map(frequency => {
                            return <MenuItem value={frequency} key={frequency}>
                                <Typography>
                                    {frequency}
                                </Typography>
                            </MenuItem>
                        })}

                    </TextField>
}

                    <TextField
                        onChange={(e) => handleInputChange(e)}
                        value={formData.paymentMethod}
                        sx={{
                        ...textFieldStyles
                    }}
                        name='paymentMethod'
                        size='small'
                        id="outlined-basic-paymentMethod"
                        label="Payment Method"
                        select
                        variant="outlined">
                        {paymentMethods.map(method => {

                            return <MenuItem value={method} key={method}>
                                <Typography>
                                    {method}
                                </Typography>
                            </MenuItem>
                        })}

                    </TextField>

                    <TextField
                        onChange={(e) => handleInputChange(e)}
                        value={formData.location}
                        name='location'
                        sx={{
                        ...textFieldStyles
                    }}
                        size='small'
                        id="outlined-basic-location"
                        label="Location"
                        type='text'
                        variant="outlined"/>


                              <TextField
                        onChange={(e) => handleInputChange(e)}
                        value={formData.purpose}
                        sx={{
                        ...textFieldStyles
                    }}
                        size='small'
                        id="propertyPurpose"
                        name='purpose'
                        label="Purpose"
                        select
                        variant="outlined">
                            <MenuItem value='for-sale'>
                                <Typography>
                                    For Sale
                                </Typography>
                            </MenuItem>
                            <MenuItem value='for-rent'>
                                <Typography>
                                    For Rent
                                </Typography>
                            </MenuItem>
                        </TextField>

                </Box>
            </DetailsSection>

            <DetailsSection title='Property Description'>
                <TextField
                    onChange={(e) => handleInputChange(e)}
                    value={formData.description}
                    name='description'
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

             <DetailsSection title='Property Features'>
              {
                  formData.type !== 'land' &&
                  <>
               <TextField
                    onChange={(e) => handleInputChange(e)}
                    value={formData.bathrooms}
                    name='bathrooms'
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
                    onChange={(e) => handleInputChange(e)}
                    value={formData.rooms}
                    name='rooms'
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
                    onChange={(e) => handleInputChange(e)}
                    value={formData.balconies}
                    name='balconies'
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
                    onChange={(e) => handleInputChange(e)}
                    value={formData.isFurnished}
                    name='isFurnished'
                    size='small'
                    label="Furnished"
                    sx={{
                    ...textFieldStyles
                }}
                    select>
                    <MenuItem value={'true'}>
                        <Typography>
                            Furnished
                        </Typography>
                    </MenuItem>

                    <MenuItem value={'false'}>
                        <Typography>
                            Not Furnished
                        </Typography>
                    </MenuItem>
                </TextField>
                </>
                }

                <FormControl
                    size='small'
                    sx={{
                    ...textFieldStyles
                }}>
                    <InputLabel id="demo-multiple-name-label">Key words</InputLabel>
                    <Select
                        onChange={(e) => handleInputChange(e)}
                        value={formData.keywords}
                        name='keywords'
                        labelId="demo-multiple-name-label2"
                        id="demo-multiple-name2"
                        multiple
                        input={< OutlinedInput label = "keywords" />}>
                        {keywords.map((word) => (
                            <MenuItem key={word} value={word}>
                                {word}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    onChange={(e) => handleInputChange(e)}
                    value={formData.propertySize}
                    sx={{
                    ...textFieldStyles
                }}
                    size='small'
                    id="propertySize"
                    name='propertySize'
                    label="Property Size (provide unit)"
                    variant="outlined"/>
            </DetailsSection>

            <DetailsSection title='Contact Details'>
                <TextField
                    onChange={(e) => handleOwnerDetailsChange(e)}
                    name='ownerName'
                    sx={{
                    ...textFieldStyles
                }}
                    size='small'
                    type='text'
                    id="ContactName"
                    label="Name"
                    variant="outlined"/>
                <TextField
                    name='ownerEmail'
                    sx={{
                    ...textFieldStyles
                }}
                    value={formData.ownerDetails.ownerEmail}
                    onChange={(e) => handleOwnerDetailsChange(e)}
                    size='small'
                    type='email'
                    id="ContactEmail"
                    label="Email"
                    autoComplete=''
                    variant="outlined"/>

                <TextField
                    onChange={(e) => handleOwnerDetailsChange(e)}
                    name='ownerPhoneNumber'
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

            <ImageGalleryForm onChange={handleImageChange}/>

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