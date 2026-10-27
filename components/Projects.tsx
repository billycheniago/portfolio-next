import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="work"
      className="border-t border-neutral-200 px-4 md:px-8 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-hand text-3xl font-bold text-accent">
            Selected work
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
            Projects &amp; Case Studies
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
