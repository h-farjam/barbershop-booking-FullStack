import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return Response.json({ message: "Hello" });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  return Response.json({ message: "Data received", body });
}
