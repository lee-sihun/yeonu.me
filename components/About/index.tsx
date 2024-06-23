import ProfileCard from "./ProfileCard";

export default function About() {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h2 className="font-extrabold text-[80px] tracking-[-1.6px]">
        근데 누구..?
      </h2>
      <ProfileCard />
    </section>
  );
}
