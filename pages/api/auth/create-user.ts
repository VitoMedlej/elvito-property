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
        await prisma.$connect()
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(requestBody.userPassword, salt);

        requestBody.userPassword = hashedPassword

        const user = await prisma
            .users
            .create({
                data: {
                    ...requestBody,
                    userPhone: '',
                    userImage: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1656917251/download_wvbqse.png'
                }
            })
        if (!user) {
            throw new Error('Error creating user')
        }

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
        const {userPassword, userName, userEmail} = req.body
        if (!req.body || !userEmail || !userPassword) {
            throw 'Missing details'
        }
        if (userPassword.length < 4 || userPassword === userName) {
            throw 'Password is weak'
        }
        const user = await prisma
            .users
            .findFirst({
                where: {
                    userEmail: `${userEmail}`
                }
            })
        if (user) {
            throw 'User already exists!'
        }
        await handlePostRequest(req.body)

        return res
            .status(200)
            .json({message: 'Success, user saved!'})

    } catch (err) {
        console.log('err: ', err);

        return res
            .status(400)
            .json({message: `${err}`})
    } finally {
        await prisma.$disconnect()
    }

}
