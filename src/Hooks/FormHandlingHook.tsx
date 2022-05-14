import {useState} from 'react'
import {IFormData} from '../Types'
const defaultFormState = {
    balconies: 0,
    bathrooms: 0,
    coverPhoto: "",
    createdAt: 0,
    currency: "USD",
    description: "",
    isFurnished: false,
    images: [],
    keywords: [],
    location: "",
    ownerDetails: {
        ownerId: "",
        ownerName: "",
        ownerEmail: "",
        ownerPhoneNumber: "",
        ownerProfileImage: ""
    },
    paymentMethod: "",
    price: 0,
    propertySize: "",
    purpose: "for-rent",
    rentFrequency: "",
    rooms: 0,
    slug: "",
    state: "active",
    title: "",
    type: ""
}
const FormHandlingHook = () => {
    const [formData,
        setFormData] = useState < IFormData > (defaultFormState)

    const handleInputChange = (e : any) => {
        const value = e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }
    const handleOwnerDetailsChange = (e : any) => {
        const value = e.target.value

        setFormData({
            ...formData,
            ownerDetails: {
                ...formData.ownerDetails,
                [e.target.name]: value
            }
        })
    }
    const handleImageChange = (imagesArray : string[]) => {
        setFormData({
            ...formData,
            images: imagesArray,
            coverPhoto: imagesArray[0]
        })
    }
    return {handleImageChange, handleOwnerDetailsChange, handleInputChange, formData}
}

export default FormHandlingHook