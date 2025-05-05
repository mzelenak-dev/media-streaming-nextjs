import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <section className="absolute top-0 left-0 z-[-1]">
        <Hero />
      </section>
    </main>
  );
}
