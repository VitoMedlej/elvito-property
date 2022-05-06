import { Box, Typography } from "@mui/material"
import { ISummaryInfo } from "../../src/Types"

const SummaryInfo = ({Icon ,title ,MainTitle} : ISummaryInfo) => {
    return (
        <Box
            sx={{
            gap: '10px',
            display: 'flex',
            alignItems: 'center',
            color: '#333333'
        }}>
        <>
          {<Icon/>}

            <Box>
                <Typography fontSize=".9em" fontWeight='bold'>
                    {MainTitle}
                </Typography>
                <Typography fontSize=".7em">
                  {title}
                </Typography>
            </Box>
        </>
        </Box>
    )
}

export default SummaryInfo