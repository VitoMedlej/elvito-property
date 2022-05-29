import {ChangeEvent, useState} from 'react'
import {IFormData} from '../Types'

const defaultFormState : IFormData = {
    balconies: 0,
    bathrooms: 0,
    coverPhoto: "",
    createdAt: '',
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

    const handleInputChange = (e : any, isNumber?: boolean) => {
        let value = e.target
            ?.value
        if (value) {

            if (isNumber && typeof(value) !== 'number') 
                value = JSON.parse(value)
            setFormData({
                ...formData,
                [e.target.name]: value
            })
        }
    }
    const handleOwnerDetailsChange = (e : any) => {
        const value = e.target
            ?.value

        setFormData({
            ...formData,
            ownerDetails: {
                ...formData.ownerDetails,
                [e.target.name]: value
            }
        })
    }
    const handleImageChange = async(imagesArray : string[]) => {
        await setFormData({
            ...formData,
            images: imagesArray,
            coverPhoto: imagesArray[0]
        })
    }
    const handleBoolChange = (e : ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {
        let bool = `${e.target.value}`
        // weird chunk of code ik ,just checking if the string is a boolean and then parse it
        if (bool && bool === 'false' || bool === 'true') { 
            setFormData({
                ...formData,
                [e.target.name]: JSON.parse(`${bool}`)
            })
            return
        }
    }
    const handleSubmit = async() => {
        let today = new Date().toLocaleDateString()

        setFormData({
            ...formData,
            createdAt: today
        })

        if (formData) {

            const request = await fetch('api/submit-property', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const response = await request.json()
            console.log('response: ', response);

        }

    }
    return {
        handleImageChange,
        handleSubmit,
        handleBoolChange,
        handleOwnerDetailsChange,
        handleInputChange,
        formData
    }
}

export default FormHandlingHook