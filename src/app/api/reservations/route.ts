// src/app/api/reservations/route.ts
import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import "@/models/User";
import "@/models/Service";
import "@/models/TimeSlot";
import Reservation from "@/models/Reservations";

export async function GET(req: NextRequest) {
  await ConnectDB();

  try {
    const reservations = await Reservation.find()
      .populate("userId", "Fname Lname phone")
      .populate("serviceId", "title price")
      .populate("slotId", "date time")
      .sort({ createdAt: -1 }) // 📅 جدیدترین رزروها اول
      .lean();

    return NextResponse.json({ success: true, data: reservations });
  } catch (error) {
    console.error("❌ خطا در گرفتن رزروها:", error);
    return NextResponse.json(
      { success: false, message: "خطا در گرفتن رزروها" },
      { status: 500 }
    );
  }
}
