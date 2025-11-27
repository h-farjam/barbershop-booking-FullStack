"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function HeroSection4() {
  return (
    <section className="w-full p-5 bg-[#262626] overflow-x-hidden">
      {/* بخش اول */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 relative gap-10 md:gap-6 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className="relative w-full flex justify-center md:justify-start overflow-hidden"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <div className="w-[300px] sm:w-[350px] md:w-[390px] h-[350px] sm:h-[400px] md:h-[435px] border border-[#f8cc7f]"></div>
          <img
            className="absolute top-8 sm:top-10 md:top-10 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] sm:max-w-[350px] md:max-w-[390px] max-h-[428px]"
            src="/Rectangle 2@2x.png"
            alt=""
          />
        </motion.div>

        <motion.div
          className="text-white px-4 sm:px-6 md:px-8 flex flex-col gap-3 sm:gap-4"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            اصلاح ریش و صورت
          </h1>
          <p className="text-justify text-xs sm:text-sm md:text-base leading-relaxed">
            با استفاده از جدیدترین متدهای روز دنیا، از فید حرفه‌ای تا مدل‌های مدرن و کلاسیک، ظاهری شیک و ماندگار برای شما خلق می‌کنیم. اصلاح ریش و خط‌گیری با نهایت ظرافت انجام می‌شود تا استایل مردانه شما کامل‌تر شود. اگر به دنبال ترکیبی از مهارت، دقت و ظرافت در محیطی حرفه‌ای هستید، اینجا همان جایی است که باید باشید.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="services">
              <button className="font-bold text-sm sm:text-base md:text-lg cursor-pointer w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[45px] rounded-3xl bg-[#f8cc7f] text-black hover:bg-[#e0b85a] transition">
                رزرو نوبت
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* بخش دوم */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 relative my-10 md:my-15 gap-10 md:gap-6 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.div
          className="relative w-full flex justify-center md:justify-start overflow-hidden"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <div className="w-[300px] sm:w-[350px] md:w-[390px] h-[350px] sm:h-[400px] md:h-[435px] border border-[#f8cc7f]"></div>
          <img
            className="absolute top-8 sm:top-10 md:top-10 left-1/2 transform -translate-x-1/2 w-full max-w-[390px] sm:max-w-[350px] md:max-w-[390px] max-h-[428px]"
            src="/Rectangle 1.jpg"
            alt=""
          />
        </motion.div>

        <motion.div
          className="text-white px-4 sm:px-6 md:px-8 flex flex-col gap-3 sm:gap-4"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            مراقبت پوستی
          </h1>
          <p className="text-justify text-xs sm:text-sm md:text-base leading-relaxed">
            پوست سالم و شاداب نشانه‌ی استایل خوب و اعتمادبه‌نفس است. در سالن ما مراقبت‌های پوستی با جدیدترین روش‌ها و پکیج‌های تخصصی انجام می‌شود؛ از پاک‌سازی عمیق و لایه‌برداری گرفته تا آبرسانی و ماسک‌های درمانی. این خدمات نه‌تنها پوست شما را تازه و درخشان می‌کند، بلکه به حفظ سلامت و جوانی آن کمک می‌کند.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="services">
              <button className="font-bold text-sm sm:text-base md:text-lg cursor-pointer w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[45px] rounded-3xl bg-[#f8cc7f] text-black hover:bg-[#e0b85a] transition">
                رزرو نوبت
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection4;
