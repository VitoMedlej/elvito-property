// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse}
from 'next'
const bcrypt = require('bcrypt')
const saltRounds = 10;

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

type Data = {
    message?: string
}

export const handlePostRequest = async(requestBody : any) => {
    try {
        requestBody = JSON.parse(requestBody)
        await prisma.$connect()
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(requestBody.userPassword, salt);

        requestBody.userPassword = hashedPassword

        const user =    await prisma
            .users
            .create({
                data: {
                    ...requestBody,
                    userPhone: '',
                    userImage: 'https://www.pngitem.com/pimgs/m/551-5510463_default-user-image-png-transparent-p' +
                            'ng.png'
                }
            })
        if (!user) {
            throw new Error('Error creating user')
        }
        return
        
    } catch (err) {
        console.log('err 1.1: ', err);

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
        const userData = req.body
        if (!userData || !userData
            ?.userEmail || !userData
                ?.userPassword) {
            return res
                .status(400)
                .json({message: 'Error ,missing details.'})
        }
        if (userData.userPassword.length < 4) {
            return res
                .status(400)
                .json({message: 'Error, Password is weak'})
        }
        const user = await prisma
            .users
            .findFirst({
                where: {
                    userEmail: `${userData.userEmail}`
                }
            })
        if (user) {
            return res
                .status(400)
                .json({message: 'Error ,user already exists. '})
        }

        await handlePostRequest(JSON.stringify(userData))
        return res
            .status(200)
            .json({message: 'Success, user saved!'})

    } catch (err) {

        return res
            .status(400)
            .json({message: `Error, something went wrong! ,${err}`})
    }
    finally {
        await prisma.$disconnect()
    }

}
