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
import AccountRequiredNote from "../components/SubmitProperty/AccountRequiredNote"
import DetailsSection from '../components/SubmitProperty/DetailsSection';
import ImageGalleryForm from '../components/SubmitProperty/Forms/ImageGalleryForm';
import CustomInput from "../components/SubmitProperty/Forms/CustomInput";
import FormHandlingHook from "../src/Hooks/FormHandlingHook";
import staticData from '../staticData.json'
import { useContext, useEffect } from "react";
import { Session } from "./_app";

const {
    propertyTypes,
    currencies,
    paymentMethods,
    RentFrequency,
    styles,
    keywords,
    textFieldStyles
} = staticData[0]

const SubmitProperty = () => {
    const {
        handleImageChange,
        handleSubmit,
        handleOwnerDetailsChange,
        handleBoolChange,
        handleInputChange,
        imagesString,
        setFormData,
        formData
    } = FormHandlingHook();
    const {session} = useContext(Session);
   
    const isAuthed = session && session.id 
    useEffect(() => {
        if (isAuthed && session.email && session.name) {
           
            setFormData({
                ...formData,
                ownerDetails: {
                    ...formData.ownerDetails,
                    ownerId: `${session.id}`,
                    ownerName: `${session.name}`,
                    ownerEmail: `${session.email}`,
                    ownerPhoneNumber: `${session.userPhone || ''}`,
                    ownerProfileImage: `${session.image}`
                }
            })
        }
    }, [session,isAuthed])



    return (

        <Box
            onSubmit={async(e : any) => {
            e.preventDefault();
            if (isAuthed) 
                handleSubmit();
            }}
            component='form'
            maxWidth="lg"
            sx={{
            boxShadow: isAuthed
                ? 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px'
                : '',
            my: '3em',
            minHeight: '90vh',
            mx: {
                xs: '3vw',
                lg: 'auto'
            }
        }}>
            {isAuthed
                ? <Box>
                        <DetailsSection title='Main Details'>
                            <CustomInput
                                value={`${formData.title}`}
                                name='title'
                                onChange={handleInputChange}
                                label='Property title'/>

                            <CustomInput
                                label="State"
                                name='state'
                                value={`${formData.state}`}
                                onChange={handleInputChange}>

                                {['active', 'inactive'].map(state => {

                                    return <MenuItem value={state} key={state}>
                                        <Typography>
                                            {state}
                                        </Typography>
                                    </MenuItem>
                                })}

                            </CustomInput>
                            <CustomInput
                                label="type"
                                name='type'
                                value={`${formData.type}`}
                                onChange={handleInputChange}>

                                {propertyTypes?.map(type => {

                                    return <MenuItem value={type} key={type}>
                                        <Typography>
                                            {type}
                                        </Typography>
                                    </MenuItem>
                                })}

                            </CustomInput>

                            <Box
                                sx={{
                                ...styles
                            }}>
                                <CustomInput
                                    label="currency"
                                    name='currency'
                                    onChange={handleInputChange}
                                    value={`${formData.currency}`}>
                                    {currencies && currencies.map(currency => {
                                        return <MenuItem value={currency} key={currency}>
                                            <Typography>
                                                {currency}
                                            </Typography>
                                        </MenuItem>
                                    })}

                                </CustomInput>

                                <CustomInput
                                    onChange={handleInputChange}
                                    value={formData.price }
                                    name='price'
                                    type="number"
                                    InputProps={{
                                        inputProps: {
                                           min : 0,
                                            max: 100000000
                                        }
                                    }}
                                    label="Price (numbers only)"></CustomInput>

                                {formData.purpose === 'for-rent' && <CustomInput
                                    onChange={handleInputChange}
                                    value={`${formData.rentFrequency}`}
                                    name='rentFrequency'
                                    label="Rent frequency">
                                    {RentFrequency?.map(frequency => {
                                        return <MenuItem value={frequency} key={frequency}>
                                            <Typography>
                                                {frequency}
                                            </Typography>
                                        </MenuItem>
                                    })}

                                </CustomInput>
}

                                <CustomInput
                                    onChange={handleInputChange}
                                    value={formData.paymentMethod}
                                    name='paymentMethod'
                                    label="Payment Method">
                                    {paymentMethods?.map(method => {

                                        return <MenuItem value={method} key={method}>
                                            <Typography>
                                                {method}
                                            </Typography>
                                        </MenuItem>
                                    })}

                                </CustomInput>

                                <CustomInput
                                    onChange={handleInputChange}
                                    value={formData.location}
                                    name='location'
                                    label="Location"/>

                                <CustomInput
                                    onChange={handleInputChange}
                                    value={formData.purpose}
                                    name='purpose'
                                    label="Purpose">
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
                                </CustomInput>

                            </Box>
                        </DetailsSection>

                        <DetailsSection title='Property Description'>
                            <TextField
                                required
                                onChange={(e) => handleInputChange(e)}
                                value={formData.description}
                                name='description'
                                id="outlined-multiline-Description"
                                label="Description"
                                multiline
                                maxRows={12}
                                minRows={4}
                                sx={{
                                width: {
                                    xs: '100%',
                                    sm: '99%'
                                }
                            }}/>
                        </DetailsSection>

                        <DetailsSection title='Property Features'>

                            <CustomInput
                                onChange={handleInputChange}
                                value={formData.bathrooms}
                                name='bathrooms'
                                InputProps={{
                                inputProps: {
                                   
                                    max: 15
                                }
                            }}
                                type='number'
                                label="Bathrooms"/>

                            <CustomInput
                                onChange={handleInputChange}
                                value={formData.rooms}
                                name='rooms'
                                type='number'
                                InputProps={{
                                inputProps: {
                                    max: 15
                                }
                            }}
                                label="Bedrooms"/>

                            <CustomInput
                                onChange={handleInputChange}
                                value={formData.balconies}
                                name='balconies'
                                type='number'
                                InputProps={{
                                inputProps: {
                                    max: 15
                                }
                            }}
                                label="Balconies"/>
                            <CustomInput
                                onChange={handleBoolChange}
                                value={`${formData.isFurnished
                                ? 'true'
                                : 'false'}`}
                                name='isFurnished'
                                label="Furnished">
                                <MenuItem value={'true'}>
                                    <Typography>
                                        Furnished
                                    </Typography>
                                </MenuItem>
                                < MenuItem value={'false'}>
                                    <Typography>
                                        Not Furnished
                                    </Typography>
                                </MenuItem>
                            </CustomInput >

                            {/* <FormControl
                                size='small'
                                sx={{
                                ...textFieldStyles
                            }}>
                                <InputLabel id="demo-multiple-name-label">Key words</InputLabel>
                                <Select
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={[...formData.keywords]}
                                    name='keywords'
                                    labelId="demo-multiple-name-label2"
                                    id="demo-multiple-name2"
                                    multiple
                                    input={< OutlinedInput label = "keywords" />}>
                                    {keywords?.map((word) => (
                                        <MenuItem key={word} value={word}>
                                            {word}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl> */}
                            <CustomInput
                                onChange={handleInputChange}
                                value={formData.propertySize}
                                name='propertySize'
                                label="Property Size (provide unit)"/>
                        </DetailsSection>

                        <DetailsSection title='Contact Details'>
                            <CustomInput
                                onChange={handleOwnerDetailsChange}
                                name='ownerName'
                                value={formData.ownerDetails.ownerName}
                                type='text'
                                label="Name"/>
                            <CustomInput
                                name='ownerEmail'
                                
                                value={ formData.ownerDetails.ownerEmail}
                                onChange={handleOwnerDetailsChange}
                                type='email'
                                label="Email"/>

                            <CustomInput
                                onChange={handleOwnerDetailsChange}
                                name='ownerPhoneNumber'
                                type='number'
                                value={formData.ownerDetails.ownerPhoneNumber}
                                label="Phone Number"/>
                        </DetailsSection>

                        <ImageGalleryForm />
                        <DetailsSection title='Property Images (option 2)'>
                            <TextField
                                required
                                onChange={(e) => handleImageChange(e)}
                                value={`${imagesString}`}
                                name='images'
                                id="outlined-multiline-images"
                                label="images url"
                                multiline
                                rows={3}
                                sx={{
                                width: {
                                    xs: '100%',
                                    sm: '99%'
                                }
                            }}/>
                        </DetailsSection>     
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

                : <AccountRequiredNote/>}

        </Box>

    )
}

export default SubmitProperty