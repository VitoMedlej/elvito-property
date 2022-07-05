// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse}
from 'next'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
import {PrismaClient} from '@prisma/client'
import Cookies from 'cookies';
import { TData, TuserSchema } from '../../../src/Types';

const prisma = new PrismaClient()



export const clearCookies = async(payload : TuserSchema) => {
 
}



export default async function handler(req : NextApiRequest, res : NextApiResponse < TData >) {
    try {
        if (req.method !== 'POST') {
            return res
                .status(405)
                .json({message: 'method not allowed!'})
        }

        const cookies = new Cookies(req, res)
        cookies.set('auth-token', '', {
            httpOnly: true,
            sameSite: 'lax',
            expires:new Date()

        })
        cookies.set('user-session','', {
            httpOnly: false,
            sameSite: 'lax',
            expires:new Date()
        })

        

        return res
            .status(200)
            .json({message:'Cookies cleared successfully'})

    } catch (err) {
        console.log('err: ', err);

        return res
            .status(400)
            .json({message: `${err}`})
    } finally {
        await prisma.$disconnect()
    }

}
