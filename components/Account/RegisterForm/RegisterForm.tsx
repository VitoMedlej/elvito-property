import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    Grid,
    Typography,
    Container,
    CssBaseline,
    Box,
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button
} from '@mui/material';
import {Copyright} from '../LoginForm/LoginForm';

const theme = createTheme();

const RegisterFrom = () => {
    const handleSubmit = (event : React.FormEvent < HTMLFormElement >) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password')
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline/>
                <Box
                    sx={{
                    boxShadow: 'rgb(0 0 0 / 15%) 0px 8px 24px',
                    p: '2em 3em ',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar
                        sx={{
                        m: 1,
                        bgcolor: '#d42c2a'
                    }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{
                        mt: 3
                    }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Name"
                                    autoFocus
                                    label="Your Name"
                                    name="Name"
                                    autoComplete="name"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"/>
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant='contained'
                            sx={{
                            backgroundColor: "#d42c2a",
                            mt: 3,
                            border: "1px solid #d42c2a",
                            mb: 2,
                            ":hover": {
                                background: '#bb0806',
                                border: "1px solid #bb0806"
                            }
                        }}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item className='link'>
                                <Link href="/account/login">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{
                    mt: 5
                }}/>
            </Container>
        </ThemeProvider>
    );
}
export default RegisterFrom