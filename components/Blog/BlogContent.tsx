"use client";
import { allPosts } from "@/.contentlayer/generated";
import PostCard from "@/components/Blog/PostCard";
import Category from "@/components/Blog/Category";
import { compareDesc } from "date-fns";
import { useCategoryStore } from "@/stores";

export default function BlogContent() {
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );

  const filteredPosts = posts.filter((post) =>
    selectedCategory === "All" ? true : post.category === selectedCategory
  );

  return (
    <section className="flex justify-center flex-wrap mt-3">
      <div className="max-w-[1068px]">
        <div className="max-w-[1068px] w-screen px-6">
          <h2 className="text-2xl md:text-[30px] font-bold mt-2 mb-2">
            {selectedCategory === "All" ? "All Posts" : selectedCategory} (
            {filteredPosts.length})
          </h2>
          <Category
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>
        <section className="px-6 max-w-[1068px] w-screen">
          <div className="grid grid-cols-1 gap-[40px] gap-y-14 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
