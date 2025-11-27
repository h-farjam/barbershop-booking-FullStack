import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import Comment from "@/models/Comment";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  await ConnectDB();

  const { id } = await context.params;

  try {
    await Comment.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Comment deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete comment" },
      { status: 500 }
    );
  }
}
