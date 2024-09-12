import {withAuth} from "next-auth/middleware";
import {NextResponse} from "next/server";
import path from "node:path";


export default withAuth(
    async function middleware(req) {
        const token = await req.nextauth.token;
        console.log(token)

        if (token['jti'] !== undefined) {
            return NextResponse.next();
        }

        return NextResponse.redirect("/api/auth/signin");
    }
)

export const config = {
    matcher: [
        "/[storeid]/:path*",
        "/stores/:path*",
        "/stores"]
}


