import Providers from "@/components/Blog/Provider";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
