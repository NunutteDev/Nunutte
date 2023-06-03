import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPostProps } from "@/models/blog/blog_post_props";
const root = process.cwd();

export async function getFileContent(slug: string) {
  const source = fs.readFileSync(
    path.join(root, "src", "posts", `${slug}.md`),
    "utf8"
  );
  const { data, content } = matter(source);
  return {
    metadata: data,
    content,
  };
}

export async function getAllFiles() {
  const files = fs.readdirSync(path.join(root, "src", "posts"));

  return files.reduce((allPosts: any[], postSlug: string) => {
    const source = fs.readFileSync(
      path.join(root, "src", "posts", postSlug),
      "utf8"
    );
    const { data } = matter(source);
    return [
      {
        title: data.title,
        publishedDate: data.publishedDate,
        slug: data.slug,
      } as BlogPostProps,
      ...allPosts,
    ];
  }, []);
}
