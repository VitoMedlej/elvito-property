import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { ITopNavBarLink } from "../../src/Types"

const TopNavBarLink = ({title ,href} : ITopNavBarLink) => {
    const router = useRouter()
    return <Button
        onClick={()=>{
            router.push(`${href}`)
        }}
        className='btn'
        sx={{
        color: 'black',
        mr: '10px',
        borderBottom: '2px solid transparent',
        borderRadius: '0',
        ':hover': {
            borderBottom: '2px solid #DA020E',
            background: 'none'
        }
    }}>
        {title}
    </Button>
}
export default TopNavBarLink