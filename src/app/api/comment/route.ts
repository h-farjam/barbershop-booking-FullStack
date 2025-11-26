import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import Comment from "@/models/Comment";

export async function GET() {
  await ConnectDB();

  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  await ConnectDB();

  try {
    const { name, text, date } = await req.json();

    if (!name || !text || !date) {
      return NextResponse.json(
        { error: "Invalid data" },
        { status: 400 }
      );
    }

    const comment = await Comment.create({ name, text, date });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }
}
