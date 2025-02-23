import Providers from "@/components/Blog/Provider";
import "@/styles/blog.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
