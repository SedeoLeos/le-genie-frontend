'use server'
import { fetchWithRetry } from "@/features/auth/actions/retry.action";
import { Env } from "@/libs/Env";
import { PostResponseDto } from "../type";


export const createPost = async () => {
    const response = await fetchWithRetry(`${Env.BOG_API_BASE_URL}posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {
        return null;
    }
    const post = data as PostResponseDto;

    return post;
}
