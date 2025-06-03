// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { createRouteMatcher } from '@/utils/Helpers';
import { verifyAccessToken } from '@/libs/auth/jwt'; // utilitaire pour vérifier le JWT
import { routing } from '@/libs/i18nNavigation';

const intlMiddleware = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/post/:post/edit',
  '/me(.*)',
]);
const isAuthPage = createRouteMatcher(['/auth(.*)', '/:locale/auth(.*)']);

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Laisser passer sitemap.xml / robots.txt sans authentification
  if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
    return NextResponse.next();
  }

  // 2. Si c'est une page d'auth ou une route protégée, on vérifie le JWT
  const matchAuth = isAuthPage(request);
  const matchProtected = isProtectedRoute(request);

  if (matchAuth || matchProtected) {
    // Extraction du cookie "access_token" (JWT)
    const accessToken = request.cookies.get('access_token')?.value;

    // Si on est sur une route protégée et qu’il n’y a pas de token → redirection vers /sign-in
    if (matchProtected && !accessToken) {
      const locale = request.nextUrl.pathname.match(/^(\/[^\/]+)/)?.[1] || '';
      const signInUrl = new URL(`${locale}/sign-in`, request.url);
      return NextResponse.redirect(signInUrl);
    }

    // Si on a un cookie, on vérifie le JWT
    if (accessToken) {
      try {
        // Si le verify échoue, on catchera et redirigera plus bas
        await verifyAccessToken(accessToken);
      } catch {
        // Token invalide ou expiré → suppression et redirection vers /sign-in
        const response = NextResponse.redirect(
          new URL(`${(pathname.match(/^(\/[^\/]+)/)?.[1] || '')}/sign-in`, request.url)
        );
        response.cookies.delete('access_token');
        return response;
      }
    }
  }

  // 3. Lancer next-intl pour le reste des routes (multilingue, etc.)
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // On évite _next, fichiers statiques, etc.
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Toujours exécuter pour API routes
    '/(api|trpc)(.*)',
  ],
};
