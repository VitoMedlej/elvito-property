// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse}
from 'next'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
import {PrismaClient} from '@prisma/client'
import Cookies from 'cookies';
import { TData, TuserSchema } from '../../../src/Types';

const prisma = new PrismaClient()



export const generateToken = async(payload : TuserSchema) => {
    try {

        await prisma.$connect()
        // creating a jwt token, the payload must not contain any sensitive data such as
        // passwords
        const token = await jwt.sign(payload, process.env.SECRET);
        if (!token) {
            throw 'Failed to generate token'
        }
        return token

    } catch (err) {
        throw `${err}`

    } finally {
        await prisma.$disconnect()
    }
}

const ComparePasswords = async(originalPassword : string, encryptedPassword : string) => {
    try {
        if (originalPassword && encryptedPassword) {
            const isSamePassword = await bcrypt.compare(originalPassword, encryptedPassword)
            return isSamePassword
                ? true
                : false
        }
    } catch (err) {
        console.log('err: ', err);
        return
    }
}

export default async function handler(req : NextApiRequest, res : NextApiResponse < TData >) {
    try {
        if (req.method !== 'POST') {
            return res
                .status(405)
                .json({message: 'method not allowed!'})
        }
        const {email, password} = req.body

        if (!req.body || !email || !password) {
            throw 'Missing details'
        }

        const user = await prisma
            .users
            .findFirst({
                where: {
                    userEmail: `${email}`
                }
            })

        if (!user) {
            throw 'You have entered an invalid username or password'
        }
        const isSamePassword = ComparePasswords(password, user.userPassword)
        if (!isSamePassword) {
            throw 'You have entered an invalid username or password'
        }

        const payload = {
            name: user.userName,
            email,
            id: user.id
        }

        const generatedToken = await generateToken(payload)
        // set the jwt token as http only cookie just a step to limit secuirty risks
        const cookies = new Cookies(req, res)
        cookies.set('auth-token', generatedToken, {
            httpOnly: true,
            sameSite: 'lax'
        })
        cookies.set('user-session', JSON.stringify({...payload,image:user.userImage,phoneNumber:user.userPhone}), {
            httpOnly: false,
            sameSite: 'lax',
            expires: new Date(new Date().getTime()+86409000)
        })

        

        // return user data to save it in user session on client side
        return res
            .status(200)
            .json({
                ...payload,
                image: user.userImage,
                userPhone: user.userPhone
            })

    } catch (err) {
        console.log('err: ', err);

        return res
            .status(400)
            .json({message: `${err}`})
    } finally {
        await prisma.$disconnect()
    }

}
