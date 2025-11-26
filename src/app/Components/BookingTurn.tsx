"use client";
import { useSearchParams } from "next/navigation";
import useSlots from "../CustomHook/useSlots";
import SlotCard from "../Components/SlotsCard";
export default function SlotsList() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("serviceId") || ""; // ← از query می‌گیریم
  const price = searchParams.get("price");
  const service = searchParams.get("service");
  const { slots, loading, selectedDay, fetchSlots, bookSlot } = useSlots();

  // تاریخ فارسی برای هدر
  const today = new Date().toLocaleDateString("fa-IR", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toLocaleDateString("fa-IR", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const displayDate = selectedDay === "today" ? today : tomorrow;

  return (
    <div className="p-6 flex flex-col items-center">
      {/* انتخاب روز */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-10 py-2 cursor-pointer rounded-full font-semibold transition
            ${
              selectedDay === "today"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          onClick={() => fetchSlots("today")}
        >
          امروز
        </button>
        <button
          className={`px-10 py-2 cursor-pointer rounded-full font-semibold transition
            ${
              selectedDay === "tomorrow"
                ? "bg-green-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          onClick={() => fetchSlots("tomorrow")}
        >
          فردا
        </button>
      </div>

      {/* هدر تاریخ */}
      <h2 className="text-xl font-bold mb-2">{displayDate}</h2>
      <div className=" flex flex-col md:flex md:justify-center md:items-center my-4  justify-center items-center gap-4 ">
        <p className="text-2xl mb-2">
          سرویس درخواستی : <span className="text-red-600">{service}</span>
        </p>
        <p className="text-2xl mb-2">
          {" "}
          قیمت : <span className="text-red-600">{price}</span> هزار تومن
        </p>
      </div>

      {/* لیست اسلات‌ها */}
      {loading ? (
        <p className="text-center text-gray-500">در حال بارگذاری...</p>
      ) : slots.length === 0 ? (
        <p className="text-center text-gray-500">
          اسلاتی برای این روز موجود نیست.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slots.filter(Boolean).map((slot, index) => (
            <SlotCard
              key={slot._id}
              item={slot}
              index={index}
              serviceId={serviceId} // ← حالا همیشه مقدار دارد
              onBook={bookSlot}
            />
          ))}
        </div>
      )}
    </div>
  );
}
