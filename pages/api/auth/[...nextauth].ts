import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import {PrismaClient} from "@prisma/client"
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

export default NextAuth({
    // Configure one or more authentication providers adapter:
    // PrismaAdapter(prisma),
    providers: [CredentialsProvider({
            credentials: {
                userEmail: {
                    label: "email",
                    type: "email"
                },
                userPassword: {
                    label: "Password",
                    type: "password"
                }

            },

            async authorize(credentials) {
                try {

                    if (!credentials || credentials.userPassword.length < 3 || !credentials
                        ?.userEmail) {
                        return null
                    }
                    await prisma.$connect()

                    const user = await prisma
                        .users
                        .findFirst({
                            where: {
                                userEmail: `${credentials.userEmail}`
                            }
                        })
                    if (!user) {
                        return null
                    }
                    const {userEmail, userName, userImage, id} = user
                    console.log('id: ', id);

                    const result = await bcrypt.compare(credentials.userPassword, user
                        ?.userPassword)

                    if (!result) {
                        return null
                    }

                    let currentUser = {
                        email: userEmail,
                        name: userName,
                        image: userImage
                    }
                    console.log('currentUser: ', currentUser);
                    return currentUser
                } catch (err) {
                    console.log('err ...auth: ', err);
                    return null

                } finally {
                    prisma.$disconnect()
                }
            }
        })]
})