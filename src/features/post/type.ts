/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserI } from "@/features/auth/actions/get-user.action";

export interface CommentPostResponseDto {
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    postId: string;
    user: UserI
}

export interface PaginationResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
}

export interface PostResponseDto {
    id: string;
    title: string;
    imagePath: string;
    content: string;
    status: PostStatus;
    contributors: ContributorResponseDto[];
    postTags: any[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ContributorResponseDto {
    id: string;
    postId: string;
    userId: string;
    owner: boolean;
    user: UserI;
}

export type PostStatus = "EMPTY" | "DRAFT" | "PUBLISHED";