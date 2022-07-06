import {Box, Typography} from "@mui/material"
import {useRouter} from "next/router"
import {ICategoryItem} from "../../src/Types"
import Image from 'next/image'

const CategoryItem = ({img, large, href, title} : ICategoryItem) => {
    const router = useRouter()

    return (
        <Box
            className='box'
            onClick={() => router.push(`/real-estate-and-homes/${href}`, undefined, {scroll: true})}
            sx={{
            height: {
                xs: `${large
                    ? '200px'
                    : '150px'}`,
                sm: large
                    ? '410px'
                    : '200px'
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

     
                <Box
                    sx={{
                    width: '100%',
                    height: large
                        ? '410px'
                        : '200px',
                    position: 'relative'
                }}>
                    <Image
                        className='img BR'
                        src={`${img}` || "https://ap.rdcpix.com/06547a8e2a49c644f7a277130c39e3del-m4093847176od-w480_h360." +
                        "webp"}
                        alt="Property Image"
                        objectFit='cover'
                        layout="fill"
                        loading="lazy"/>
                </Box>
            </Box>
        </Box>
    )
}
export default CategoryItem