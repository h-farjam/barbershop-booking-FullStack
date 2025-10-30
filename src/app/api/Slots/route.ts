// src/app/api/slots/route.ts
import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import { generateIranTimeSlots, getIranToday } from "@/utils/generateIranSlots";
import TimeSlot from "@/models/TimeSlot";


export async function GET() {
  await ConnectDB();

  const today = getIranToday();

  // بررسی اینکه اسلات‌ها برای امروز ساخته شده‌اند یا نه
  const existing = await TimeSlot.find({ date: today });

  if (existing.length === 0) {
    const slots = generateIranTimeSlots().map((time) => ({
      date: today,
      time,
    }));
    await TimeSlot.insertMany(slots);
  }

  const todaySlots = await TimeSlot.find({ date: today }).sort({ time: 1 });
  return NextResponse.json(todaySlots);
}
