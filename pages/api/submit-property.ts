// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse}
from 'next'

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
    message?: string
}



export const handlePostRequest = async(requestBody : any) => {

    try {
        await prisma.$connect()
        await prisma
            .properties
            .create({data: requestBody})

        return
    } catch (err) {
        console.log('err 1.2: ', err);
  

    } finally {
        await prisma.$disconnect()
    }
}

export default async function handler(req : NextApiRequest, res : NextApiResponse < Data >) {
    try {
        if (req.method !== 'POST') {
            return res
                .status(405)
                .json({message: 'method not allowed!'})
        }

        let formData = req.body
        if (!formData || !formData.images
           || !formData
                .price) {
                    throw new Error('Missing details')
        }
        await handlePostRequest(formData)
        return res
            .status(200)
            .json({message: 'Success, property saved!'})

    } catch (err) {

        return res
            .status(400)
            .json({message: `Something went wrong! ,${err}`})
    }
   
}
