import {Box, Button, Drawer} from "@mui/material"
import {PrismaClient} from "@prisma/client"
import {useSession} from "next-auth/react"
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
// a function i stole to deal with big ints
export const toJson = (data : any) => {
    return JSON.stringify(data, (_, v) => typeof v === 'bigint'
        ? `${v}n`
        : v).replace(/"(-?\d+)n"/g, (_, a) => a);
}

const Category = (categoryQuery: string) => {
    let categories = ["apartment", "villa", "comercial", "land", "chalet"]

   if ( !categories.includes(categoryQuery)) {
            return undefined
   }
   return categoryQuery
}
let isPurposeValid = (purposeQuery : string) => {
    if (purposeQuery === 'for-sale' || purposeQuery === 'for-rent') return purposeQuery
   return undefined

} 
const GetProperties = async(prisma : PrismaClient, skip ?: number ,OR?: any[], itemsPerPage?: number,query ?: any) => {
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
                skip: skip,
                take: itemsPerPage,
                where: {
                    purpose:isPurposeValid(query?.purpose),
                    type:Category(query?.category),
                    OR
                },
                select
            })
        return [...data]
    } catch (err) {
        console.log(err);

    } finally {
        await prisma.$disconnect()
    }
}
export async function getServerSideProps({query} : any) {

    const itemsPerPage = 9
    const prisma = new PrismaClient()
    try {
        let searchQuery = query
        ?.q
            ?.toLowerCase()
        let OR = searchQuery
        ? [
            {
                description: {
                    contains: searchQuery
                }
            }, {
                title: {
                    contains: searchQuery
                }

            }

        ]
        : undefined
        const page = query
            ?.page || 0;
     
     
        const totalCount = await prisma
            .properties
            .count({
                where: {
                    type: Category(query?.category),
                    purpose: isPurposeValid(query?.purpose),
                    OR
                }
            })
       
        const totalPages = Math.round(totalCount / itemsPerPage)
        let skip = (page * itemsPerPage) || undefined
        if (page > totalPages || page < 0) 
            skip = 0
        const propertiesArray = await GetProperties(prisma ,skip,OR,itemsPerPage,query)
        // let propertiesArray = await prisma
        //     .properties
        //     .findMany({
        //         skip: skip,
        //         take: itemsPerPage,
        //         where: {
        //             purpose: isPurposeValid
        //                 ? purposeQuery
        //                 : undefined,
        //             type: isCategoryValid
        //                 ? categoryQuery
        //                 : undefined,
        //             OR
        //         },
        //         select
        //     })

        if (!propertiesArray || propertiesArray
            ?.length < 1) {
            throw new Error('error ,no data found')
        }
        return {
            props: {
                results: toJson([...propertiesArray]),
                totalCount

            }
        }
    } catch (err) {
        console.log('err 1.4: ', err);
        return {props: {}}
    } finally {
        await prisma.$disconnect()
    }

}
