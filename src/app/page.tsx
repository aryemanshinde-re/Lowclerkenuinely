import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="flex flex-col items-center px-8 py-32 text-center">
        <h1 className="max-w-4xl text-6xl font-semibold tracking-tight">
          Your knowledge.
          <br />
          Organized and intelligent.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-600">
          Lowclerkenuinely helps individuals and teams manage documents,
          extract insights, and reduce repetitive work with Clerkee AI.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-black px-8 py-3 text-white">
            Get Started
          </button>

          <button className="rounded-full border border-gray-300 px-8 py-3">
            Explore Platform
          </button>
        </div>
      </section>
    </main>
  );
}