import { Box, Typography, TextField, Button } from '@mui/material'
import { useSession } from 'next-auth/react'
import { IContactForm } from '../../src/Types'



const ContactForm = ({isHiddenOnMobile ,id} : IContactForm) => {
    const session = useSession()
    const sessionId = session?.data?.id
    const sameUser = sessionId === id
    return (

        <Box
            sx={{
            display : {xs: isHiddenOnMobile ? 'none' : 'block', md : !isHiddenOnMobile ? 'none' : 'block'},
            width: {
                xs: '100%',
                md: '30%'
            }
        }}>
            <Box
                sx={{
                boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                py: '2em',
                px: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }}
                component='form'>
                <Typography
                    sx={{
                    textAlign: 'center',
                    pb: '.5em'
                }}
                    fontWeight='500'
                    fontSize='1.2em'>
                    Contact the owner
                </Typography>
                <TextField fullWidth id="outlined-basic3" label="Your Name" variant="outlined"/>
                <TextField
                    fullWidth
                    id="outlined-basic2143"
                    label="Your Email"
                    variant="outlined"/>
                <TextField
                    rows={4}
                    multiline
                    fullWidth
                    id="standard-multiline-flexible22"
                    label="Message"
                    variant="outlined"/>
                <Button

                    disabled={sameUser}
                    variant="contained"
                    sx={{
                        backgroundColor: "#d42c2a",
                        border: "1px solid #d42c2a",
                        ":hover": {
                            background: '#bb0806',
                            border: "1px solid #bb0806"
                        },
                        ':disabled' : {
                            border: '1px solid'
                        }
                }}>
                    Submit
                </Button>
         
            </Box>
        </Box>
    )
}

export default ContactForm