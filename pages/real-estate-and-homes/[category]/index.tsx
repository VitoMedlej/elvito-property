import {Box, Button, Drawer} from "@mui/material"
import {PrismaClient} from "@prisma/client"
import {useSession} from "next-auth/react"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import FilterBar from "../../../components/FilterBar/FilterBar"
import PropertySection from "../../../components/PropertySection/PropertySection"

const Index = ({results, totalCount} : {
    results: any,
    totalCount: number
}) => {

    const AllProperties = results && JSON.parse(results)

    const router = useRouter()
    const {data: session} = useSession()

    const [isDrawerOpen,
        setDrawerOpen] = useState(false)
    const toggleDrawer = (open : boolean) => (event : React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setDrawerOpen(open);

    };

    return (
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
    )
}

export default Index
// a function i stole to deal with big ints
export const toJson = (data : any) => {
    return JSON.stringify(data, (_, v) => typeof v === 'bigint'
        ? `${v}n`
        : v).replace(/"(-?\d+)n"/g, (_, a) => a);
}
export async function getServerSideProps({query} : any) {

    const prisma = new PrismaClient()
    try {

        let categories = ["apartment", "villa", "comercial", "land", "chalet"]
        let selectedCategory = categories.includes(`${query
            ?.category}`)
            ? query.category
            : undefined
        let selectedPurpose = query && query
            ?.purpose === 'for-sale' || query
                ?.purpose === 'for-rent'
                    ? query.purpose
                    : undefined

        const propertiesArray = await prisma
            .properties
            .findMany({
                take: 9,
                where: {
                    purpose: selectedPurpose,
                    type: selectedCategory
                },
                select: {
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
                    currency: true
                }
            })
        const results = toJson(propertiesArray)
        
        const totalCount = await prisma
            .properties
            .count({
                where: {
                    type: selectedCategory
                }
            })
        if (!results) {
            throw new Error('error ,no data found')
        }
        return {
            props: {
                results,
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
