import {Grid, Box} from "@mui/material"
import { useRouter } from "next/router"
import LoginForm from "../../components/Account/LoginForm/LoginForm"
import RegisterForm from "../../components/Account/RegisterForm/RegisterForm"

const Handler = () => {
    const router = useRouter()
    const {handler} = router.query
    const isHandlerValid = handler === `login` || handler === 'register'
    return (
        <Box>
        {isHandlerValid &&    <Box maxWidth='lg' sx={{
                m: '0 auto'
            }}>
                <Grid
                    container
                    sx={{
                    mx: {
                        sm: '3vw',
                        lg: 'auto'
                    },
                    my: '5em',
                    justifyContent: 'center'
                }}>

                    <Grid item xs={12} sm={8} md={6} lg={5.5}>
                        {handler === 'login' && <LoginForm/>}
                        {handler === 'register' && <RegisterForm/>}
                    </Grid>
                </Grid>
            </Box>}
        </Box>
    )
}

export default Handler
