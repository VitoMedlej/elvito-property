import {Box, Typography} from "@mui/material"
import CountUp, {useCountUp} from "react-countup"
import {IStatInfo} from "../../src/Types"


const StatInfo = ({stat, title, delay, positive} : IStatInfo) => {

    return <Box
        sx={{
        py: '1em',
        textAlign: 'center',
        fontSize: '2em',
        width: {
            xs: "50%",
            md: '25%'
        }
    }}>
        <Typography color='#d42c2a' fontSize='1.3em'>
            {positive && '+'}<CountUp delay={delay} duration={1.7} start={0} end={stat}/>

        </Typography>

        <Typography>{title}</Typography>
    </Box>
}
export default StatInfo