"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export interface Slot {
  _id: string;
  date: string; // YYYY-MM-DD از API
  time: string;
  isBooked: boolean;
  bookedBy?: string | null;
}

export default function useSlots() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState<"today" | "tomorrow">("today");
  const router = useRouter();

  // بررسی وضعیت ورود
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await axios.get("/api/status");
        if (!res.data.loggedIn) router.push("/login");
      } catch (err) {
        console.error(err);
      }
    };
    checkStatus();
  }, [router]);

  /** تبدیل تاریخ میلادی → فارسی */
  const toPersianDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("fa-IR", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  /** دریافت اسلات‌ها */
  const fetchSlots = async (day: "today" | "tomorrow" = selectedDay) => {
    try {
      setLoading(true);

      const { data } = await axios.get(`/api/Slots?day=${day}`);

      setSlots(
        Array.isArray(data)
          ? data.map((slot) => ({
              ...slot,
              date: toPersianDate(slot.date),
            }))
          : []
      );

      setSelectedDay(day);
    } catch (err) {
      console.error(err);
      setSlots([]);
    } finally {
      setLoading(false);
    }
  };

  /** اجرا در بار اول */
  useEffect(() => {
    fetchSlots("today");
  }, []);

  /** رزرو اسلات (فرانت و سرور همزمان آپدیت می‌شوند) */
  const bookSlot = async (slotId: string, serviceId: string) => {
    try {
      const { data } = await axios.post("/api/book-slot", {
        slotId,
        serviceId,
      });
     

      if (data.message === "شما قبلاً یک نوبت در این روز رزرو کرده‌اید") {
        return toast.error("شما قبلاً در این روز رزرو کرده‌اید!");
      }

      toast.success("نوبت شما با موفقیت رزرو شد!");

      // **به‌روزرسانی فوری UI**
      setSlots((prev) =>
        prev.map((slot) =>
          slot._id === slotId
            ? { ...slot, isBooked: true, bookedBy: "شما" }
            : slot
        )
      );
    } catch (err: any) {
      toast.error(err.response?.data?.message || "خطا در رزرو نوبت");
    }
  };

  return { slots, loading, selectedDay, fetchSlots, bookSlot, setSlots };
}
