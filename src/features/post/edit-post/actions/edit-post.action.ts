'use server'
import { fetchWithRetry } from "@/features/auth/actions/retry.action";
import { Env } from "@/libs/Env";
import { safeAction } from "@/libs/safe-action";
import { returnValidationErrors } from "next-safe-action";
import { EditPostFormSchema } from "../schema";
import { PostResponseDto } from "../../type";

export const editPost = safeAction.inputSchema(EditPostFormSchema).action(async ({ parsedInput: { title, content, id } }) => {
    const response = await fetchWithRetry(`${Env.BOG_API_BASE_URL}posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
    });
    const data = await response.json();
    if (!response.ok) {
        return returnValidationErrors(EditPostFormSchema, { _errors: ["Incorrect credentials"] });
    }
    const post = data as PostResponseDto;

    return {
        success: true,
        post,
    };
})
