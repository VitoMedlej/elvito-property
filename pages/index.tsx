import type {NextPage}
from 'next'
import Hero from '../components/Hero/Hero';
import Featured from '../components/Featured/Featured';
import Stats from '../components/Stats/Stats';
import Category from '../components/Category/Category';
import HeadLine from '../components/HeadLine/HeadLine';
import {PrismaClient} from '@prisma/client';
import PropertiesModuleSection from '../components/PropertiesModuleSection/PropertiesModuleSection';
import {Box} from '@mui/material';
import { bigInt_To_Number } from './real-estate-and-homes/[category]/[title]';

const Home : NextPage = ({FeaturedData, RandomData} : any) => {


    return (
        <Box>
            <Hero/>
            <Featured PropertiesArray={FeaturedData}/>
            <Stats/>
            <PropertiesModuleSection PropertiesArray={RandomData}/>
            <Category/>
            <HeadLine/>
        </Box>
    )
}

export default Home

export const getStaticProps = async() => {
    const select = {
        images: true,
        id: true,
        propertySize: true,
        type: true,
        bathrooms: true,
        rooms: true,
        currency: true,
        price: true,
        title: true,
        location: true
    }
    const prisma = new PrismaClient()
    try {

        const FeaturedData = await prisma
            .featured
            .findMany({select})
       
        const skip = 3
        const RandomData = await prisma
            .properties
            .findMany({skip, select, take: 4})

        if (!FeaturedData || !RandomData) {
           throw new Error('No data found')
        }
        bigInt_To_Number(FeaturedData)
        bigInt_To_Number(RandomData)

        return {
            props: {
                FeaturedData,
                RandomData
            }
        }
    } catch (err) {
        console.log('err: ', err);
        return {props: {}}
    } finally {
        await prisma.$disconnect()
    }

}
