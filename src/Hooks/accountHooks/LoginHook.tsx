import {useRouter} from "next/router";
import {useContext, useState} from "react";
import { Session } from "../../../pages/_app";
import signIn from "../../Functions/signIn";



const LoginHook = () => {
    const {session,setSession} = useContext(Session);

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
            if (session) {
                throw'You are already logged in.'
            }
            const data = new FormData(event.currentTarget);
            const email = `${data.get('email')}`.replace(/\s/g, '')

            if (!email || !password || password.length < 4) {
                throw 'Please make sure to fill in the inputs .'
                
            }
            setLoading(true)

            const results : any = await signIn({email, password});

          
         
            if (results && 'id' in results) {
                setLoading(false);
                setError('')
                setSession && setSession(results)
                router.push(`/dashboard/${results.id}/main`);
                return
            }
            throw `${results?.messageb || 'There was an error, Please try again later.'}`
        } catch (err) {
            setLoading(false)
            console.log('err here', err);
            setError(`${err}` || 'There was an error, Please try again later.')
            return
        }

    };

    return {error, password, setPassword, handleSubmit, isLoading}

}

export default LoginHook