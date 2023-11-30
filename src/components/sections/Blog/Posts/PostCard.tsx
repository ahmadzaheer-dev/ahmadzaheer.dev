import { Post } from "contentlayer/generated";
import { getHeadingStyles } from "@/ui/utils";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { ExternalLink } from "lucide-react";

type Props = {
  post: Post;
  postNumber: number;
};

const PostCard = ({ post }: Props) => {
  return (
    <div className="mb-10 group w-full">
      <Link href={post.slug}>
        <h3
          className={cn(
            getHeadingStyles("h3"),
            "text-primary-green group-hover:underline"
          )}
        >
          {post.title}
        </h3>
      </Link>
      <time dateTime={post.date} className="text-sm mb-3 block text-typo-body">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <p className="mb-5 text-typo-body">{post.description}</p>
      <Link
        href={post.slug}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md transition-all hover:bg-primary-green bg-white text-bgColor font-semibold "
      >
        <ExternalLink /> Read More
      </Link>
    </div>
  );
};

export default PostCard;
