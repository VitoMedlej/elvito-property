import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
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
                    type: "text"
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
                            console.log('missing user data');
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
                        console.log('no users found');
                        return null
                    }
                    const {userEmail, userName, userImage, id} = user

                    const result = await bcrypt.compare(credentials.userPassword, user
                        ?.userPassword)
                    if (!result) {
                        console.log('result: wrong password');
                        return null
                    }
                    let currentUser = {
                        email: userEmail,
                        name: userName,
                        image: userImage,
                        id
                    }
                    console.log('successfully logged in');
                    
                    return currentUser
                } catch (err) {
                    console.log('err ...auth: ', err);
                    return null

                } finally {
                    prisma.$disconnect()
                }
            }
        })],
    pages : {
        signIn: '/account/login',
      
        error: '/account/login',
        newUser: '/dashboard/main'
    },
    secret: process.env.NEXTAUTH_SECRET,

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
        },
        
        
    }

})