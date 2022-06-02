import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../lib/prisma'
import bcrypt from 'bcrypt'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Username'
        },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async credentials => {
        const user = await prisma.users.findUnique({
          where: {
            username: credentials.username
          }
        })

        if (user) {
          const password = await bcrypt.compare(
            credentials.password,
            user.password
          )
          if (password) {
            return {
              user: user.username,
              role: user.role
            }
          }
        }

        return null
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user.user
        token.role = user.role
      }

      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user
        session.role = token.role
      }

      return session
    }
  },
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 60 * 60 * 1 // 1 hour
  },
  session: {
    maxAge: 60 * 60 * 1 // 1 hour
  },
  pages: {
    signIn: '/signin'
  }
})
