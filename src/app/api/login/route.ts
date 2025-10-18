import User from "@/models/User";
import ConnectDB from "@/utils/ConnectDB";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const phoneRegex: RegExp = /^09\d{9}$/;

interface LoginBody {
  phone: string;
}

const SECRET_KEY = process.env.JWT_SECRET!;

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: LoginBody = await req.json();
    const { phone } = body;

    // ✅ اعتبارسنجی شماره موبایل
    if (!phone) {
      return NextResponse.json(
        { message: "شماره موبایل الزامی است" },
        { status: 400 }
      );
    }

    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { message: "شماره موبایل معتبر نیست" },
        { status: 422 }
      );
    }

    // ✅ اتصال به دیتابیس
    await ConnectDB();

    const existingUser = await User.findOne({ phone });
    if (!existingUser) {
      return NextResponse.json(
        { message: "کاربری با این شماره پیدا نشد" },
        { status: 404 }
      );
    }

    // ✅ ساخت JWT
    const token = jwt.sign(
      {
        _id: existingUser._id,
        phone: existingUser.phone,
        Fname: existingUser.Fname,
        Lname: existingUser.Lname,
      },
      SECRET_KEY,
      { expiresIn: "7d" }
    );

    // ✅ ایجاد پاسخ
    const response = NextResponse.json(
      {
        message: "ورود موفقیت‌آمیز بود",
        user: existingUser,
      },
      { status: 200 }
    );

    // ✅ ست کردن کوکی
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // فقط روی HTTPS در پروداکشن
      sameSite: "lax", // برای جلوگیری از بلاک شدن کوکی‌ها
      maxAge: 7 * 24 * 60 * 60, // 7 روز
      path: "/", // همه مسیرها
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "خطایی در سرور رخ داد" },
      { status: 500 }
    );
  }
}
