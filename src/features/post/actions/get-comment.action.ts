import { Env } from "@/libs/Env";
import { CommentPostResponseDto, PaginationResponse } from "../type";

export const getPaginatedComments = async ({ page = 1, limit = 5,postId }: { page: number, limit: number,postId: string }) => {
    const response = await fetch(`${Env.BOG_API_BASE_URL}posts/${postId}/comments?limit=${limit}&page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    if (!response.ok) {
        return {
            success: false,
            comments: [],
            total: 0,
            page: 0,
            limit: 0,
        };
    }
    const comments = data as PaginationResponse<CommentPostResponseDto>;
    return {
        success: true,
        comments: comments.items,
        total: comments.total,
        page: comments.page,
        limit: comments.limit,
    };
}