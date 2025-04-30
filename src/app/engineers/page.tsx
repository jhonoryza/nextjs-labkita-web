"use client";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import { ProfileProps } from "@/props/profile";
import { useEffect, useState } from "react";

export default function EngineerDetailPage() {
  const [profile, setProfile] = useState<ProfileProps | undefined>(undefined);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`/api/profile`);
        if (!res.ok) {
          console.log("Error fetch");
          return;
        }
        const profile = await res.json();
        setProfile(profile);
      } catch (error) {
        console.log("Error fetching profile:", error);
      }
    }

    fetchProfile();
  }, []);
  if (profile === undefined) return <div>Loading...</div>;
  return (
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-16">
        <Link
          href={"/engineers"}
          className="mb-8 inline-flex items-center font-medium text-green-600 transition hover:text-green-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Engineers
        </Link>
        <div className="mb-12 overflow-hidden rounded-xl bg-white shadow-md">
          <div>
            <div className="flex flex-col sm:flex-row items-start gap-8">
              <Image
                src={profile.image || "/placeholder.svg"}
                alt={profile.name}
                width={400}
                height={400}
                className="h-48 w-48 object-cover"
              />
              <div className="flex flex-col items-start px-4">
                <h1 className="mb-2 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-4xl font-bold text-transparent">
                  {profile.name}
                </h1>
                <p className="mb-4 text-xl text-gray-600">{profile.role}</p>
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-semibold">Skills</h2>
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
            <div className="p-8">
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-semibold">Bio</h2>
                <p className="text-gray-600">{profile.bio}</p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-semibold">Projects</h2>
                <ul className="list-disc pl-5">
                  {profile.projects.map((project, index) => (
                    <li key={index} className="text-gray-600">
                      {project.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-semibold">Education</h2>
                <p className="text-gray-600">{profile.education}</p>
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
              <div className="relative h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={400}
                  className="object-cover"
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
