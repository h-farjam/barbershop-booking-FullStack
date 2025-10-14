import User from "@/models/User";
import ConnectDB from "@/utils/ConnectDB";
import { NextRequest, NextResponse } from "next/server";

const phoneRegex: RegExp = /^09\d{9}$/;

interface LoginBody {
  phone: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await ConnectDB(); // اتصال به دیتابیس

    const body: LoginBody = await req.json();
    const { phone } = body;

    // بررسی پر بودن فیلد
    if (!phone) {
      return NextResponse.json(
        { message: "شماره موبایل الزامی است" },
        { status: 400 }
      );
    }

    // بررسی صحت فرمت شماره
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { message: "شماره معتبر نیست" },
        { status: 422 }
      );
    }

    // بررسی وجود کاربر
    const existingUser = await User.findOne({ phone });
    if (!existingUser) {
      return NextResponse.json(
        { message: "کاربری با این شماره پیدا نشد" },
        { status: 404 }
      );
    }

    // موفقیت در ورود
    return NextResponse.json(
      {
        message: "ورود موفق بود",
        user: existingUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "خطایی در سرور رخ داد" },
      { status: 500 }
    );
  }
}
