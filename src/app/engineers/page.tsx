import EngineerProfile from "@/components/engineer/profile";
import { ProfileProps } from "@/props/profile";

export async function getEngineerProfile(): Promise<ProfileProps | undefined> {
    const apiUrl = process.env.API_URL;
    try {
      const res = await fetch(`${apiUrl}/api/profile`);
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
}

export default async function EngineerDetailPage() {
  const profile = await getEngineerProfile();

  if (profile === undefined) return <div className="flex-grow">Loading...</div>;
  
  return <EngineerProfile profile={profile} />;
}
