// import { NextResponse } from 'next/server'
//
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     console.log(request['url']);
//   return NextResponse.redirect(new URL('/', request.url))
// }
//
// // See "Matching Paths" below to learn more
// export const config = {
//   // matcher: ['/about/:path*',"/contact/:path*"]
//   matcher: ['/about/:path*']
// }
//
// import {withAuth} from "next-auth/middleware";
// import {NextResponse} from "next/server";
//
//
//   export default withAuth(
//     async function middleware(req) {
//         const token = await req.nextauth.token;
//         console.log(token)
//
//         if (token['jti'] !== undefined) {
//             return NextResponse.next();
//         }
//
//         return NextResponse.redirect("/");
//     }
//
//
//
// )
//
// export const config = { matcher: ["/[storeid]/:path*"] }

import {NextRequest, NextResponse} from 'next/server';
import {
    authMiddleware,
    redirectToHome,
    redirectToLogin
} from 'next-firebase-auth-edge';
import {authConfig} from './config/server-config';

const PUBLIC_PATHS = ['/auth/signup', '/auth/login', '/reset-password','/auth','/'];

export async function middleware(request: NextRequest) {
    return authMiddleware(request, {
        loginPath: '/api/login',
        logoutPath: '/api/logout',
        refreshTokenPath: '/api/refresh-token',
        enableMultipleCookies: authConfig.enableMultipleCookies,
        apiKey: authConfig.apiKey,
        cookieName: authConfig.cookieName,
        cookieSerializeOptions: authConfig.cookieSerializeOptions,
        cookieSignatureKeys: authConfig.cookieSignatureKeys,
        serviceAccount: authConfig.serviceAccount,
        handleValidToken: async ({token, decodedToken, customToken}, headers) => {

            if (PUBLIC_PATHS.includes(request.nextUrl.pathname)) {
                return redirectToHome(request);
            }

            return NextResponse.next({
                request: {
                    headers
                }
            });
        },
        handleInvalidToken: async (_reason) => {
            console.log(_reason);

            return redirectToLogin(request, {
                path: '/auth/login',
                publicPaths: PUBLIC_PATHS
            });
        },
        handleError: async (error) => {
            console.error('Unhandled authentication error', {error});

            return redirectToLogin(request, {
                path: '/auth/login',
                publicPaths: PUBLIC_PATHS
            });
        }
    });
}

export const config = {
    matcher: [
        '/',
        '/((?!_next|favicon.ico|__/auth|__/firebase|api|.*\\.).*)',
        '/api/login',
        '/api/logout',
        '/api/refresh-token'
    ]
};
