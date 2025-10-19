"use client";
import React from "react";

export default function HeroBooking() {
  return (
    <section className="relative w-full min-h-screen bg-black/40 flex justify-center items-center px-4 py-10">
      {/* بک‌گراند تار */}
      <img
        src="/5ec79ee0-b035-41ee-ac35-f36dfce9788f.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover blur-sm -z-10"
      />

      {/* فرم رزرو */}
      <div className="bg-white w-full max-w-4xl p-6 md:p-10 rounded-2xl shadow-lg flex flex-col gap-6 relative">
        {/* لوگو بالا سمت راست */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <p className="font-bold text-[#f8cc7f] text-lg md:text-xl">AMIR MOHAMMAD</p>
          <img src="/icon scissors.png" alt="logo" className="w-8 h-8" />
        </div>

        {/* تب‌ها */}
        <div className="flex gap-4 justify-end">
          <button className="bg-[#f8cc7f] text-black px-4 py-1 rounded">مشخصات کاربر</button>
          <button className="border px-4 py-1 rounded">تعیین تاریخ</button>
          <button className="border px-4 py-1 rounded">پرداخت</button>
        </div>

        <hr className="border-gray-300 my-4" />

        {/* فیلدها */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="نام"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-[#f8cc7f]"
          />
          <input
            type="text"
            placeholder="نام خانوادگی"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-[#f8cc7f]"
          />
          <input
            type="text"
            placeholder="شماره موبایل"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-[#f8cc7f]"
          />
          <select className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-[#f8cc7f]">
            <option>انتخاب خدمات</option>
          </select>
        </form>

        <button className="mt-4 w-full md:w-1/2 mx-auto bg-[#f8cc7f] text-black py-2 rounded-3xl font-bold hover:bg-[#e0b85a] transition">
          ادامه رزرو
        </button>

        {/* قیچی بزرگ پایین سمت چپ */}
        <img
          src="/icon scissors.png"
          alt="scissors"
          className="w-20 h-20 absolute bottom-6 left-6 opacity-70"
        />
      </div>
    </section>
  );
}
