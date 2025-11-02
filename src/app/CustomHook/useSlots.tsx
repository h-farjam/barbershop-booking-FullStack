"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export interface Slot {
  _id: string;
  date: string;
  time: string;
  isBooked: boolean;
  bookedBy?: string;
}

export default function useSlots() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState("");
  const router = useRouter();

  // بررسی وضعیت ورود کاربر
  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await axios.get("/api/status");
        if (!res.data.loggedIn) router.push("/login");
      } catch (err) {
        console.error("خطا در بررسی وضعیت:", err);
      }
    };
    checkStatus();
  }, [router]);

  // تاریخ امروز
  useEffect(() => {
    const now = new Date();
    const iranTime = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Tehran" })
    );
    const formatted = iranTime.toLocaleDateString("fa-IR", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
    setToday(formatted);
  }, []);

  // گرفتن لیست اسلات‌ها
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const { data } = await axios.get("/api/Slots");
        setSlots(data);
      } catch (err) {
        console.error("خطا در گرفتن اسلات‌ها:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSlots();
  }, []);

  // رزرو نوبت
  const bookSlot = async (slotId: string) => {
    try {
      const { data } = await axios.post("/api/book-slot", { slotId });
      if (data.message == "شما قبلاً یک نوبت در این روز رزرو کرده‌اید") {
        return toast.error("شما قبلاً در این روز رزرو کرده‌اید!");
      }
      if (data.message) {
        toast.success("نوبت شما با موفقیت رزرو شد!");
        setSlots((prev) =>
          prev.map((slot) =>
            slot._id === slotId
              ? { ...slot, isBooked: true, bookedBy: "شما" }
              : slot
          )
        );
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || "خطا در رزرو نوبت");
    }
  };

  return { slots, loading, today, bookSlot };
}
