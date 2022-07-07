import {Box, Typography} from "@mui/material"
import {useRouter} from "next/router";
import Breadcrumb from "../../../../components/breadcrumb/Breadcrumb";
import ContactForm from "../../../../components/PropertyPageComps/ContactForm";
import PropertyPageCarousel from "../../../../components/PropertyPageComps/PropertyPageCarousel";
import SummaryInfo from '../../../../components/PropertyPageComps/SummaryInfo';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import {PrismaClient} from "@prisma/client";
import {toJson} from "../index";
import currencyToSymbol from "../../../../src/Functions/currencyToSymbol";
import BedIcon from '@mui/icons-material/Bed';
import BalconyIcon from '@mui/icons-material/Balcony';
import StraightenIcon from '@mui/icons-material/Straighten';
import {IFormData} from "../../../../src/Types";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import UserProfile from "../../../../components/DashboardComps/UserProfile/UserProfile";
import { Session } from "../../../_app";
import { useContext } from "react";
import Layout from "../../../../components/layout/Layout";

const style = {
    display: 'flex',
    alignItems: 'center'
}
const style2 =

    {
        pb: '.5em',
        fontSize:'1.5em'    ,
        fontWeight:'500'
    }


const Index = ({results} : any) => {

    let currentData : IFormData = results && JSON.parse(results)
    const {session} = useContext(Session);
    const sessionId = session?.id
    const {ownerName ,ownerEmail ,ownerId,ownerProfileImage,ownerPhoneNumber} = currentData.ownerDetails
    const isSameUser = sessionId === ownerId
    const currentUser = {
        userName : ownerName,
        userEmail : ownerEmail,
        userId : ownerId,
        userImage : ownerProfileImage,
        userPhone : ownerPhoneNumber,
    }    
    const router = useRouter()

    return (
    <Layout description='' title={`${currentData?.title || 'Houses in lebanon | realtors and brokers lebanon'} | el-vito`}>


        <Box
            sx={{
            px: {
                xs: '3vw',
                lg: '0'
            },
            mb: '5em',
            borderTop: '1px solid #80808061'
        }}>
            {currentData && <Box maxWidth="lg" sx={{
                margin: '0 auto'
            }}>
                <Breadcrumb
                    title={`${currentData
                    ?.title || 'Item'}`}
                    category={`${router.query.category}`}/>
                <Box
                    sx={{
                    display: 'flex',
                    gap: '10px',
                    flexWrap: 'wrap'
                }}>

                    <PropertyPageCarousel images={currentData.images}/>
                    <ContactForm id={ownerId} isHiddenOnMobile={true}/>
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

                        <Typography sx={{fontSize:{xs:'1.2em',sm:'1.4em',md:"1.5em"}}} fontWeight="600">
                            {currentData.title}
                        </Typography>
                        <Typography sx={{fontSize:{xs:'.85em',sm:'.95em',md:"1.1em"}}} color='#000000bf' fontWeight="500">
                            {currentData.location}
                        </Typography>
                        <Box
                            sx={{
                            ...style,
                            gap: '.5em'
                        }}>
                            <Typography
                            sx={{fontSize:{xs:'.8em',sm:'.9em',md:"1em"}}}
                            color='#000000bf'>
                                {currentData.purpose === 'for-sale'
                                    ? 'For Sale'
                                    : currentData.purpose === 'for-rent' && 'For Rent'}:
                            </Typography>
                            <Typography fontSize="1.2em" color='green' fontWeight="400">
                                {currencyToSymbol(currentData.currency)}{currentData.price} {' '}
                                {`${currentData
                                    ?.rentFrequency}`}
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                        py: '2em',
                        borderBottom: "1px solid #c4c4c4"
                    }}>
                        <Typography
                            sx={style2}
                            >
                            Property Facts
                        </Typography>
                        <Box
                            sx={{
                            gap:'10px',
                            display: 'flex',
                            justifyContent: 'end',
                            flexWrap: 'wrap'
                        }}>
                            <SummaryInfo
                                Icon={HomeWorkOutlinedIcon}
                                title={"Property Type"}
                                MainTitle={`${currentData.type}`}/>
                            <SummaryInfo
                                Icon={BathtubOutlinedIcon}
                                title={"Bathrooms"}
                                MainTitle={currentData.bathrooms}/>
                                
                                 {currentData.rooms
                                ? <SummaryInfo Icon={BedIcon} title={"Bedrooms"} MainTitle={currentData.rooms}/>
                                : ''}

                            {currentData.balconies
                                ? <SummaryInfo
                                        Icon={BalconyIcon}
                                        title={"Balconies"}
                                        MainTitle={currentData.balconies}/>
                                : ''}
                            <SummaryInfo
                                Icon={StraightenIcon}
                                title={"Property Size"}
                                MainTitle={currentData.propertySize}/>

                            <SummaryInfo
                                Icon={PaidOutlinedIcon}
                                MainTitle={currentData.paymentMethod}
                                title={'Payment Method'}/>

                        </Box>
                    </Box>

                    <Box
                        sx={{
                        py: '2em',
                        borderBottom: "1px solid #c4c4c4"
                    }}>
                        <Typography
                            sx={style2}
                            >
                            Description
                        </Typography>
                        <Typography
                            sx={{
                            whiteSpace: 'pre-wrap'
                        }}>
                            {`${currentData.description}`}
                        </Typography>
                    </Box>
                    <Box sx={{
                        py: '2em'
                    }}>
                        <Typography
                            sx={style2}>
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
                                <Typography fontWeight='500'>
                                    Listed :
                                </Typography>
                                <Typography fontWeight='300'>
                                    {currentData.createdAt || 'New'}
                                </Typography>

                            </Box>
                            <Box
                                sx={{
                                ...style,
                                gap: '1em'
                            }}>
                                <Typography fontWeight='500'>
                                    Property Id :
                                </Typography>
                                <Typography fontWeight='300'>
                                    {currentData.id}
                                </Typography>

                            </Box>

                        </Box>

                    </Box>
                    
                     <Box sx={{
                       py: '2em',
                        borderTop: "1px solid #c4c4c4"
                    }}>
                        <Typography
                            sx={style2}>
                            Owner&apos;s Details
                        </Typography>
                        <UserProfile  currentUser={currentUser} isSameUser={isSameUser} logOutOption={false}/>
                  
                </Box> 
                </Box>
            </Box>}
            <ContactForm id={ownerId} />
        </Box>
    </Layout>

    )
}

export default Index

export async function getServerSideProps({query} : any) {

    const prisma = new PrismaClient()
    try {

        let data = await prisma
            .properties
            .findUnique({
                where: {
                    id: query.id
                }
            })
        if (!data) {
            return {
                redirect: {
                    destination: '/real-estate-and-homes/properties',
                    statusCode: 307
                }
            }
        }
        let results = toJson(data)
        return {props: {
                results
            }}
    } catch (e) {
        console.log('e: ', e);

        return {
            redirect: {
                destination: '/real-estate-and-homes/properties',
                statusCode: 307
            }
        }
    } finally {
        await prisma.$disconnect()

    }
}