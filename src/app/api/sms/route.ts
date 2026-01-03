import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import crypto from "crypto";
import Otp from "@/models/Otp";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    await ConnectDB();

    const { phone } = await req.json();

    // اعتبارسنجی شماره ایران
    if (!/^09\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: "شماره موبایل نامعتبر است" },
        { status: 400 }
      );
    }

    // تبدیل به فرمت E.164
    const formattedPhone = `+98${phone.substring(1)}`;

    const otpCode = crypto.randomInt(1000, 9999).toString();

    const response = await axios.post(
      "https://edge.ippanel.com/v1/api/send",
      {
        sending_type: "pattern",
        from_number: process.env.SMS_FROM_NUMBER,
        code: process.env.SMS_PATTERN_CODE,
        recipients: [formattedPhone],
        params: {
          code: otpCode,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "YTBiMTdjNzUtMWFkYi00NmRlLTg3M2ItNzc2YzM2MGI2NGJhMWQ4Zjk5NmQxMmQzZjE4ZjFlZjFlMWJkOGI3NzY4ZmY=",
        },
      }
    );

    if (!response.data?.meta?.status) {
      return NextResponse.json(
        {
          error: "ارسال پیامک ناموفق بود",
          detail: response.data,
        },
        { status: 500 }
      );
    }

    // ذخیره OTP
    await Otp.deleteMany({ phone });
    await Otp.create({
      phone,
      code: otpCode,
      expiresAt: new Date(Date.now() + 2 * 60 * 1000),
    });

    return NextResponse.json({ message: "کد تایید ارسال شد" }, { status: 201 });
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return NextResponse.json(
      {
        error: "خطا در ارسال کد تایید",
        detail: error.response?.data || error.message,
      },
      { status: 500 }
    );
  }
}
