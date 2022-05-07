import {Box, IconButton, Typography} from "@mui/material"
import {useRouter} from "next/router";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import {useState} from "react";
import ContactForm from "../../../../components/PropertyPageComps/ContactForm";
import PropertyPageCarousel from "../../../../components/PropertyPageComps/PropertyPageCarousel";
import SummaryInfo from "../../../../components/PropertyPageComps/SummaryInfo";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';

const style = {
    display: 'flex',
    alignItems: 'center'
}
const Index = () => {

    const router = useRouter()
    return (
        <Box
            sx={{
            px: {
                xs: '3vw',
                lg: '0'
            },
            mb: '5em',
            borderTop: '1px solid #80808061'
        }}>
            <Box maxWidth="lg" sx={{
                margin: '0 auto'
            }}>
                <Breadcrumb id={`${router.query.id}`} category={`${router.query.category}`}/>
                <Box
                    sx={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap'
                }}>

                    <PropertyPageCarousel/>
                    <ContactForm isHiddenOnMobile={true}/>
                </Box>
                <Box
                    sx={{
                    pt: '1.2em',
                    width: {
                        xs: '100%',
                        md: '68%'
                    }
                }}>
                    <Box
                        sx={{
                        borderBottom: "1px solid #c4c4c4",
                        pb: '1.5em',
                        display: 'flex',
                        gap: '.3em',
                        flexDirection: 'column'
                    }}>

                        <Typography fontSize="1.6em" fontWeight="600">
                            Whole Luxury Building For Sale In Rabieh
                        </Typography>
                        <Typography fontSize="1.1em" color='#000000bf' fontWeight="500">
                            2653 Rosemont Cir, Davenport, FL 33837
                        </Typography>
                        <Box
                            sx={{
                            ...style,
                            gap: '.5em'
                        }}>
                            <Typography color='#000000bf'>
                                For Sale :
                            </Typography>
                            <Typography fontSize="1.3em" color='green' fontWeight="400">
                                $350,000
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                        py: '1.5em',
                        borderBottom: "1px solid #c4c4c4"
                    }}>
                        <Typography
                            sx={{
                            pb: '.5em'
                        }}
                            fontSize='1.5em'
                            fontWeight='500'>
                            Property Facts
                        </Typography>
                        <Box
                            sx={{
                            display: 'flex',
                            justifyContent: 'end',
                            flexWrap: 'wrap'
                        }}>
                            <SummaryInfo
                                Icon={HomeWorkOutlinedIcon}
                                title={"Property Type"}
                                MainTitle={"House"}/>
                            <SummaryInfo Icon={BathtubOutlinedIcon} title={"Bathrooms"} MainTitle={"5"}/>
                            <SummaryInfo
                                Icon={HomeWorkOutlinedIcon}
                                title={"Property Type"}
                                MainTitle={"House"}/>
                            <SummaryInfo
                                Icon={HomeWorkOutlinedIcon}
                                title={"Property Type"}
                                MainTitle={"House"}/>
                            <SummaryInfo
                                Icon={HomeWorkOutlinedIcon}
                                title={"Property Type"}
                                MainTitle={"House"}/>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                        py: '1.5em',
                        borderBottom: "1px solid #c4c4c4"
                    }}>
                        <Typography
                            sx={{
                            pb: '.5em'
                        }}
                            fontSize='1.5em'
                            fontWeight='500'>
                            Description
                        </Typography>
                        <Typography
                            sx={{
                            whiteSpace: 'pre-wrap'
                        }}>
                            {` mazing Building / Villa For Sale In Rabieh
In A Prime Location
Private Dead End Street

Space : 2,500 Sqm
+ Huge Swimming Pool


Unit Features:

• 4 Floors
• 3 Duplexes + 1 x 400 Sqm Huge Flat
• Private Jacuzzis
• Balconies With Sea View

Features:

• Heating System
• Central AC
• Video Phone
• Door Camera

Facilities:

• 10+ Covered Parkings + Parking For Visitors
• 24/7 Elevators
• Full Time Concierge
• A Private Generator For The Building
• Well Secured Area and Building

2 minutes away from the highway`}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                        py: '1.5em',
                    }}>
                        <Typography
                            sx={{
                            pb: '.5em'
                        }}
                            fontSize='1.5em'
                            fontWeight='500'>
                            More Details
                        </Typography>
                        <Box
                            sx={{
                            ...style,
                            justifyContent: {
                                xs: 'end',
                                sm: 'space-around'
                            },
                            flexWrap: 'wrap',
                            gap: '.5em'
                        }}>

                            <Box
                                sx={{
                                ...style,
                                gap: '1em'
                            }}>
                                <Typography>
                                    Listed :
                                </Typography>
                                <Typography fontWeight='600'>
                                    14 days ago
                                </Typography>

                            </Box>
                            <Box
                                sx={{
                                ...style,
                                gap: '1em'
                            }}>
                                <Typography>
                                    Property Id :
                                </Typography>
                                <Typography fontWeight='600'>
                                   412RC-KLB-EZ
                                </Typography>

                            </Box>

                        </Box>

                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Index