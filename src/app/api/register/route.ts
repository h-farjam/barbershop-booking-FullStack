import User from "@/models/User";
import ConnectDB from "@/utils/ConnectDB";
import { NextRequest, NextResponse } from "next/server";

const phoneRegex: RegExp = /^09\d{9}$/;

interface RegisterBody {
  Fname: string;
  Lname: string;
  phone: string;
}

export async function GET() {
  return NextResponse.json({ message: "Hello" });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await ConnectDB(); // اتصال به دیتابیس

    const body: RegisterBody = await req.json();
    const { Fname, Lname, phone } = body;

    // اعتبارسنجی
    if (!Fname || !Lname || !phone) {
      return NextResponse.json(
        { message: "لطفاً همه فیلدها را پر کنید" },
        { status: 400 }
      );
    }

    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { message: "شماره معتبر نیست" },
        { status: 422 }
      );
    }
    if (Fname.length < 3) {
      return NextResponse.json(
        { message: "اسم شما باید از دو حرف بیشتر باشد " },
        { status: 422 }
      );
    }
    if (Lname.length < 3) {
      return NextResponse.json(
        { message: "فامیل  شما باید از دو حرف بیشتر باشد " },
        { status: 422 }
      );
    }
    if (Fname.length >= 15) {
      return NextResponse.json(
        { message: "اسم شما باید از 15 حرف کمتر باشد " },
        { status: 422 }
      );
    }
    if (Lname.length >= 15) {
      return NextResponse.json(
        { message: "فامیل  شما باید از 15 حرف کمتر باشد " },
        { status: 422 }
      );
    }

    // چک تکراری بودن شماره
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return NextResponse.json(
        { message: "این شماره قبلاً ثبت شده" },
        { status: 409 }
      );
    }

    // ایجاد کاربر
    const newUser = await User.create({ Fname, Lname, phone });

    return NextResponse.json(
      { message: "ثبت‌نام موفق بود", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "خطایی در سرور رخ داد" },
      { status: 500 }
    );
  }
}
