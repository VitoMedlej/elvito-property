import { Box, Typography } from "@mui/material"
import { ISummaryInfo } from "../../src/Types"

const SummaryInfo = ({Icon ,title ,MainTitle} : ISummaryInfo) => {
    return (
        <Box
            sx={{
            gap: '10px',
            display: 'flex',
            alignItems: 'center',
            color: '#333333',
            width:'33%',
            pb:'1em',
        }}>
        <>
          {<Icon/>}

            <Box>
                <Typography fontSize="1em" fontWeight='600'>
                    {MainTitle}
                </Typography>
                <Typography fontSize=".83em">
                  {title}
                </Typography>
            </Box>
        </>
        </Box>
    )
}

export default SummaryInfo