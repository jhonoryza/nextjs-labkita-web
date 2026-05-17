import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { ProfileProps } from "@/props/profile";

export default function EngineerProfile({ profile }: { profile: ProfileProps }) {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <div className="border-2 border-foreground bg-background shadow-neo p-6 mb-12">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="relative w-40 sm:w-52 h-72 sm:h-96 min-w-40 sm:min-w-52 shrink-0 border-2 border-foreground shadow-neo-sm">
              <Image
                src={"https://webassets.labkita.my.id/blog/image/fajarsp2.jpg"}
                priority={true}
                alt={profile.name}
                fill
                sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
                className="object-contain min-h-72 sm:min-h-96"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-4xl font-black text-foreground">
                {profile.name}
              </h1>
              <p className="text-xl font-bold text-foreground/70">
                {profile.role}
              </p>
              <div>
                <h2 className="text-lg font-black text-foreground border-b-2 border-foreground pb-1 inline-block">Education</h2>
                <p className="text-foreground/70 font-medium mt-1">{profile.education}</p>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-lg font-black text-foreground border-b-2 border-foreground pb-1 inline-block">
                  <a className="text-foreground/70 hover:text-primary" href="https://github.com/jhonoryza">Github</a>
                </h2>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-lg font-black text-foreground border-b-2 border-foreground pb-1 inline-block">Bio</h2>
                <p className="text-foreground/70 font-medium mt-1">{profile.bio}</p>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-lg font-black text-foreground border-b-2 border-foreground pb-1 inline-block">Experience</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary text-primary-foreground font-bold border-2 border-foreground text-xs"
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
              <h2 className="text-lg font-black text-foreground border-b-2 border-foreground pb-1 inline-block">Bio</h2>
              <p className="text-foreground/70 font-medium mt-1">{profile.bio}</p>
            </div>
            <div>
              <h2 className="text-lg font-black text-foreground border-b-2 border-foreground pb-1 inline-block">Experience</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary text-primary-foreground font-bold border-2 border-foreground text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <h2 className="mb-8 text-3xl font-black text-foreground border-b-2 border-foreground pb-4 inline-block">Portfolio Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border-2 border-foreground bg-background shadow-neo hover:shadow-neo-lg transition-shadow"
            >
              <div className="relative h-48 border-b-2 border-foreground">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={true}
                  sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
                  className="object-cover min-h-48"
                />
              </div>
              <div className="flex h-full flex-col justify-between gap-4 p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-foreground/70 font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stacks.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-muted text-foreground font-bold border-2 border-foreground text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground font-bold border-2 border-foreground text-xs">
                    {project.state}
                  </span>
                </div>
                {project.link != "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4" />
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