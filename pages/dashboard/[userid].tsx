import { Box, Button } from "@mui/material"
import { signOut } from "next-auth/react"

const userid = () => {
  return (
   <Box>
     <Button onClick={() =>signOut()}>
       LOG THE FUCK OUT
     </Button>
   </Box>
  )
}

export default userid