import BlogContent from "@/components/Blog/BlogContent";

export const metadata = {
  title: "Blog",
  description: "연우의 블로그 게시글 리스트입니다.",
};

export default function Home() {
  return (
    <>
      <BlogContent />
    </>
  )
}