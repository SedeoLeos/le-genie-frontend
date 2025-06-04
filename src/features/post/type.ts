export interface PostResponseDto {
    id: string;
    title: string;
    imagePath: string;
    content: string;
    status: string;
    contributors: any[];
    postTags: any[];
    createdAt: Date;
    updatedAt: Date;
}