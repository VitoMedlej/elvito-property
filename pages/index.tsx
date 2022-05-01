import type {NextPage} from 'next'
import Hero from '../components/Hero/Hero';
import Featured from '../components/Featured/Featured';
import Stats from '../components/Stats/Stats';
import Category from '../components/Category/Category';
import HeadLine from '../components/HeadLine/HeadLine';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home : NextPage = () => {
  


    
    return (
        <>
         <Hero/>
         <Featured/>
         <Stats/>
         <Category/>
         <HeadLine/>
        </>

    )
}

export default Home