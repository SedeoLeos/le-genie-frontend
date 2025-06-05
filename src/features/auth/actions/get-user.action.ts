"use server";
import { cookies } from "next/headers";
import { fetchWithRetry } from "./retry.action";
import { Env } from "@/libs/Env";
export interface UserI {
    id: string;
    email: string;
    name: string;
    avatarPath: string;
}
export async function getUser() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;
    const response = await fetchWithRetry(`${Env.BOG_API_BASE_URL}auth/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    });
    const data = await response.json();
    if (!response.ok) {
        return null;
    }
    return data as UserI;
}