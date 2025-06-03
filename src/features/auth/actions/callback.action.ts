'use server';

import { cookies } from 'next/headers';
import { Env } from '@/libs/Env';

export const callbackAction = async ({
    code,
    provider,
}: {
    code: string;
    provider: 'GOOGLE' | 'GITHUB';
}) => {
    const res = await fetch(`${Env.BOG_API_BASE_URL}auth/callback/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, provider }),
    });

    if (!res.ok) {
        console.error('Erreur callback', res.status);
        return { error: ['Erreur callback'] };
    }

    const { accessToken, refreshToken } = await res.json();

    const cookieStore = await cookies();
    const maxAge = 60 * 60 * 24 * 7; // 7 jours

    cookieStore.set('access_token', accessToken, {
        httpOnly: true,
        secure: Env.NODE_ENV === 'production',
        path: '/',
        maxAge,
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
};
