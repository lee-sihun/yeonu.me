"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      enableSystem={true}
      attribute="class"
      storageKey="blog-theme"
      defaultTheme="system"
    >
      {children}
    </ThemeProvider>
  );
};

export default Providers;
