import {Box, Typography} from "@mui/material"
import {useRouter} from "next/router"
import {ICategoryItem} from "../../src/Types"
import Image from 'next/image'


const CategoryItem = ({img, height, href, title} : ICategoryItem) => {
    const router = useRouter()

    return (
        <Box
            className='box'
            onClick={() => router.push(`/real-estate-and-homes/${href}`, undefined, {scroll: true})}
            sx={{
            height: {
                xs: `${height === '410px'
                    ? '200px'
                    : '150px'}`,
                sm: height
            },
            position: 'relative',
            m: '5px',
            cursor: 'pointer',
            transition: '.2s ease',
            overflow: 'hidden'
        }}>
            <Box className='layerText'>
                <Typography fontSize='1.4em'>
                    {title}
                </Typography>
            </Box>
            <Box
                className='layered'
                sx={{
                width: '100%',
                position: 'absolute',
                height: `100%`,
                borderRadius: '4px'
            }}>
                
                <img  className='img BR' src={`${img}`} alt="Category Image"/>
            </Box>
        </Box>
    )
}
export default CategoryItem