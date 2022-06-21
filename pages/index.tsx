import type {NextPage}
from 'next'
import Hero from '../components/Hero/Hero';
import Featured from '../components/Featured/Featured';
import Stats from '../components/Stats/Stats';
import Category from '../components/Category/Category';
import HeadLine from '../components/HeadLine/HeadLine';
import {PrismaClient} from '@prisma/client';
import {toJson} from './real-estate-and-homes/[category]';
import {IFormData} from '../src/Types';
import PropertiesModuleSection from '../components/PropertiesModuleSection/PropertiesModuleSection';
import {Box} from '@mui/material';

const Home : NextPage = ({FeaturedData, RandomData} : any) => {
    const FeaturedProperties = FeaturedData && JSON.parse(FeaturedData)
    const RandomProperties = RandomData && JSON.parse(RandomData)

    return (
        <Box>
            <Hero/>
            <Featured PropertiesArray={FeaturedProperties}/>
            <Stats/>
            <PropertiesModuleSection PropertiesArray={RandomProperties}/>
            <Category/>
            < HeadLine/>
        </Box>
    )
}

export default Home

export const getStaticProps = async() => {

    const prisma = new PrismaClient()
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
    try {

        const FeaturedData = await prisma
            .featured
            .findMany({select})
        const productsCount = await prisma
            .properties
            .count();
        const skip = Math.floor(Math.random() * productsCount) || 3;
        const RandomData = await prisma
            .properties
            .findMany({skip, select, take: 4})

        if (!FeaturedData || !RandomData) {
            console.log('failed');

            return {props: {}}
        }
        return {
            props: {
                FeaturedData: toJson(FeaturedData),
                RandomData: toJson(RandomData)
            }
        }
    } catch (err) {
        console.log('err: ', err);
        return {props: {}}
    } finally {
        await prisma.$disconnect()
    }

}
