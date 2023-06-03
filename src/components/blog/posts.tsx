import Link from "next/link";
import { BlogPostsProps } from "@/models/blog/blog_posts_props";

const Posts = ({ posts }: BlogPostsProps) => {
  return (

    <div className="posts">
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      {!posts && <div>No posts!</div>}
        {posts &&
          posts
            .sort(
              (a, b) =>
                new Date(b.publishedDate).getTime() -
                new Date(a.publishedDate).getTime()
            )
            .map((post) => {
              return (
                <Link
                href={{ pathname: `/blog/${post.slug}` }}
                key={post.slug}
                >
                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <h2 className={`mb-3 text-2xl font-semibold`}>
              {post.title} {' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {post.publishedDate}
              </p>
              </div>
            </Link>);
            })}
    </div>
    </div>
    </div>
  );
};

export default Posts;
