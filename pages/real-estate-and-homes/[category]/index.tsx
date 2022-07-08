import {Box, Drawer} from "@mui/material"
import {PrismaClient} from "@prisma/client"
import {useRouter} from "next/router"
import {useState} from "react"
import FilterBar from "../../../components/FilterBar/FilterBar"
import Layout from "../../../components/layout/Layout"
import PropertySection from "../../../components/PropertySection/PropertySection"
import capitalizeString from "../../../src/Functions/capitalizeString"
import { bigInt_To_Number } from "./[title]"

const Index = ({results, totalCount} : {
    results: any,
    totalCount: number
}) => {



    const router = useRouter()
    let {purpose, category} = router.query
    // remove the (-) ,from for-sale to for sale
    purpose = purpose
        ? `${purpose}`.replace(/-/g, " ")
        : ''

    category = purpose
        ? capitalizeString(`${category}`)
        : category;
        // we have to cases here, the title is either this or that Best ... in lebanon
        // ... for sale in lebanon
    const title = `${purpose
        ? ''
        : 'Best'} ${category}s ${purpose && purpose} in Lebanon - El-Vito Properties`



    const [isDrawerOpen,
        setDrawerOpen] = useState(false)
    const toggleDrawer = (open : boolean) => (event : React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
    }
        setDrawerOpen(open);
    };


    return (
        <Layout 
        title={title}
        description={'Browse hundreds of properties in lebanon, find your dream home. Buy, rent, and sell all kinds of real estates only on El-Vito. '}>
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
                    AllProperties={results}
                    sectionTitle={`${router.query.id || 'propertie'}`}/>

                <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <Box sx={{
                        width: '300px'
                    }}></Box>
                </Drawer>

            </Box>
        </Layout>

    )
}

export default Index



const Category = (categoryQuery : string) => {
    let categories = ["apartment", "villa", "comercial", "land", "chalet"]

    if (categories.includes(categoryQuery)) {
        return categoryQuery
    }
    return undefined
}
const isPurposeValid = (purposeQuery : string) => {
    if (purposeQuery === 'for-sale' || purposeQuery === 'for-rent') {
        return purposeQuery
    }
    return undefined
}


const GetTotalCount = async(type?: string, purpose?: string) => {
    const prisma = new PrismaClient()

    const totalCount = await prisma
        .properties
        .count({
            where: {
                type,
                purpose
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
    const type = Category(`${query.category}`)
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
                    type
                },
                select
            })
        // just returning the first image because that's all I need wish prisma provided
        // an easier way to do this but oh well
        data.forEach((item : any) => {
            item.images
                ? item.images = item.images[0]
                : ''
        })

        // just a way to deal with bigints
        bigInt_To_Number(data)

        return {
            props: {
                results: data,
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
