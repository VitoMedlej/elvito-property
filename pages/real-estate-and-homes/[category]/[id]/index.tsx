import {Box, Typography} from "@mui/material"
import Link from "next/link";
import { useRouter } from "next/router";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";

const index = () => {
  const router = useRouter()
    return (
        <Box
            sx={{
            px: {
                xs: '3vw',
                lg: '0'
            },
            borderTop: '1px solid #80808061'
        }}>
            <Box maxWidth="lg" sx={{
                margin: '0 auto'
            }}>
              <Breadcrumb id={`${router.query.id}`} category={`${router.query.category}`}/>
            </Box>
        </Box>
    )
}

export default index