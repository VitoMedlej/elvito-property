import {Box, Drawer} from "@mui/material"
import {PrismaClient} from "@prisma/client"
import {useRouter} from "next/router"
import {createContext, useEffect, useState} from "react"
import FilterBar from "../../../components/FilterBar/FilterBar"
import PropertySection from "../../../components/PropertySection/PropertySection"
import { SkipNextOutlined } from "@mui/icons-material"

const Index = ({results, totalCount} : {
    results: any,
    totalCount: number
}) => {
    const MyContext = createContext('defaultValue');
    const AllProperties = results && JSON.parse(results)
    

    const router = useRouter()

    const [isDrawerOpen,
        setDrawerOpen] = useState(false)
    const toggleDrawer = (open : boolean) => (event : React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);

    };

    return (
        <MyContext.Provider value='foo'>

            <Box
                sx={{
                px: {
                    xs: '3vw',
                    lg: '0'
                },
                borderTop: '1px solid #80808061'
            }}>

                <FilterBar/>
                <PropertySection
                    totalCount={totalCount}
                    AllProperties={AllProperties}
                    sectionTitle={`${router.query.id || 'propertie'}`}/>

                <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <Box sx={{
                        width: '300px'
                    }}></Box>
                </Drawer>

            </Box>
        </MyContext.Provider>

    )
}

export default Index
// a function I stole to deal with big ints
export const toJson = (data : any) => {
    return JSON.stringify(data, (_, v) => typeof v === 'bigint'
        ? `${v}n`
        : v).replace(/"(-?\d+)n"/g, (_, a) => a);
}

const Category = (categoryQuery : string) => {
    let categories = ["apartment", "villa", "comercial", "land", "chalet"]

    if (!categories.includes(categoryQuery)) {
        return undefined
    }
    return categoryQuery
}
const isPurposeValid = (purposeQuery : string) => {
    if (purposeQuery === 'for-sale' || purposeQuery === 'for-rent') 
        {return purposeQuery}
    return undefined

}
const GetProperties = async(prisma : PrismaClient, skip?: number, OR?: any, itemsPerPage?: number, query?: any) => {
    const select = {
        id: true,
        type: true,
        bathrooms: true,
        rooms: true,
        price: true,
        propertySize: true,
        images: true,
        title: true,
        location: true,
        purpose: true,
        currency: true,
        description: true
    }

    try {
        
        let data = await prisma
            .properties
            .findMany({
                skip: skip || 0,
                take: itemsPerPage,
                where: {
                    purpose: isPurposeValid(query.purpose),
                    type: Category(query.category),
                    OR: OR && OR,
                },
                select
            })
        if (!data) 
            return []
        return data
    } catch (err) {
        console.log(err);

    } finally {
        await prisma.$disconnect()
    }
}
// const GetTotalCount = async(prisma : PrismaClient, query : any, OR?: any) => {
//     const totalCount = await prisma
//         .properties
//         .count({
//             where: {
//                 type: Category(query
//                     ?.category),
//                 purpose: isPurposeValid(query
//                     ?.purpose),
//                 OR
//             }
//         })
//     return totalCount
// }
export async function getStaticPaths() {
    return { paths: ['/real-estate-and-homes/properties',
    '/real-estate-and-homes/comerical',
    '/real-estate-and-homes/chalet',
    '/real-estate-and-homes/land',
    
    ,'/real-estate-and-homes/villa','/real-estate-and-homes/apartment'], fallback: false };
}
export async function getStaticProps({query} : any) {

    const itemsPerPage = 9
    const prisma = new PrismaClient()
    try {
        let searchQuery = query
            ?.q
                ?.toLowerCase()
        // let OR = searchQuery
        //     ? [
        //         {
        //             description: {
        //                 contains: searchQuery
        //             }
        //         }, {
        //             title: {
        //                 contains: searchQuery
        //             }

        //         }

        //     ]
        //     : undefined
        const limit = 100;
        const page = query
            ?.page || 0;
        const purpose = query?.purpose || null
        // const totalCount = await GetTotalCount(prisma, query, undefined)
        // const totalPages = Math.round(totalCount / itemsPerPage)
        let skip = (page * itemsPerPage) || 0
        // if (page > totalPages || page < 0) 
        //     skip = 0

        // if (query
        //     ?.q) {

        //     let propertiesArray = await GetProperties(prisma, skip, OR, itemsPerPage, query)

        //     const totalCount = await GetTotalCount(prisma, query, OR)
        //     if (propertiesArray && propertiesArray.length > 0) 
        //         return {
        //             props: {
        //                 results: toJson([...propertiesArray]),
        //                 totalCount

        //             }
        //         }
            
        // }

        // let propertiesArray = await GetProperties(prisma, skip, undefined, itemsPerPage, query)

        // if (!propertiesArray || propertiesArray
        //     ?.length < 1) {
        //     throw new Error('No Items Found')
        // }

        // return {
        //     props: {
        //         results: toJson([...propertiesArray]),
        //         totalCount

        const { MongoClient, ServerApiVersion } = require('mongodb');

    const url = process.env.DATABASE_URL
        const client = new MongoClient(url);
        
          
        await client.connect()
        const totalCount = await client.db("PropertyDB").collection("Properties").count()
    
        if (totalCount < 1){ throw 'Error, no data found';}

        let data : any = []
        // await client.db("PropertyDB").collection("Properties").find({purpose}).limit(itemsPerPage).skip(skip).forEach((i:any)=>{
        //     data.push(i)
        // });
        await client.db("PropertyDB").collection("Properties").find({}).limit(limit).skip(skip).forEach((i:any)=>{
            data.push(i)
        });
         data = toJson([...data])

        if (!data) {
            return {props:{}}
        } 
          client.close();
        
          return {props: {
            totalCount,
              results : data
          }}
       
     
    } catch (err) {
        console.log('err 1.4: ', err);
        return {props: {}}
    } finally {
        await prisma.$disconnect()
    }

}
