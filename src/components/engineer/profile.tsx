import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { ProfileProps } from "@/props/profile";

export default function EngineerProfile({ profile }: { profile: ProfileProps }) {
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 overflow-hidden rounded-xl bg-white shadow-md">
          <div className="flex flex-col items-start gap-4 sm:gap-8">
            <div className="flex gap-8">
              <div className="relative w-40 sm:w-52 h-72 sm:h-96 min-w-40 sm:min-w-52">
                <Image
                  src={
                    "https://webassets.labkita.my.id/blog/image/fajarsp2.jpg"
                  }
                  priority={true}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
                  className="object-contain min-h-72 sm:min-h-96"
                />
              </div>
              <div className="flex flex-col items-start">
                <h1 className="mt-6 mb-2 sm:mt-0 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-4xl font-bold text-transparent">
                  {profile.name}
                </h1>
                <p className="mb-6 sm:mb-2 text-xl text-gray-600">
                  {profile.role}
                </p>
                <div className="mb-6 sm:mb-2">
                  <h2 className="mb-2 text-xl font-semibold">Education</h2>
                  <p className="text-gray-600">{profile.education}</p>
                </div>
                {/* bio */}
                <div className="mb-6 sm:mb-2 hidden sm:block">
                  <h2 className="mb-2 text-xl font-semibold">Bio</h2>
                  <p className="text-gray-600">{profile.bio}</p>
                </div>
                {/* experience */}
                <div className="mb-6 sm:mb-2 hidden sm:block">
                  <h2 className="mb-2 text-xl font-semibold">Experience</h2>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 block sm:hidden">
              {/* bio */}
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-semibold">Bio</h2>
                <p className="text-gray-600">{profile.bio}</p>
              </div>
              {/* experience */}
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-semibold">Experience</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="mb-8 text-3xl font-bold">Portfolio Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-96">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={true}
                  sizes="(max-width: 1200px) 100vw, 50vw, 33vw"
                  className="object-cover min-h-48"
                />
              </div>
              <div className="z-30 flex h-full flex-col justify-between space-y-4 bg-white px-6 py-2 opacity-95">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stacks.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="">
                  <span className="rounded bg-sky-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
                    {project.state}
                  </span>
                </div>
                {project.link != "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 inline-flex items-center font-medium text-green-600 transition hover:text-green-700"
                  >
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
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
