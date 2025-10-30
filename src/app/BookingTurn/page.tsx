"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// مدل اسلات‌ها
interface Slot {
  _id: string;
  date: string;
  time: string;
  isBooked: boolean;
  bookedBy?: string;
}

// کارت تک اسلات
function SlotCard({
  time,
  isBooked,
  bookedBy,
  onBook,
}: {
  time: string;
  isBooked: boolean;
  bookedBy?: string;
  onBook?: () => void;
}) {
  return (
    <div
      className={`p-4 rounded-xl shadow-lg border transition-all duration-200
        ${
          isBooked
            ? "bg-gray-700 border-gray-600 cursor-not-allowed"
            : "bg-gradient-to-r from-yellow-400 to-orange-400 border-yellow-300 cursor-pointer"
        }
        hover:scale-105`}
      onClick={() => !isBooked && onBook?.()}
    >
      <h3 className="text-lg font-semibold text-white">{time}</h3>
      {isBooked ? (
        <p className="mt-2 text-sm text-gray-300">رزرو شده توسط: {bookedBy}</p>
      ) : (
        <p className="mt-2 text-sm text-white">رزرو در دسترس</p>
      )}
    </div>
  );
}

// کامپوننت اصلی
export default function SlotsList() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState("");

  // گرفتن تاریخ امروز
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

  // گرفتن اسلات‌ها
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const { data } = await axios.get("/api/Slots");
        setSlots(data);
        setLoading(false);
      } catch (err) {
        console.error("خطا در گرفتن اسلات‌ها:", err);
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  // رزرو اسلات
  const bookSlot = async (slotId: string) => {
    try {
      const { data } = await axios.post("/api/book-slot", { slotId });
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

  if (loading)
    return <p className="p-4 text-white">در حال بارگذاری اسلات‌ها...</p>;

  return (
    <div className="p-4">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-2xl font-bold text-white mb-4">{today}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {slots.map((slot) => (
          <SlotCard
            key={slot._id}
            time={slot.time}
            isBooked={slot.isBooked}
            bookedBy={slot.bookedBy}
            onBook={() => bookSlot(slot._id)}
          />
        ))}
      </div>
    </div>
  );
}
