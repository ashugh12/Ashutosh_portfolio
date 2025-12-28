import Hero from '@/components/Hero';
import CareerTimeline from '@/components/CareerTimeline';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import Testimonials from '@/components/Testimonials';
import Skills from '@/components/Skills';
import ResumePreview from '@/components/ResumePreview';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero />

      {/* Testimonials Section - Above Career */}
      <Testimonials />

      {/* Career Timeline Section */}
      <section className="w-full border-t border-gray-200">
        <CareerTimeline />
      </section>

      {/* Projects Section */}
      <section className="w-full border-t border-gray-200">
        <ProjectsShowcase />
      </section>

      {/* Skills Section */}
      <section className="w-full border-t border-gray-200">
        <Skills />
      </section>

      {/* Resume Section */}
      <section id="resume" className="w-full border-t border-gray-200">
        <ResumePreview />
      </section>
    </main>
  );
}
