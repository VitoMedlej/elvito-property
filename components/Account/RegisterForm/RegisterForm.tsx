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
import RegisterHook from '../../../src/Hooks/accountHooks/RegisterHook';

const theme = createTheme();

const RegisterFrom = () => {
    const {error, isLoading, handleChange,formData ,handleSubmit} = RegisterHook()

    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline/>
                <Box
                    sx={{
                    boxShadow: 'rgb(0 0 0 / 15%) 0px 8px 24px',
                    p: {
                        xs: ' 2em 1em',
                        md: '2em 3em '
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Avatar
                        sx={{
                        m: {
                            sm: 1
                        },
                        bgcolor: '#d42c2a'
                    }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography
                      data-cy='form-info'

                        sx={{
                        fontSize: "1em",
                        textAlign: 'center'
                    }}
                        color={error
                        ? 'red'
                        : 'black'}
                        component="h1">
                        {error
                            ? `${error}`
                            : 'Sign in'}
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
                                    value={formData.userName}
                                    onChange={(e)=>handleChange(e)}
                                    required
                                    fullWidth
                                    id="username"
                                    data-cy='create-name'
                                    autoFocus
                                    type='text'
                                    label="Your Name"
                                    name="userName"
                                    autoComplete="name"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                  value={formData.userEmail}
                                  onChange={(e)=>handleChange(e)}
                                    data-cy='create-email'
                                    required
                                    fullWidth
                                    type='email'
                                    id="email"
                                    label="Email Address"
                                    name="userEmail"
                                    autoComplete="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    data-cy='create-password'
                                    value={formData.userPassword}
                                    onChange={(e)=>handleChange(e)}
                                    required
                                    fullWidth
                                    name="userPassword"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"/>
                            </Grid>

                        </Grid>
                        <Button
                            disabled={isLoading}
                            type="submit"
                            fullWidth
                            data-cy='submit-btn'
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
