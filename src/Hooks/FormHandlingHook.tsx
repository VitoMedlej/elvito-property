import {useSession} from 'next-auth/react'
import {ChangeEvent, useState, useEffect} from 'react';
import {IFormData} from '../Types'

const FormHandlingHook = () => {
    const {data: session} = useSession()
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



    const [formData,
        setFormData] = useState < IFormData > (defaultFormState)
    const [imagesString,
        setImagesString] = useState('')

    const handleInputChange = (e : any, isNumber?: boolean) => {
        let value = e.target
            ?.value
        if (value) {
            // I genuinly have 0 idea why i wrote this **** ,it makes 0 sense bruh anyways
            // imma keep it just in case and I wanna look at it in the future to laugh at my
            // self
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
    const handleImageChange = async(e : ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {
        //   console.log('imagesString: ', imagesString);     let foo =
        // imagesString.split("\n"); one might wonder wth am i saving all the images url
        // in a string ,well idk either const imagesArray = images       .split(' ')[0]
        //    .split('\n');
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

        if (!session || !session
            ?.id) {
            return
        }


        if (formData) {

            const request = await fetch('api/submit-property', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const response = await request.json()
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
