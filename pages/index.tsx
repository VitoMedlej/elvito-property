import type {NextPage}
from 'next'
import Hero from '../components/Hero/Hero';
import Featured from '../components/Featured/Featured';
import Stats from '../components/Stats/Stats';
import Category from '../components/Category/Category';
import HeadLine from '../components/HeadLine/HeadLine';
import {PrismaClient} from '@prisma/client';
import {toJson} from './real-estate-and-homes/[category]';
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

    const itemsPerPage = 9
    const prisma = new PrismaClient()
    const {MongoClient, ServerApiVersion} = require('mongodb');
    const url = process.env.DATABASE_URL
    const client = new MongoClient(url);
    try {

        // const FeaturedData = await prisma     .featured     .findMany({select})

        let FeaturedData : any = []
        await client
            .db("PropertyDB")
            .collection("Featured")
            .find()
            .limit(10)
            .forEach((i : any) => {
                console.log('i: ', i);
                FeaturedData.push(i)
            });
            FeaturedData = toJson([...FeaturedData])

        let RandomData : any = []
        await client
            .db("PropertyDB")
            .collection("Properties")
            .find()
            .skip(4)
            .limit(10)
            .forEach((i : any) => {
                RandomData.push(i)
            });
        RandomData = toJson([...RandomData])

        if (!FeaturedData || FeaturedData
            ?.length < 1 || !RandomData) {
            throw 'No data found'
        }

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
        await client.close();
    }

}
