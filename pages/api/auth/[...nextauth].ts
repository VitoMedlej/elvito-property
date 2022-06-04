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
            // credentials: {     userEmail: {         label: "email",         type: "email"
            //     },     userPassword: {         label: "Password",         type:
            // "password"     },     userId: {         label: 'id',         type: 'text' },
            // id: {         label: 'id',         type: 'text'     } },
            credentials: {
                userEmail: {
                    label: "email",
                    type: "text"
                },
                userPassword: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize(credentials) {
                try {

                    // const user = { id: 1890, name: "J Smith", email: "jsmith@example.com" } if
                    // (user) {   // Any object returned will be saved in `user` property of the JWT
                    //   return user } else {   // If you return null then an error will be
                    // displayed advising the user to check their details.   return null   // You
                    // can also Reject this callback with an Error thus the user will be sent to the
                    // error page with the error message as a query parameter }

                    if (!credentials || credentials.userPassword.length < 3 || !credentials
                        ?.userEmail) {
                        return null
                    }
                    await prisma.$connect()
                    const user = await
                    prisma
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

                    const result = await bcrypt.compare(credentials.userPassword, user
                        ?.userPassword)
                    if (!result) {
                        return null
                    }
                    let currentUser = {
                        email: userEmail,
                        name: userName,
                        image: userImage,
                        id
                    }

                    return currentUser
                } catch (err) {
                    console.log('err ...auth: ', err);
                    return null

                } finally {
                    prisma.$disconnect()
                }
            }
        })],

    callbacks: {
        jwt: async({token, user}) => {
            if (user) {
                token.id = user.id
            }
            return token
        },
        session: async({session, token}) => {
            if (token) {
                session.id = token.id
            }
            return session
        }
    }

})