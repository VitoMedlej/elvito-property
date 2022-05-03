import { Box, IconButton } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const SearchBox = () => {
    return (
        <Box
            className='title'
            sx={{
            flex: {
                xs: '1',
                md: '0'
            },
            mr: '10px',
            position: 'relative',
            width: {
                xs: 'auto',
                md: '60%'
            },
            border: '1px solid #989898',
            borderRadius: '50px'
        }}>
            <input type="text" placeholder="Search area" className='HeroInput p2'/>
            <IconButton
                sx={{
                color: 'white',
                position: 'absolute',
                top: '0%',
                right: '0%',
                border: '1px solid white',
                padding: '4px',
                background: '#d42c2a',
                ':hover': {
                    background: '#c10d0b',
                    color: 'white',
                    opacity: '.9'
                }
            }}>
                <SearchOutlinedIcon/>
            </IconButton>
        </Box>
    )
}

export default SearchBox