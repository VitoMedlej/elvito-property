import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useState} from "react";

const LoginHook = () => {
    const router = useRouter()
    const {data: session} = useSession()
    const [isLoading,
        setLoading] = useState(false)
    const [error,
        setError] = useState('')

    const handleSubmit = async(event : React.FormEvent < HTMLFormElement >) => {
        try {
            event.preventDefault();

            if (session
                ?.user) {
                setError('You are already logged in. ')

                return
            }
            const data = new FormData(event.currentTarget);
            const email = data.get('email')
            const password = `${data.get('password')}`

            if (!email || !password || password.length < 4) {
                setError('Please make sure to fill in the inputs .')
                return
            }
            setLoading(true)
            const status : any | undefined = await signIn('credentials', {
                redirect: false,
                userEmail: email,
                userPassword: password
            });
            console.log('status: ', status);
            setLoading(false)
            if (status && status
                ?.ok) {
                router.push('/dashboard/' + status.user.name)
                return
            }
            setError('please check your credentials and try again')
            return
        } catch (err) {
            setLoading(false)
            console.log('err here', err);

            setError('please check your credentials and try again')
            return
        }

    };

    return {error, handleSubmit, isLoading}

}

export default LoginHook