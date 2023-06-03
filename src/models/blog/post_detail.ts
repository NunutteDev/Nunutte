import { Post } from './post';

export type PostDetail = Post & {
    title: string;
    body_html: string;
    body_markdown: string;
    tags: string[];
    publishedDate: string;
};
