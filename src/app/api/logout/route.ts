import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { message: "کاربر با موفقیت خارج شد" },
    { status: 200 }
  );

  // پاک کردن کوکی JWT
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0, // expire immediately
    path: "/",
  });

  return response;
}
