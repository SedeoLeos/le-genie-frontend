import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostData(fileContents: string) {
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML: {
        contentHtml: string;
        title: string;
        date: string;
    } = {
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    };

    // Combine the data with the id
    return blogPostWithHTML;
}
