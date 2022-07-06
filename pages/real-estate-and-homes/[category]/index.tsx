import {Box, Drawer} from "@mui/material"
import {PrismaClient} from "@prisma/client"
import {useRouter} from "next/router"
import {createContext, useEffect, useState} from "react"
import FilterBar from "../../../components/FilterBar/FilterBar"
import PropertySection from "../../../components/PropertySection/PropertySection"

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
    
    if (categories.includes(categoryQuery)) {
        return categoryQuery
    }
    return undefined
}
const isPurposeValid = (purposeQuery : string) => {
    if (purposeQuery === 'for-sale' || purposeQuery === 'for-rent') 
        {return purposeQuery}
    return undefined
}

// const GetProperties = async(skip?: number, OR?: any, itemsPerPage?: number, query?: any) => {
//     const prisma = new PrismaClient()
//     const select = {
//         id: true,
//         type: true,
//         bathrooms: true,
//         rooms: true,
//         price: true,
//         propertySize: true,
//         images: true,
//         title: true,
//         location: true,
//         purpose: true,
//         currency: true,
//         description: true
//     }

//     try {
//         let data = await prisma
//             .properties
//             .findMany({
//                 skip: skip || 0,
//                 take: itemsPerPage,
//                 where: {
//                     purpose: isPurposeValid(query.purpose),
//                     type: Category(query.category),
//                     OR: OR && OR,
//                 },
//                 select
//             })
//         if (!data) 
//             return []
//         return data
//     } catch (err) {
//         console.log(err);

//     } finally {
//         await prisma.$disconnect()
//     }
// }
// const GetTotalCount = async( query : any, OR?: any) => {
//     const prisma = new PrismaClient()
  
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
const GetTotalCount = async( type ?: string,purpose?:string) => {
    const prisma = new PrismaClient()
  
    const totalCount = await prisma
        .properties
        .count({
            where: {
                type,
                purpose,
            }
        })
    return totalCount || 0
}
export async function getServerSideProps({query} : any) {

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

    const itemsPerPage = 9
    const prisma = new PrismaClient()
    const purpose = isPurposeValid(`${query.purpose}`)
    const type = Category(`${query.type}`)
    try {
        const currentPage = query.page || 0;
        const totalCount = await GetTotalCount(type, purpose) || 0
        const totalPages = Math.round(totalCount / itemsPerPage)
        let skip = (currentPage * itemsPerPage) || undefined
        if (currentPage > totalPages || currentPage < 0) 
            skip = 0


            
        
        let data : any = await prisma
        .properties
        .findMany({
            skip,
            take: itemsPerPage,
            where: {
                purpose,
                type,
            },
            select
        })
        // just returning the first image because that's all I need
        // wish prisma provided an easier way to do this but oh well
        data.forEach((item:any)=>{
            item.images ? item.images = item.images[0] : ''
        })

        // just a way to deal with bigints
        data = data && toJson(data)
       
        return {props:{results:data,totalCount}}

        // let searchQuery = query
        //     ?.q
        //         ?.toLowerCase()
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
        // const currentPage = query
        //     ?.page || 0;

        // const totalCount = await GetTotalCount( query, undefined)
        // const totalPages = Math.round(totalCount / itemsPerPage)
        // let skip = (currentPage * itemsPerPage) || undefined
        // if (currentPage > totalPages || currentPage < 0) 
        //     skip = 0

        // if (query
        //     ?.q) {

        //     let propertiesArray = await GetProperties( skip, OR, itemsPerPage, query)

        //     if (propertiesArray && propertiesArray.length > 0) {

        //         const totalCount = await GetTotalCount( query, OR)
        //         return {
        //             props: {
        //                 results: toJson([...propertiesArray]),
        //                 totalCount
                        
        //             }
        //         }
        //     }
            
            
        // }

        // let propertiesArray = await GetProperties( skip, undefined, itemsPerPage, query)

        // if (!propertiesArray || propertiesArray
        //     ?.length < 1) {
        //     throw new Error('No Items Found')
        // }

        // return {
        //     props: {
        //         results: toJson([...propertiesArray]),
        //         totalCount

        //     }
        // }
    } catch (err) {
        console.log('err 1.4: ', err);
        return {props: {}}
    } finally {
        await prisma.$disconnect()
    }

}
