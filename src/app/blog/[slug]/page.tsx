import { getFileContent, getAllFiles } from "@/libs/fs";
import { renderMarkdown } from "@/libs/markdown";

import "highlight.js/styles/github-dark.css";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const { slug } = params;
  const data = await getFileContent(slug);

  const content = await renderMarkdown(data.content);
  return (
      <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <article className="prose lg:prose-xl">
        <h1>{data.metadata.title}</h1>
        <div>{data.metadata.publishedDate}</div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
      </div>
      </main>
    </>
  );
}

// Read more about static paths: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
// This function gets called at build time to generate static paths.
export async function generateStaticParams() {
  const posts = await getAllFiles();;
 
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
