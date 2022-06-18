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

const Home : NextPage = ({FeaturedData ,RandomData} : any) => {
    console.log('FeaturedData: ', FeaturedData);
    const featuredProperties : IFormData[] = FeaturedData && JSON.parse(FeaturedData)
    let RandomProperties : IFormData[] = RandomData && JSON.parse(RandomData)
    
    return (
        <Box>
            <Hero/>
            < Featured PropertiesArray={featuredProperties}/>
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
    try {
      
        
        await prisma.$connect()
        const FeaturedData = await prisma
            .featured
            .findMany()
        const productsCount = await prisma
            .properties
            .count();
        const skip = Math.floor(Math.random() * productsCount) || 3;
        const RandomData = await prisma
            .properties
            .findMany({skip,take:4})

        if (!FeaturedData || !RandomData) {
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
    } finally {
        await prisma.$disconnect()
    }

   
}
