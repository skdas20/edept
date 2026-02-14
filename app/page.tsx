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
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 animate-fade-in-up">Ready to Shape the Future?</h2>
          <p className="text-xl text-primary-50 mb-10 max-w-2xl mx-auto">
            Join our vibrant community of innovators and achievers.
            Explore our programs and discover your potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/admissions" className="px-8 py-4 bg-accent hover:bg-accent-600 text-primary-dark font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
              Apply Now
            </a>
            <a href="/research" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary transition-all transform hover:-translate-y-1">
              View Research
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
