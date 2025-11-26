import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import Comment from "@/models/Comment";


export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await ConnectDB();

  try {
    await Comment.findByIdAndDelete(params.id);
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
