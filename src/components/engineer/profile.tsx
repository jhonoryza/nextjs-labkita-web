import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { ProfileProps } from "@/props/profile";

export default function EngineerProfile({ profile }: { profile: ProfileProps }) {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <div className="rounded-lg border bg-card shadow-sm p-6 mb-12">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="relative w-40 sm:w-52 h-72 sm:h-96 min-w-40 sm:min-w-52 shrink-0 rounded-lg overflow-hidden bg-muted">
              <Image
                src={"https://webassets.labkita.my.id/blog/image/fajarsp2.jpg"}
                priority={true}
                alt={profile.name}
                fill
                sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col items-start gap-3">
              <h1 className="text-3xl font-bold text-foreground">
                {profile.name}
              </h1>
              <p className="text-lg text-muted-foreground">
                {profile.role}
              </p>
              <div>
                <h2 className="text-sm font-semibold text-foreground">Education</h2>
                <p className="text-muted-foreground text-sm">{profile.education}</p>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-sm font-semibold text-foreground">
                  <a className="text-muted-foreground hover:text-primary" href="https://github.com/jhonoryza">Github</a>
                </h2>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-sm font-semibold text-foreground">Bio</h2>
                <p className="text-muted-foreground text-sm">{profile.bio}</p>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-sm font-semibold text-foreground">Experience</h2>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:hidden space-y-4">
            <div>
              <h2 className="text-sm font-semibold text-foreground">Bio</h2>
              <p className="text-muted-foreground text-sm mt-1">{profile.bio}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-foreground">Experience</h2>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <h2 className="mb-6 text-2xl font-bold text-foreground">Portfolio Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border bg-card shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="relative h-48 bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={true}
                  sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex h-full flex-col justify-between gap-3 p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stacks.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                    {project.state}
                  </span>
                </div>
                {project.link != "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}