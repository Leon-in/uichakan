import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextResponse } from "next/server"
import NextAuth from "next-auth/next"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null
        
        // In production, verify against your database
        if (
          credentials.username === "admin" && 
          credentials.password === "password123"
        ) {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@siweihaiyang.com",
            role: "admin"
          }
        }
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role
      }
      return session
    }
  },
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

