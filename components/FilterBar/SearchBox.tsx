import {Box, IconButton} from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBox = () => {
    return (
        <Box
            className='title'
            sx={{
            position: 'relative',
            margin: '0',
            display: 'flex',
            border: '1px solid black',
            width: 'max-content',
            borderRadius: '7px'
        }}>
            <input type="text" placeholder="Enter Keyword" className='HeroInput p3'/>
            <IconButton
                sx={{
                borderRadius: '7px',
                background: '#d42c2a',
                color: "white",
                ':hover': {
                    background: '#ba1513'
                }
            }}>
                <SearchOutlinedIcon/>
            </IconButton>
        </Box>

    )
}

export default SearchBox