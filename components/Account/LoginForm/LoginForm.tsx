import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {
    Typography,
    Grid,
    Container,
    CssBaseline,
    Box,
    Avatar,
    TextField,
    FormControlLabel,
    Checkbox,
    Button
} from '@mui/material';
import Link from 'next/link'
import {getProviders, signIn, signOut} from 'next-auth/react';
import {useState} from 'react';
import LoginHook from '../../../src/Hooks/accountHooks/LoginHook';

export function Copyright(props : any) {
    return (
        <Typography
            className='link'
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}>
            {'Copyright © '}
            <Link href="/">
                EL-Vito Properties
            </Link>{' '} {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const LoginForm = () => {

    const {error, handleSubmit, isLoading} = LoginHook()

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" sx={{
                width: '100%'
            }}>
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
                        m: 1,
                        bgcolor: '#d42c2a'
                    }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography
                        sx={{
                        fontSize: "1em",
                        textAlign: 'center'
                    }}
                        color={error
                        ? 'red'
                        : 'black'}
                        component="h1">
                        {error
                            ? error
                            : 'Sign in'}
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                        mt: 1
                    }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            InputProps={{
                            inputProps: {
                                min: 3,
                                max: 20
                            }
                        }}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"/>
                        <FormControlLabel
                            control={< Checkbox value = "remember" color = "primary" />}
                            label="Remember me"/>
                        <Button
                            disabled={isLoading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                            backgroundColor: "#d42c2a",
                            mt: 3,
                            border: !isLoading
                                ? "1px solid #d42c2a"
                                : 'none',
                            mb: 2,
                            ":hover": {
                                background: '#bb0806',
                                border: "1px solid #bb0806"
                            }
                        }}>
                            Sign In
                        </Button>

                        <Grid container>

                            <Grid className='link' item>
                                <Link href="/account/register">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{
                    my: 4
                }}/>
            </Container>
        </ThemeProvider>
    );
}
export default LoginForm
