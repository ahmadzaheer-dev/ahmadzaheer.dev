import PostCard from "@/components/sections/Blog/Posts/PostCard";
import { allPosts } from "contentlayer/generated";

const Posts = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-lg mx-auto">
      {allPosts.map((post, index) => (
        <PostCard key={post._id} post={post} postNumber={index + 1} />
      ))}
    </div>
  );
};

export default Posts;
