export async function GET() {
  const apiUrl = process.env.API_URL;
  try {
    const res = await fetch(`${apiUrl}/api/profile`);
    const json = await res.json();
    return Response.json(json.data);
  } catch (err) {
    console.log(err);
  }
}
