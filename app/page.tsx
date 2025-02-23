import Title from "@/components/Title";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import SkillsList from "@/components/SkillsList";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Title />
      <Gallery />
      <About />
      <SkillsList />
      <Contact />
    </>
  );
}
