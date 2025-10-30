// src/app/api/book-slot/route.ts
import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import TimeSlot from "@/models/TimeSlot";
import { ValidateToken } from "@/utils/validationToken";

export async function POST(req: Request) {
  await ConnectDB();

  const { slotId } = await req.json();
  if (!slotId)
    return NextResponse.json({ message: "Slot نامعتبر است" }, { status: 400 });

  // گرفتن اطلاعات کاربر از توکن
  const token = await ValidateToken();
  if (!token)
    return NextResponse.json({
      message: "لطفا وارد حساب کاربری خود شوید",
      status: 401,
    });

  const slot = await TimeSlot.findById(slotId);
  if (!slot)
    return NextResponse.json({ message: "Slot وجود ندارد", status: 404 });
  if (slot.isBooked)
    return NextResponse.json({ message: "Slot قبلا رزرو شده", status: 400 });

  // رزرو اسلات با نام کاربر
  slot.isBooked = true;
  slot.bookedBy = `${token.Fname} ${token.Lname}`; // یا هر اطلاعاتی که ValidateToken برمی‌گرداند
  slot.bookedAt = new Date();
  await slot.save();

  return NextResponse.json(
    { message: `توسط ${slot.bookedBy} رزرو شد!` },
    { status: 200 }
  );
}
