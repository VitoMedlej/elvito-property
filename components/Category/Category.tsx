import {Box, Grid, Typography} from "@mui/material"
import CategoryItem from "./CategoryItem"
import {gsap} from "gsap";
import {useRef, useEffect} from "react";
import staticData from '../../staticData.json'

const Category = () => {
    const {CategoryItems} = staticData[1]
    const ref = useRef()
    const q = gsap
        .utils
        .selector(ref);

    useEffect(() => {

        gsap.fromTo(q('.box '), {
            opacity: 0,
            y: '20px'
        }, {
            ease: 'ease',
            y: 0,
            opacity: 1,
            stagger: .19,
            scrollTrigger: {
                trigger: '.sectionTitle',
                start: '100% 45%'

            }
        })
    }, [])

    return (

        <Box
            ref={ref}
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
                className='sectionTitle box'
                sx={{
                pb: '.5em',
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                fontWeight: '600'
            }}>
                Explore Different Categories
            </Typography>

            <Grid
                container
                sx={{
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                <Grid xs={12} md={4.3} item>
                    <CategoryItem
                        href='apartment'
                        title='Apartments'
                        large={true}
                        img={`https://res.cloudinary.com/dwcu3wcol/image/upload/v1655630715/Static/improved_mj65wv.jpg`}/>
                </Grid>

                <Box
                    sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: {
                        xs: "100%",
                        md: "64.1%"
                    }
                }}>
                    {CategoryItems && CategoryItems.length > 0 && CategoryItems.map((item) => {

                        return <Grid key={item.img} xs={12} sm={6} item>
                            <CategoryItem
                                href={item.href}
                                title={item.title}
                               
                                img={`${item.img}`}/>
                        </Grid>
                    })}

                </Box>

            </Grid>
        </Box>

    )
}

export default Category
