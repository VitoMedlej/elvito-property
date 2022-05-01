import { Box } from "@mui/material"
import { useRouter } from "next/router"

const id = () => { 
    const router = useRouter()
    const { id } = router.query
  return (
      <Box>
            
      </Box>
  )
}

export default id