"use server";
import { cookies } from "next/headers";
import { fetchWithRetry } from "./retry.action";
import { Env } from "@/libs/Env";

export async function getUserById() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token")?.value;
    const response = await fetchWithRetry(`${Env.BOG_API_BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
    });
    const data = await response.json();
    return data;
}