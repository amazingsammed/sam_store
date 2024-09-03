import NextAuth from "next-auth"

import {authOptions} from "@/lib/nextauth";



const handler = async function auth(req, res) {
return await NextAuth(req,res,authOptions)
}

export { handler as GET, handler as POST }