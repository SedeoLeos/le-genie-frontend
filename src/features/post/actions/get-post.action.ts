'use server'
import { fetchWithRetry } from "@/features/auth/actions/retry.action";
import { Env } from "@/libs/Env";
import { safeAction } from "@/libs/safe-action";
import { returnValidationErrors } from "next-safe-action";
import { GetPostFormSchema } from "../edit-post/schema";

import { PaginationResponse, PostResponseDto } from "../type";


export const getPost = safeAction.inputSchema(GetPostFormSchema).action(async ({ parsedInput: { id } }) => {
    const response = await fetchWithRetry(`${Env.BOG_API_BASE_URL}posts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {

        return returnValidationErrors(GetPostFormSchema, { _errors: ["Incorrect credentials"] });
    }
    const post = data as PostResponseDto;

    return {
        success: true,
        post,
    };
})

export const getPaginatedPosts = async ({ page = 1, limit = 5,mode }: { page: number, limit: number,mode?: 'me' }) => {
    const response = await fetch(`${Env.BOG_API_BASE_URL}posts?limit=${limit}&page=${page}${mode === 'me' ? '&me=true' : ''}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {
        return {
            success: false,
            posts: [],
            total: 0,
            page: 0,
            limit: 0,
        };
    }
    const posts = data as PaginationResponse<PostResponseDto>;
    return {
        success: true,
        posts: posts.items,
        total: posts.total,
        page: posts.page,
        limit: posts.limit,
    };
}


