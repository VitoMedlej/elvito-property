import {Box, Grid, Typography} from "@mui/material"
import CategoryItem from "./CategoryItem"
import {gsap} from "gsap";
import {useRef, useEffect} from "react";

const Category = () => {

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
                            height='410px'
                            img={`https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=659&q=80`}/>
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

                        <Grid xs={12} sm={6} item>
                            <CategoryItem
                                href='land'
                                title='Lands'
                                height='200px'
                                img={`https://images.unsplash.com/photo-1580681650584-487ec0b799a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}/>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <CategoryItem
                                href='villa'
                                title='Villas'
                                height='200px'
                                img={` https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}/>
                        </Grid>

                        <Grid xs={12} sm={6} item>
                            <CategoryItem
                                href='comercial'
                                title='Comerical'
                                height='200px'
                                img={`https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}/>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <CategoryItem
                                href='chalet'
                                title='Chalets'
                                height='200px'
                                img={` https://www.rizkproperties.net/storage/uploads/types/5l2020-01-20-07-10-27.jpg`}/>
                        </Grid>

                    </Box>

                </Grid>
            </Box>
      
    )
}

export default Category
