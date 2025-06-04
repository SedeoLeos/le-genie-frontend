'use server'
import { fetchWithRetry } from "@/features/auth/actions/retry.action";
import { Env } from "@/libs/Env";
import { safeAction } from "@/libs/safe-action";
import { returnValidationErrors } from "next-safe-action";
import {  GetPostFormSchema } from "../schema";
import { PostResponseDto } from "../../type";

export const getPost = safeAction.inputSchema(GetPostFormSchema).action(async ({ parsedInput: { id } }) => {
    const response = await fetchWithRetry(`${Env.BOG_API_BASE_URL}posts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {
        console.log("data", data)
        return returnValidationErrors(GetPostFormSchema, { _errors: ["Incorrect credentials"] });
    }
    const post = data as PostResponseDto;

    return {
        success: true,
        post,
    };
})

export const getPaginatedPosts = async ({ page = 1, limit = 5 }: { page: number, limit: number }) => {
    console.log("limit", page)
    const response = await fetch(`${Env.BOG_API_BASE_URL}posts?limit=${limit}&page=${page}`, {
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
    const posts = data as { items: PostResponseDto[], total: number, page: number, limit: number };
    console.log("posts", posts)
    return {
        success: true,
        posts: posts.items,
        total: posts.total,
        page: posts.page,
        limit: posts.limit,
    };
}