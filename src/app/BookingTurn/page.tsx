"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import useSlots from "../CustomHook/useSlots";
import SlotCard from "../Components/SlotsCard";
import { Toaster } from "react-hot-toast";

// 🔹 محتوای اصلی که از useSearchParams استفاده می‌کنه
function SlotsListContent() {
  const { slots, loading, today, bookSlot } = useSlots();
  const searchParams = useSearchParams();

  const service = searchParams.get("service");
  const price = searchParams.get("price");
  const serviceId = searchParams.get("serviceId")!;

  if (loading)
    return (
      <p className="p-4 text-white text-center">در حال بارگذاری اسلات‌ها...</p>
    );

  return (
    <div className="p-6">
      <Toaster position="top-center" />
      <h2 className="text-2xl font-bold text-center text-black my-8">
        {today}
      </h2>

      {/* نمایش اطلاعات سرویس انتخاب‌شده */}
      {service && (
        <div className="text-center mb-20 text-lg font-semibold text-green-500">
          سرویس انتخاب‌شده : {service} — {price} تومان
        </div>
      )}

      <div className="flex flex-wrap justify-center items-center gap-15">
        {slots.map((slot, index) => (
          <SlotCard
            key={slot._id}
            item={slot}
            index={index}
            serviceId={serviceId}
            onBook={bookSlot}
          />
        ))}
      </div>
    </div>
  );
}

// 🔸 کامپوننت اصلی که Suspense را اضافه می‌کند
export default function SlotsList() {
  return (
    <Suspense fallback={<p className="text-center text-gray-500 mt-10">در حال بارگذاری...</p>}>
      <SlotsListContent />
    </Suspense>
  );
}
