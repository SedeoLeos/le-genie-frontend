import { routing } from '@/libs/i18nNavigation';
import { NextRequest } from 'next/server';

/**
 * Matches a URL against a list of patterns.
 * @param patterns - The list of patterns to match against.
 * @returns A function that checks if a given request matches any of the patterns.
 */
export const createRouteMatcher = (
    patterns: string[]
): ((request: NextRequest) => boolean) => {
    const regexes = patterns.map(
        (pattern) => new RegExp(`^${pattern.replace(/:\w+/g, '[^/]+')}$`)
    );
    return (request: NextRequest) => {
        const pathname = request.nextUrl?.pathname || '';
        return regexes.some((regex) => regex.test(pathname));
    };
};

export const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_APP_URL) {
        return process.env.NEXT_PUBLIC_APP_URL;
    }

    if (
        process.env.VERCEL_ENV === 'production' &&
        process.env.VERCEL_PROJECT_PRODUCTION_URL
    ) {
        return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    }

    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }

    return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
    if (locale === routing.defaultLocale) {
        return url;
    }

    return `/${locale}${url}`;
};
