import {ChangeEvent, useState} from 'react';
import {IFormData} from '../Types'

const FormHandlingHook = () => {
    let today = new Date().toLocaleDateString()

    const defaultFormState : IFormData = {
        balconies: 0,
        bathrooms: 0,
        createdAt: `${today}`,
        currency: "USD",
        description: "",
        isFurnished: false,
        images: [''],
        keywords: [],
        location: "",
        ownerDetails: {
            ownerId: '',
            ownerName: '',
            ownerEmail: '',
            ownerPhoneNumber: "",
            ownerProfileImage: ''
        },
        paymentMethod: "",
        price: '',
        propertySize: "",
        purpose: "for-rent",
        rentFrequency: "",
        rooms: 0,
        slug: "",
        state: "active",
        title: "",
        type: ""
    }

    const [formData,
        setFormData] = useState < IFormData > (defaultFormState)
    const [imagesString,
        setImagesString] = useState('')

    const handleInputChange = (e : any, isTypeNumber?: boolean) => {
        let value = `${e.target
            ?.value}`

        // incase we have '5' change it to 5

        if (value && isTypeNumber && !isNaN(e.target.value) && typeof value !== 'number') {

            value = JSON.parse(value)
        }
        // in case the user is a troublemaker and changed the value to -1 Bathrooms
        if (!isNaN(e.target.value) && e.target.value < 0) {
            value = ''
        }
        setFormData({
            ...formData,
            [e.target.name]: value
        })

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
    const handleImageChange = async(e : ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {

        const imagesArray = `${e
            .target
            .value}`
            .split(' ')[0]
            .split('\n');

        setImagesString(e.target.value)
        await setFormData({
            ...formData,
            images: imagesArray

        })
    }
    const handleBoolChange = (e : ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {
        let bool = `${e.target.value}`
        // weird chunk of code ik ,just checking if the string is a boolean and then
        // parse it
        if (bool && bool === 'false' || bool === 'true') {
            setFormData({
                ...formData,
                [e.target.name]: JSON.parse(`${bool}`)
            })
            return
        }
    }
    const handleSubmit = async() => {

        if (formData) {

            const request = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/submit-property`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (request.status === 200) {
                setFormData(defaultFormState)
                setImagesString('')
            }

        }

    }
    return {
        handleImageChange,
        handleSubmit,
        handleBoolChange,
        handleOwnerDetailsChange,
        handleInputChange,
        formData,
        setFormData,
        imagesString
    }
}

export default FormHandlingHook
