import {withAuth} from "next-auth/middleware";
import {NextResponse} from "next/server";


export default withAuth(
    async function middleware(req) {
        const token = await req.nextauth.token;
        console.log(token['uuid'] ,'middleware');

        if (token['jti'] !== undefined) {
            return NextResponse.next();
        }
        if (token['uuid'] !== undefined) {
            return NextResponse.next();
        }
        if (token['email'] !== undefined) {
            return NextResponse.next();
        }
        return NextResponse.redirect("/api/auth/signin");
    }
)

export const config = {
    matcher: [
        "/[storeid]/:path*",
        "/stores/:path*",
        "/stores",
        "/api/app/:path*"
    ]
}


