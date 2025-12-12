import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import { generateIranTimeSlots } from "@/utils/generateIranSlots";
import TimeSlot from "@/models/TimeSlot";

function getIranDate(day: string) {
  const now = new Date();
  const iranTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Tehran" })
  );

  if (day === "tomorrow") iranTime.setDate(iranTime.getDate() + 1);

  // تاریخ فارسی برای نمایش
  const formatted = iranTime.toLocaleDateString("fa-IR", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // YYYY-MM-DD برای ذخیره
  const iso = iranTime.toISOString().split("T")[0];

  return { iso, formatted };
}

export async function GET(request: Request) {
  await ConnectDB();

  const url = new URL(request.url);
  const day = url.searchParams.get("day") || "today";
  const { iso: date, formatted: dateFa } = getIranDate(day);

  // چک می‌کنیم اسلات‌های این روز ساخته شده‌اند یا نه
  const existing = await TimeSlot.find({ date });

  if (existing.length === 0) {
    const slots = generateIranTimeSlots().map((time) => ({
      date,
      dateFa, // تاریخ فارسی برای UI
      time,
    }));

    await TimeSlot.insertMany(slots);
  }

  const daySlots = await TimeSlot.find({ date }).sort({ time: 1 });

  // جایگزین کردن date با dateFa در خروجی
  const daySlotsFa = daySlots.map((slot) => ({
    ...slot.toObject(),
    date: slot.dateFa || slot.date,
  }));

  return NextResponse.json(daySlotsFa);
}
