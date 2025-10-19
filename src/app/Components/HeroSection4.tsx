import Link from "next/link";
import React from "react";

function HeroSection4() {
  return (
    <section className="grid w-full p-5 bg-[#262626] grid-cols-1">
      {/* بخش اول */}
      <div className="grid grid-cols-1 md:grid-cols-2 relative gap-10 md:gap-2 items-center">
        <div className="flex justify-end md:justify-start">
          <div className="w-[300px] sm:w-[350px] md:w-[390px] h-[350px] sm:h-[400px] md:h-[435px] mx-0 md:mx-10 border border-[#f8cc7f]"></div>
          <img
            className="max-w-[300px] sm:max-w-[350px] md:max-w-[390px] absolute top-8 sm:top-10 right-3 sm:right-10 md:right-20 max-h-[340px] sm:max-h-[400px] md:max-h-[428px]"
            src="/Rectangle 2@2x.png"
            alt=""
          />
        </div>

        <div className="text-white px-4 sm:px-8 md:px-10 flex flex-col gap-3 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            اصلاح ریش و صورت
          </h1>
          <p className="text-justify text-xs sm:text-sm md:text-base leading-relaxed">
            با استفاده از جدیدترین متدهای روز دنیا، از فید حرفه‌ای تا مدل‌های
            مدرن و کلاسیک، ظاهری شیک و ماندگار برای شما خلق می‌کنیم. اصلاح ریش
            و خط‌گیری با نهایت ظرافت انجام می‌شود تا استایل مردانه شما کامل‌تر
            شود. اگر به دنبال ترکیبی از مهارت، دقت و ظرافت در محیطی حرفه‌ای
            هستید، اینجا همان جایی است که باید باشید.
          </p>
          <Link href={"services"}>
            <button className="font-bold text-sm sm:text-base md:text-lg cursor-pointer w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[45px] rounded-3xl bg-[#f8cc7f] text-black hover:bg-[#e0b85a] transition">
              رزرو نوبت
            </button>
          </Link>
        </div>
      </div>

      {/* ------------------- بخش دوم ------------------- */}
      <div
        dir="ltr"
        className="grid grid-cols-1 md:grid-cols-2 relative my-10 md:my-15 gap-10 md:gap-2 items-center"
      >
        <div className="flex justify-end md:justify-start">
          <div className="w-[300px] sm:w-[350px] md:w-[390px] h-[350px] sm:h-[400px] md:h-[435px] mx-0 md:mx-10 border border-[#f8cc7f]"></div>
          <img
            className="max-w-[300px] sm:max-w-[350px] md:max-w-[390px] absolute top-8 sm:top-10 left-3 sm:left-10 md:left-20 max-h-[340px] sm:max-h-[400px] md:max-h-[428px]"
            src="/Rectangle 1.jpg"
            alt=""
          />
        </div>

        <div dir="rtl" className="text-white px-4 sm:px-8 md:px-10 flex flex-col gap-3 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            مراقبت پوستی
          </h1>
          <p className="text-justify text-xs sm:text-sm md:text-base leading-relaxed">
            پوست سالم و شاداب نشانه‌ی استایل خوب و اعتمادبه‌نفس است. در سالن ما
            مراقبت‌های پوستی با جدیدترین روش‌ها و پکیج‌های تخصصی انجام می‌شود؛ از
            پاک‌سازی عمیق و لایه‌برداری گرفته تا آبرسانی و ماسک‌های درمانی. این
            خدمات نه‌تنها پوست شما را تازه و درخشان می‌کند، بلکه به حفظ سلامت و
            جوانی آن کمک می‌کند.
          </p>
          <Link href={"services"}>
            <button className="font-bold text-sm sm:text-base md:text-lg cursor-pointer w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[45px] rounded-3xl bg-[#f8cc7f] text-black hover:bg-[#e0b85a] transition">
              رزرو نوبت
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection4;
