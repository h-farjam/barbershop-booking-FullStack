import React from "react";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { CiLocationOn, CiTimer } from "react-icons/ci";

function HeroSection1() {
  return (
    <section className="flex flex-col w-full min-h-screen px-4 py-10 gap-10 md:gap-16 mt-10 md:mt-20 text-white">
      {/* ---------------------- عنوان اصلی ---------------------- */}
      <div className="text-center md:text-right">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
          <span className="text-[#f8cc7f]">هنر کات، </span>
          در دست ماست __ هر حرکت قیچی
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed mt-2">
          یک داستان از دقت، استایل و اعتماد
        </h2>
      </div>

      {/* ---------------------- دکمه و تلگرام ---------------------- */}
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
        <button className="font-bold w-[160px] sm:w-[180px] h-[45px] rounded-3xl bg-[#f8cc7f] text-black hover:bg-[#e0b85a] transition">
          رزرو نوبت
        </button>
        <p className="text-2xl sm:text-3xl text-[#f8cc7f]">Story</p>
        <span className="border border-[#f8cc7f] p-2 rounded-full hover:bg-[#f8cc7f]/20 transition">
          <Link href={"/"}>
            <BiLogoTelegram size={"25px"} className="text-[#f8cc7f]" />
          </Link>
        </span>
      </div>

      {/* ---------------------- بخش اطلاعات تماس ---------------------- */}
      <div className="self-center w-full sm:w-[90%] md:w-[800px] lg:w-[900px] bg-transparent border border-gray-700/40 rounded-3xl backdrop-blur-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-lg sm:text-xl md:text-2xl font-medium">
          {/* تماس */}
          <div className="flex flex-col gap-3 text-center">
            <div className="flex justify-center items-center gap-3">
              <p className="font-bold text-xl md:text-2xl">تماس</p>
              <LuPhoneCall className="text-xl md:text-2xl text-[#f8cc7f]" />
            </div>
            <hr className="border-gray-500 w-2/3 mx-auto" />
            <p className="text-sm sm:text-base md:text-lg">09012352548</p>
            <p className="text-sm sm:text-base md:text-lg">09210658494</p>
          </div>

          {/* آدرس */}
          <div className="flex flex-col gap-3 text-center">
            <div className="flex justify-center items-center gap-3">
              <p className="font-bold text-xl md:text-2xl">آدرس</p>
              <CiLocationOn className="text-xl md:text-2xl text-[#f8cc7f]" />
            </div>
            <hr className="border-gray-500 w-2/3 mx-auto" />
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              <span>شاهرود، خیابان مصلا،</span>
              <br />
              <span>پایین‌تر از مسجد جوادالائمه</span>
            </p>
          </div>

          {/* ساعت کاری */}
          <div className="flex flex-col gap-3 text-center">
            <div className="flex justify-center items-center gap-3">
              <p className="font-bold text-xl md:text-2xl">ساعت کاری</p>
              <CiTimer className="text-xl md:text-2xl text-[#f8cc7f]" />
            </div>
            <hr className="border-gray-500 w-2/3 mx-auto" />
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              <span>از 12:00 ظهر</span>
              <br />
              <span>الی 22:00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
