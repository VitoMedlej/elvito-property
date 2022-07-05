import { TuserCreds } from "../Types";

const signIn = async (userCreds : TuserCreds) => {
    try {
        const req = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/authenticate-user`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(userCreds)
        })
        const res = await req.json()
        if (!res) throw new Error('Failed to log you in')
        return res
    }
    catch (err) {
        console.log('err 4.71: ', err);
        
    }
}
export default signIn