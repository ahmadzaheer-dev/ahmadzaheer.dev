import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Metadata } from "next";
import Mdx from "@/components/Mdx";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-20 prose dark:prose-invert mx-auto prose-hr:my-8 prose-a:text-primary-green prose-code:bg-primary-green/10 prose-code:rounded-sm prose-code:text-primary-green prose-pre:text-primar-green prose-blockquote:border-primary-green prose-hr:border-white/20">
      <Link href="/#blog" className="mb-5 inline-block !text-white">
        <ArrowLeft />
      </Link>
      <time dateTime={post.date} className="mb-3 block text-typo-body">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <h1 className="text-primary-green">{post.title}</h1>
      <p>{post.description}</p>
      <hr />
      <Mdx code={post.body.code} />
    </article>
  );
}
