import Providers from "@/components/Blog/Provider";
import Header from "@/components/Blog/Header";
import "@/styles/blog.css";
import "@/styles/reset.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      <div className="h-[61px] w-full" />
      {children}
    </Providers>
  );
}
