"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#f6f7f9] text-[#1a1a1a] px-4 sm:px-10 py-12 flex justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* متن سمت چپ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
            تجربه‌ای متفاوت از
            <span className="text-[#f8b84c] mx-2 ">آرایشگری مدرن </span>
            با امیرمحمد
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            جایی که دقت، کیفیت، استایل و ظرافت در کنار هم قرار می‌گیرند تا
            بهترین نتیجه را برای شما رقم بزنند.
          </p>

          <ul className="space-y-3 text-gray-700 text-lg mb-8">
            <li>• فید و اصلاح با جدیدترین متدهای روز</li>
            <li>• محیط کاملاً بهداشتی و حرفه‌ای</li>
            <li>• استفاده از ابزارهای استاندارد و درجه‌یک</li>
            <li>• احترام کامل به وقت مشتری</li>
          </ul>

          {/* شبکه های اجتماعی */}
          <div className="flex gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.instagram.com/amirmohammad_ghorbanpur"
              target="_blank"
              className="border border-[#f8b84c] p-3 rounded-full hover:bg-[#f8b84c]/15 transition"
            >
              <IoLogoInstagram size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://t.me/Amirmohammad520"
              target="_blank"
              className="border border-[#f8b84c] p-3 rounded-full hover:bg-[#f8b84c]/15 transition"
            >
              <BiLogoTelegram size={22} />
            </motion.a>
          </div>

          {/* اطلاعات تماس */}
          <div className="mt-10 border-t pt-6">
            <h2 className="text-xl font-bold mb-3 text-[#f8b84c]">
              اطلاعات تماس
            </h2>
            <ul className="text-gray-700 space-y-2">
              <li>شماره تماس: 09012352548</li>
              <li>شماره دوم: 09210658494</li>
              <li>آدرس: شاهرود، خیابان مصلا، پایین‌تر از مسجد جوادالائمه</li>
            </ul>
          </div>
        </motion.div>

        {/* عکس بزرگ سمت راست */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center"
        >
          <div className="w-full bg-[#fafafa] border border-gray-200 rounded-3xl p-4 shadow-inner">
            <img
              src="/original-0faa4150ea31f40cdaa666bbf9e38200.webp"
              alt="barber image"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
