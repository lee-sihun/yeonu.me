import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/reset.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
