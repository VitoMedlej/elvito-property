import { Box, Typography } from "@mui/material"
import { ISummaryInfo } from "../../src/Types"

const SummaryInfo = ({Icon ,title ,MainTitle} : ISummaryInfo) => {
    return (
        <Box
            sx={{
            gap: '8px',
            display: 'flex',
            alignItems: 'center',
            color: '#333333',
            width:{xs:'45%',sm:'32%'},
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