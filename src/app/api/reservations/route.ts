// src/app/api/reservations/route.ts
import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import Reservation from "@/models/reservations";

export async function GET(req: NextRequest) {
  await ConnectDB();

  try {
    // گرفتن تمام رزروها و populate کردن اطلاعات User, Service و TimeSlot
    const reservations = await Reservation.find()
      .populate("userId", "Fname Lname phone")
      .populate("serviceId", "title price")
      .populate("slotId", "date time")
      .lean();

    return NextResponse.json({ success: true, data: reservations });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "خطا در گرفتن رزروها" },
      { status: 500 }
    );
  }
}
