// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse}
from 'next'

import {PrismaClient} from '@prisma/client'
import { useSession } from 'next-auth/react'

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
        console.log('err: ', err);
        throw err

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
        if (!formData || !formData
            ?.coverPhoto || !formData
                ?.price) {

            return res
                .status(400)
                .json({message: `Error, missing property details! `})
        }
        await handlePostRequest(formData)
        return res
            .status(200)
            .json({message: 'Success, property saved!'})

    } catch (err) {

        return res
            .status(400)
            .json({message: `Error, something went wrong! ,${err}`})
    }

}
