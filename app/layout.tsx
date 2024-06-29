import type { Metadata } from "next";
import Header from "@/components/Header";
import "@/styles/globals.css";
import "@/styles/reset.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  metadataBase: new URL("https://yeonu.me"),
  title: {
    default: "yeonu.me",
    template: "%s - yeonu.me",
  },
  description: "비주얼 아이덴티티 디자이너 연우입니다",
  openGraph: {
    title: "yeonu.me",
    description: "비주얼 아이덴티티 디자이너 연우입니다.",
    type: "website",
    siteName: "yeonu.me",
    url: "https://yeonu.me",
    locale: "ko_KR",
    images: [
      {
        url: "/img/logo.jpg",
        width: 800,
        height: 600,
        alt: "site logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "yeonu.me",
    description: "비주얼 아이덴티티 디자이너 연우입니다.",
    images: [
      {
        url: "/img/logo.jpg",
        alt: "site logo",
      },
    ],
  },
  generator: "Next.js",
  applicationName: "yeonu.me",
  creator: "lee-sihun",
  publisher: "yeonu",
};

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
    <html lang="ko">
      <body className={pretendard.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
