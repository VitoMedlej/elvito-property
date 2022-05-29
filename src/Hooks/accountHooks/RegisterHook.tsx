import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useState} from "react";

const RegisterHook = () => {
    const {data: session} = useSession()
    const [isLoading,
        setLoading] = useState(false)
    const [error,
        setError] = useState('')
    const router = useRouter()
    const handleSubmit = async(event : React.FormEvent < HTMLFormElement >) => {
        try {

            event.preventDefault();
            if (session
                ?.user) {
                setError('You are already logged in. ')

                return
            }
            const data = new FormData(event.currentTarget);
            const formData = {
                userName: data.get('username'),
                userEmail: data.get('email'),
                userPassword: data.get('password')
            }
            if (!formData || !formData.userName || !formData.userEmail || !formData.userPassword) {
                setError('Please make sure to fill in the inputs.')
                return
            }
            if (`${formData.userPassword}`.length < 4) {
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
            setError('Error ')

            console.log('response: ', response);
        } catch (err) {
            setLoading(false)
            setError('Error')
            console.log('err here', err);
            return

        }
    };
    return {error, isLoading, handleSubmit}
}

export default RegisterHook