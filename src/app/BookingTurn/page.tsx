"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Slot {
  _id: string;
  date: string;
  time: string;
  isBooked: boolean;
  bookedBy?: string;
}

export default function SlotsList() {
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

  // تاریخ امروز به تقویم فارسی
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

  // گرفتن لیست اسلات‌ها از API
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

  if (loading)
    return (
      <p className="p-4 text-white text-center">در حال بارگذاری اسلات‌ها...</p>
    );

  return (
    <div className="p-6">
      <Toaster position="top-center" />
      <h2 className="text-2xl font-bold text-center text-white mb-8">
        {today}
      </h2>

      {/* گرید کارت‌ها */}
      <div className="flex flex-wrap justify-center items-center gap-15">
        {slots.map((item, index) => (
          <div
            key={item._id}
            className="relative flex w-80 flex-col rounded-2xl bg-white text-gray-700 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div
              className={`relative mx-4 -mt-6 h-36 overflow-hidden rounded-xl
              ${
                item.isBooked ? "bg-[#ca8282]" : "bg-[#6f9b6d]"
              } shadow-md flex items-center justify-center text-white text-lg font-semibold`}
            >
              {`نوبت ${index + 1}`}
            </div>

            <div className="p-6 text-center">
              <h5 className="text-xl font-bold mb-2">{item.time}</h5>
              <p className="text-sm text-gray-600">{item.date}</p>
              <p
                className={`mt-3 text-sm font-medium ${
                  item.isBooked ? "text-red-500" : "text-green-600"
                }`}
              >
                {item.isBooked ? `رزرو شده توسط ${item.bookedBy}` : "رزرو نشده"}
              </p>
            </div>

            <div className="p-4 pt-0">
              <button
                onClick={() => bookSlot(item._id)}
                disabled={item.isBooked}
                className={`w-full rounded-lg 
                  ${
                    item.isBooked ? "cursor-no-drop" : "cursor-pointer"
                  } py-3 font-bold text-white transition-all ${
                  item.isBooked ? "bg-[#ca8282]" : "bg-[#6f9b6d]"
                }`}
              >
                {item.isBooked ? "نوبت رزرو شده " : "رزرو"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
