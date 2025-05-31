import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from '@/libs/i18nNavigation';
import { createRouteMatcher } from '@/utils/Helpers';

const intlMiddleware = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/post/:post/edit',
    '/me(.*)',
]);

const isAuthPage = createRouteMatcher(['/auth(.*)', '/:locale/auth(.*)']);

export default async function middleware(request: NextRequest) {
    const locale =
        request.nextUrl.pathname.match(/(\/.*)/)?.at(1) ?? '';
    const signInUrl = new URL(`${locale}/sign-in`, request.url);
    const landingUrl = new URL(`${locale}`, request.url);
    console.log('locale', locale);

    // if (isAuthPage(request) || isProtectedRoute(request)) {
    //     return (async (req) => {
    //         if (isProtectedRoute(req)) {
    //             // Simulate protection behavior
    //             const isAuthenticated = true; // Replace with your own authentication logic
    //             if (!isAuthenticated) {
    //                 return NextResponse.redirect(signInUrl.toString());
    //             }
    //         }

    //         return intlMiddleware(req);
    //     })(request);
    // }

    // Extract the URL pathname from the request
    const path = request.nextUrl.pathname;

    // Allow direct access to sitemap.xml and robots.txt without i18n middleware processing
    // This ensures these files are properly served for SEO purposes
    if (path === '/sitemap.xml' || path === '/robots.txt') {
        return NextResponse.next();
    }

   

    return intlMiddleware(request);
}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};
