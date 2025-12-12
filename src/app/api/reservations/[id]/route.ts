// src/app/api/reservations/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import Reservation from "@/models/Reservation";
import TimeSlot from "@/models/TimeSlot";

export async function DELETE(req: NextRequest, context: { params: any }) {
  console.log("🔹 DELETE /api/reservations/[id] called");

  // await کردن params (نسخه جدید Next.js App Router)
  const params = await context.params;
  console.log("Params received:", params);

  // trim و تبدیل به رشته
  const id = params.id?.toString().trim();
  if (!id) {
    return NextResponse.json(
      { success: false, message: "شناسه رزرو ارسال نشده" },
      { status: 400 }
    );
  }

  try {
    await ConnectDB();
    console.log("✅ اتصال به دیتابیس برقرار شد");

    // حذف رزرو
    const deletedReservation = await Reservation.findByIdAndDelete(id);
    if (!deletedReservation) {
      return NextResponse.json(
        { success: false, message: "رزرو پیدا نشد" },
        { status: 404 }
      );
    }

    console.log("✅ رزرو حذف شد:", deletedReservation);

    // آزاد کردن اسلات مربوطه
    if (deletedReservation.slotId) {
      const updatedSlot = await TimeSlot.findByIdAndUpdate(
        deletedReservation.slotId,
        { isBooked: false, bookedBy: null, bookedAt: null },
        { new: true }
      );
      console.log("✅ اسلات آزاد شد:", updatedSlot);
    }

    return NextResponse.json({
      success: true,
      message: "رزرو با موفقیت حذف شد و اسلات آزاد شد",
    });
  } catch (err: any) {
    console.error("❌ خطا در حذف رزرو:", err.message, err);
    return NextResponse.json(
      { success: false, message: "خطا در حذف رزرو" },
      { status: 500 }
    );
  }
}
