import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {ChangeEvent, useState} from "react";

const RegisterHook = () => {
    const {data: session} = useSession()
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
            if (session
                ?.user) {
                setError('You are already logged in. ')

                return
            }

            if (!`${formData
                ?.userEmail}`.includes('@')) {
                setError('Please make sure to enter a vaild email')
                return
            }
            if (!formData || !formData.userName || !formData.userEmail || formData.userPassword.length < 4) {
                setError('Please make sure to fill in the inputs.')
                return
            }
            if (`${formData.userPassword}`.length < 4 || formData.userPassword === formData.userName) {
                setError('Please make sure your password is strong enough')
                return
            }
            setLoading(true)
            const request = await fetch('http://localhost:3000/api/create-user', {
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
            setError(`${response.message}`)

        } catch (err) {
            setLoading(false)
            setError('Error')
            console.log('err here', err);
            return

        }
    };
    return {error, formData, handleChange, isLoading, handleSubmit}
}

export default RegisterHook