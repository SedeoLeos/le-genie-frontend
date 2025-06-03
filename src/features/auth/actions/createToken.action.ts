'use server';

import { cookies } from 'next/headers';
import { Env } from '@/libs/Env';
import { safeAction } from '@/libs/safe-action';
import { z } from 'zod';
import { returnValidationErrors } from 'next-safe-action';

const inputSchema = z.object({
    code: z.string(),
    provider: z.enum(['GOOGLE', 'GITHUB']),
});
export const createToken = safeAction.inputSchema(inputSchema).action(async ({ parsedInput }) => {
    const { code, provider } = parsedInput;
    const res = await fetch(`${Env.BOG_API_BASE_URL}auth/token/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, provider, callbackURL: Env.NEXT_PUBLIC_REDIRECT_URI }),
    });

    if (!res.ok) {
        console.error('Erreur callback', JSON.stringify(res, null, 2));
        return returnValidationErrors(inputSchema, { _errors: ["Incorrect credentials"] });

    }

    const { accessToken, refreshToken } = await res.json();
    
    const cookieStore = await cookies();
    const maxAge = 60 * 60 * 24 * 7;

    cookieStore.set('access_token', accessToken, {
        httpOnly: true,
        secure: Env.NODE_ENV === 'production',
        path: '/',
        maxAge: maxAge * 4,
        sameSite: 'lax',
    });

    cookieStore.set('refresh_token', refreshToken, {
        httpOnly: true,
        secure: Env.NODE_ENV === 'production',
        path: '/',
        maxAge: maxAge * 4,
        sameSite: 'lax',
    });
    return { success: true };
});
