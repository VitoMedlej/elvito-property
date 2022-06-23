import {signIn, useSession} from "next-auth/react";
import { useRouter } from "next/router";
import {useState} from "react";

const LoginHook = () => {

    const {data: session} = useSession()
    const [isLoading,
        setLoading] = useState(false)
    const [password,
        setPassword] = useState('')
    const [error,
        setError] = useState('')
    const router = useRouter()
    const handleSubmit = async(event : React.FormEvent < HTMLFormElement >) => {
        try {
            event.preventDefault();
            setError('')
            if (session
                ?.user) {
                setError('You are already logged in. ')
                return
            }
            const data = new FormData(event.currentTarget);
            const email = `${data.get('email')}`.replace(/\s/g, '')
         
            
            if (!email || !password || password.length < 4) {
                setError('Please make sure to fill in the inputs .')
                return
            }
            setLoading(true)

            const status : any | undefined = await signIn('credentials', {
                userEmail: email,
                userPassword: password,
                redirect: false,
                redirectUrl: `${window.location.origin}/account/login`
            });
            

   
         
            console.log('status: ', status);
            if (status && status?.ok) {
                setLoading(false)
                
                router.push('/dashboard/main');
                
                return
            }
            if (status && 'url' in status) {
               router.push(status.url);
            }
            throw new Error('err')
        } catch (err) {
            setLoading(false)
            console.log('err here', err);
            setError('please check your credentials and try again')
            return
        }

    };

    return {error, password, setPassword, handleSubmit, isLoading}

}

export default LoginHook