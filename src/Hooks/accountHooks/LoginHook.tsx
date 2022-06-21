import {signIn, useSession} from "next-auth/react";
import {useState} from "react";

const LoginHook = () => {

    const {data: session} = useSession()
    const [isLoading,
        setLoading] = useState(false)
    const [password,
        setPassword] = useState('')
    const [error,
        setError] = useState('')

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
                redirect: false,
                userEmail: email,
                userPassword: password
            });
            console.log(email,password);
            

   
         
            console.log('status: ', status);
            if (status && status
                ?.ok) {
                setLoading(false)
                return
            }
            setError('please check your credentials and try again')
            setLoading(false)
            return
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