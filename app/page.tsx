"use client"
import Title from "@/components/Title";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import SkillsList from "@/components/SkillsList";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      forcedTheme="light"
      storageKey="main-theme"
    >
      <Header />
      <Title />
      <Gallery />
      <About />
      <SkillsList />
      <Contact />
    </ThemeProvider>
  );
}
