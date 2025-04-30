import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/products/${slug}`);
    const json = await res.json();
    return Response.json(json.data);
  } catch (err) {
    console.log(err);
  }
}
