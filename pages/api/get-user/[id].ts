import {PrismaClient} from '@prisma/client'
import {NextApiRequest, NextApiResponse} from 'next'

const prisma = new PrismaClient()

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    try {
        if (req.method !== 'GET') {
            return res
                .status(405)
                .json({message: 'method not allowed!'})
        }

        const id = req.query.id;
        
        if (!id) {
            return res
                .status(400)
                .send({message: 'invaild id'})

        }
        const user = await prisma
            .users
            .findFirst({
                where: {
                    id: `${id}`
                }
            })
        if (!user) {
            return res
                .status(404)
                .send({message: 'user not found'})

        }
        return res
            .status(200)
            .json(user)

    } catch (err) {
        console.log('err: ', err);
        throw err

    }
}
