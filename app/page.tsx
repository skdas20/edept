import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import DepartmentHighlights from "@/components/sections/DepartmentHighlights";
import HODMessage from "@/components/sections/HODMessage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Key Stats */}
      <Stats />

      {/* Department Highlights (Features) */}
      <DepartmentHighlights />

      {/* HOD Message */}
      <HODMessage />

      {/* Call to Action Section */}
      <section className="relative overflow-hidden bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.svg')] opacity-10" />
        <div className="absolute -right-20 top-0 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading text-white md:text-5xl">Ready to Shape the Future?</h2>
          <p className="mx-auto mb-10 mt-6 max-w-2xl text-xl text-primary-50">
            Join our vibrant community of innovators and achievers.
            Explore our programs and discover your potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/home/admission" className="rounded-xl bg-gradient-to-r from-accent to-accent-600 px-8 py-4 font-bold text-primary-dark shadow-lg transition-all hover:-translate-y-1">
              Apply Now
            </a>
            <a href="/research" className="rounded-xl border-2 border-white bg-transparent px-8 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-white hover:text-primary">
              View Research
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
