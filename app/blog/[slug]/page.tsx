import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Pre } from "@/components/Blog/Pre";
import Comments from "@/components/Blog/Comments";
import Tag from "@/components/Blog/Tag";

const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  // @ts-ignore
  pre: Pre,
};

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
};

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://yeonu.me/blog/${post._raw.flattenedPath}`,
      images: [
        {
          url: `/img/thumbnail/${post.thumbnail}`,
          width: 800,
          height: 600,
          alt: `${post.title} thumbnail`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        {
          url: `/img/thumbnail/${post.thumbnail}`,
          alt: `${post.title} thumbnail`,
        },
      ],
    },
  };
};

/*
prose-img:w-full
prose-blockquote:not-italic
 */
const style = `
prose-img:rounded-md
before:prose-p:content-none 
after:prose-p:content-none 
before:prose-code:content-none 
after:prose-code:content-none 
prose-blockquote:border-solid
prose-blockquote:bg-[#F5F5F5]
dark:prose-blockquote:bg-[#262626]
prose-a:text-blue-500
prose-a:no-underline
hover:prose-a:text-blue-700
hover:prose-a:underline
`;

export default function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="max-w-3xl px-6 mx-auto">
      <div className="mt-10 mb-8 text-center">
        <time
          dateTime={post.createdAt}
          className="mb-2.5 text-base text-[#686868] dark:text-[#A3A3A3]"
        >
          {new Intl.DateTimeFormat("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(new Date(post.createdAt))}
        </time>
        <h3 className="mb-0 text-2xl md:text-[32px] font-bold text-black dark:text-white">
          {post.title}
        </h3>
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        <div className="h-px w-full mt-5 bg-[#D4D4D4] dark:bg-[#686868]" />
      </div>
      <section className={`prose prose-lg mx-auto dark:prose-invert ${style}`}>
        <MDXContent components={mdxComponents} />
      </section>
      <div className="h-px w-full my-5 bg-[#D4D4D4] dark:bg-[#686868]" />
      <Comments />
    </article>
  );
}