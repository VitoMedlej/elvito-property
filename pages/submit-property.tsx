import {Box, Typography} from "@mui/material"
import Link from "next/link"

const submitProperty = () => {
    return (

        <Box
            maxWidth="lg"
            sx={{
            mt: '3em',
            minHeight:'90vh',
            mx: {
                xs: '3vw',
                lg: 'auto'
            }
        }}>
           {true && <Box>
                <Typography fontSize='1.5em' fontWeight='500'>
                     You need an account in order to add properties.
                </Typography>
            <Box sx={{display:'flex',gap:'1em',alignItems:'center'}}>

                <Typography className='link' fontSize='1em' fontWeight='400'>
                    <Link href='/account/register'>
                    Create account here
                    </Link>

                </Typography>
                <Typography>
                Or
                </Typography>
                <Typography className='link' fontSize='1em' fontWeight='400'>
                    <Link href='/account/login'>
                       login here
                    </Link>    
                </Typography>
            </Box>
            </Box>}
        </Box>
    )
}

export default submitProperty