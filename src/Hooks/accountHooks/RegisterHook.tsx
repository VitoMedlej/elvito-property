import {useRouter} from "next/router";
import {ChangeEvent, useState} from "react";

const RegisterHook = () => {
    const session = {user:''}

    const [isLoading,
        setLoading] = useState(false)
    const [error,
        setError] = useState('')
    const [formData,
        setFormData] = useState({userName: '', userEmail: '', userPassword: ''})
    const router = useRouter()

    const handleChange = (event : ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {
        const value = event.target as HTMLInputElement
        setFormData({
            ...formData,
            [value.name]: `${value.value}`
        })
    }
    const handleSubmit = async(event : React.FormEvent < HTMLFormElement >) => {
        try {

            event.preventDefault();
            // some validations
            if (session
                ?.user) {
                throw 'You are already logged in. '
            }

            if (!`${formData
                ?.userEmail}`.includes('@')) {
                throw 'Please make sure to enter a vaild email'

            }
            if (!formData || !formData.userName || !formData.userEmail || formData.userPassword.length < 4) {
                throw 'Please make sure to fill in the inputs.'

            }

            if (`${formData.userPassword}`.length < 4 || formData.userPassword === formData.userName) {
                throw 'Please make sure your password is strong enough'

            }
            setLoading(true)
            const request = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/create-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            const response = await request.json()

            setLoading(false)

            if (request.status === 200) {

                router.push('/account/login')
                return
            }
            throw `${response.message}`

        } catch (err) {
            setLoading(false)
            setError(`${err}`)
            console.log('err here', err);
            return

        }
    };
    return {error, formData, handleChange, isLoading, handleSubmit}
}

export default RegisterHook