import Hero from "@/src/components/Hero";
import Dp from "@/src/components/Dp";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="w-11/12 max-w-6xl mx-auto py-10 flex flex-col gap-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <Hero />
          </div>
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-6">
            <Dp />
          </div>
        </div>
      </div>
      <Navbar />
    </main>
  );
}
