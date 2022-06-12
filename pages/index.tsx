import type {NextPage} from 'next'
import Hero from '../components/Hero/Hero';
import Featured from '../components/Featured/Featured';
import Stats from '../components/Stats/Stats';
import Category from '../components/Category/Category';
import HeadLine from '../components/HeadLine/HeadLine';
import { PrismaClient } from '@prisma/client';
import { toJson } from './real-estate-and-homes/[category]';
import { IFormData } from '../src/Types';


const Home : NextPage = ({data} : any) => {
    const featuredProperties : IFormData[] = data && JSON.parse(data)
    console.log('featuredProperties: ', featuredProperties);

    
    return (
        <>
         <Hero  />
         <Featured featuredProperties={featuredProperties}/>
         <Stats/>
         <Category/>
         <HeadLine/>
        </>


    )
}

export default Home

export const getStaticProps = async () => {
    const prisma = new PrismaClient()

    try {
        await prisma.$connect()
       const data = await prisma.featured.findMany()

 

       if (!data) {
        return {
            props : {}
        }
       }
       return {
        props : {data : toJson(data) }
    }
    }
    catch(err) {
        console.log('err: ', err);
    }
    finally {
        await prisma.$disconnect()
    }


  return {
    props: {
        
    },
  }
}

