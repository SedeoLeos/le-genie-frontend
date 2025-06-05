'use server'
import { fetchWithRetry } from "@/features/auth/actions/retry.action";
import { Env } from "@/libs/Env";
import { safeAction } from "@/libs/safe-action";
import { returnValidationErrors } from "next-safe-action";
import { CommentPostFormSchema } from "../edit-post/schema";
import { CommentPostResponseDto } from "../type";


export const commentPost = safeAction
    .inputSchema(CommentPostFormSchema)
    .action(async ({ parsedInput: { postId, content } }) => {


        const response = await fetchWithRetry(
            `${Env.BOG_API_BASE_URL}posts/${postId}/comments`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content }),
            }
        );
        const data = await response.json();
        if (!response.ok) {
            return returnValidationErrors(CommentPostFormSchema, {
                _errors: ['Incorrect credentials'],
            });
        }
        const comment = data as CommentPostResponseDto;

        return {
            success: true,
            comment,
        };
    });