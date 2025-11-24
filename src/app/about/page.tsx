"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#1c1c1c] text-white px-6 py-14 flex flex-col items-center">
      {/* عنوان اصلی */}
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex gap-4">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="border border-[#f8cc7f] p-2 rounded-full hover:bg-[#f8cc7f]/20 transition"
          >
            <a
              href="https://www.instagram.com/amirmohammad_ghorbanpur?igsh=MTNnMnNIMddycXJqZA"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                e.preventDefault();
                window.location.href =
                  "https://www.instagram.com/amirmohammad_ghorbanpur?igsh=MTNnMnNIMddycXJqZA";
                setTimeout(() => {
                  window.location.href =
                    "https://www.instagram.com/amirmohammad_ghorbanpur?igsh=MTNnMnNIMddycXJqZA";
                }, 500);
              }}
            >
              <IoLogoInstagram size={22} />
            </a>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="border border-[#f8cc7f] p-2 rounded-full hover:bg-[#f8cc7f]/20 transition"
          >
            <a
              href="https://t.me/Amirmohammad520"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoTelegram size={22} />
            </a>
          </motion.span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#f8cc7f] mb-10"
        >
          درباره ما
        </motion.h1>
      </div>

      {/* باکس اصلی */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-4xl bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-8 sm:p-10 shadow-2xl leading-relaxed"
      >
        <p className="text-lg mb-6 text-gray-200 text-justify">
          در مجموعه{" "}
          <span className="text-[#f8cc7f] font-semibold">Book My Barber</span>{" "}
          تلاش ما بر این است که تجربه‌ای متفاوت از خدمات آرایشگری ارائه کنیم؛
          تجربه‌ای که بر پایه‌ی دقت، استایل، اعتماد و استانداردهای حرفه‌ای بنا
          شده است.
        </p>

        <p className="text-lg mb-6 text-gray-200 text-justify">
          ما باور داریم هر اصلاح، هر فید و هر دیزاین، یک هنر است — هنری که باید
          با عشق، مهارت و توجه به جزئیات انجام شود. هدف ما ایجاد محیطی مدرن،
          تمیز و قابل اعتماد است تا شما با خیال راحت وقت رزرو کنید و بهترین
          نتیجه را دریافت کنید.
        </p>

        <h2 className="text-2xl font-bold text-[#f8cc7f] mt-10 mb-4">
          ماموریت ما
        </h2>
        <p className="text-gray-200 text-lg mb-6 text-justify">
          ارائه خدمات باکیفیت، رفتار حرفه‌ای، احترام به وقت مشتری و به‌روز بودن
          در تکنیک‌ها.
        </p>

        <h2 className="text-2xl font-bold text-[#f8cc7f] mt-10 mb-4">
          ارزش‌های ما
        </h2>
        <ul className="list-disc pr-6 text-gray-300 text-lg space-y-2 mb-6">
          <li>تعهد و مسئولیت‌پذیری</li>
          <li>مشتری‌مداری</li>
          <li>نوآوری و به‌روز بودن</li>
          <li>تمرکز روی کیفیت و دقت</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#f8cc7f] mt-10 mb-4">
          چرا ما؟
        </h2>
        <ul className="list-disc pr-6 text-gray-300 text-lg space-y-2">
          <li>استفاده از تجهیزات حرفه‌ای</li>
          <li>رعایت کامل اصول بهداشتی</li>
          <li>فید و اصلاح با جدیدترین متدهای روز</li>
          <li>خدمات پوستی و مراقبتی با کیفیت بالا</li>
          <li>رزرو آنلاین سریع و قابل اعتماد</li>
        </ul>
      </motion.div>

      <h2 className="text-2xl font-bold text-[#f8cc7f] mt-10 mb-4">
        اطلاعات تماس
      </h2>
      <ul className="list-disc pr-6 text-gray-300 text-lg space-y-2 mb-10">
        <li>شماره تماس: 09012352548</li>
        <li>شماره تماس دوم: 09210658494</li>
        <li>آدرس: شاهرود، خیابان مصلا، پایین‌تر از مسجد جوادالائمه</li>
      </ul>

      {/* فاصله پایین */}
      <div className="h-20" />
    </main>
  );
}
