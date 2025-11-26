
import { NextResponse } from "next/server";
import { ValidateToken } from "@/utils/validationToken";

export async function GET() {
  const user = await ValidateToken();

  if (!user) {
    return NextResponse.json({ loggedIn: false }, { status: 200 });
  }

  return NextResponse.json(
    {
      loggedIn: true,
      user: {
        _id: user._id,
        phone: user.phone,
        Fname: user.Fname,
        Lname: user.Lname,
      },
    },
    { status: 200 }
  );
}
