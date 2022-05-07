import {Grid, Box} from "@mui/material"

const register = () => {

    return (
        <Box>
            <Box maxWidth='lg' sx={{
                m: '0 auto'
            }}>
                <Grid
                    
                    sx={{
                    mx: {
                        xs: '3vw',
                        lg: 'auto'
                    },
                    my: '5em',
                    justifyContent: 'center'
                }}>

                    <Grid item xs={12} sm={7} md={5}>
                        Hello world {/* {handler === 'login' && <LoginForm/>}
                        {handler === 'register' && <RegisterForm/>} */}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default register
