import {Box, Grid, Typography} from '@mui/material';
import Link from 'next/link';

const styles = {
    mt: '1em',
    display: 'flex',
    flexDirection:'column',
    gap:'15px',
    flexWrap: 'wrap',
    color: 'white'
}

const Footer = () => {
    return (
        <Box
            sx={{
            width: '100%',
            background: '#000000e8',
            color: 'white',
            minHeight: '300px',
            display: 'flex',
            margin: '0 auto'
        }}>
            <Grid
                sx={{
                gap:'1.5em',
                mx: {
                    xs: '3vw',
                    lg: 'auto'
                },
                mt: '2em'
            }}
                maxWidth='lg'
                container>
                <Grid item xs={12} sm={6} md={5}>
                <Typography>About </Typography>
                <Box sx={styles}> 
                <Typography color='#ffffff7a'>
                    This application is no more than a personal project used 
                    to improve my web development using new tools i&apos;ve decided 
                    to pick up and learn. All data used was taken from various 
                    sources from different lebanese websites, and I claim nothing to be mine whatsoever.
                </Typography>
                </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography>Links</Typography>
                    <Box
                        className='link'
                        sx={styles}>
                        <Link href='/'>Home</Link>
                        <Link href='/account/login'>Login</Link>
                        {/* <Link href='/dashboard/main'>Dashboard</Link> */}
                        <Link href='/real-estate-and-homes/properties'>Properties</Link>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Typography>Contact</Typography>
                        <Box
                        className='link'
                        sx={styles}>
                        <a target='_blank' rel="noreferrer" href='https://github.com/VitoMedlej'>Github</a>
                        <Typography color='#ffffff7a'>vito.medlej@gmail.com</Typography>
                        <Typography color='#ffffff7a'>Lebanon/beirut</Typography>
                        <Typography color='#ffffff7a'>+961/81826445</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer