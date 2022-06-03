import {Box, Typography} from "@mui/material"
import {useEffect, useRef, useState} from "react";
import StatInfo from "./StatInfo"
import {gsap} from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Stats = () => {

    const [isReady,
        setReady] = useState(false)
    const ref = useRef()
    useEffect(() => {

        gsap.to('.stat', {
            scrollTrigger: {
                trigger: '.stat',
                onEnter: () => setReady(true)
            }
        })

    }, [])
    return (
            <Box
                maxWidth='lg'
                sx={{
                mt: {
                    xs: '4em',
                    sm: '6em'
                },
                mx: {
                    xs: '3vw',
                    lg: 'auto'
                }
            }}>
                <Typography
                    sx={{
                    pb: '.5em',
                    fontSize: {
                        xs: '1.2em',
                        sm: '1.4em'
                    },
                    fontWeight: '600'
                }}>
                    Reasons To Choose Us
                </Typography>
                <Box
                    ref={ref}
                    className='stat'
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    {isReady && <> <StatInfo delay={.8} stat={300} title={'Homes for sale'}/> < StatInfo delay = {
                        1
                    }
                    stat = {
                        20
                    }
                    title = {
                        'Open houses'
                    } /> <StatInfo delay={1.5} positive={true} stat={326} title={'Customers'}/> < StatInfo delay = {
                        2
                    }
                    positive = {
                        true
                    }
                    stat = { + 471
                    }
                    title = {
                        'Properties sold'
                    } /> </>
}

                </Box>
            </Box>
    )
}

export default Stats