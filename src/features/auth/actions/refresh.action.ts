"use server";

import { Env } from "@/libs/Env";
import { cookies } from "next/headers";

export async function refreshToken() {
    const cookieStore = await cookies();
    const currentRefreshToken = cookieStore.get("refresh_token")?.value;

    if (!currentRefreshToken) return { error: "No refresh token available" };

    const res = await fetch(`${Env.BOG_API_BASE_URL}auth/refresh/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentRefreshToken}`
        },
    });

    if (!res.ok) return { error: "Failed to refresh token" };

    const { accessToken, refreshToken } = await res.json();

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
}
