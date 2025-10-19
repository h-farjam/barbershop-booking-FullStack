import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* بخش بالا */}
      <div className="border w-full p-6 md:p-10 lg:p-15 bg-[#272727] text-white grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-15">
        {/* تماس */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-around gap-6 items-center">
            <p className="font-bold text-lg sm:text-xl md:text-2xl">تماس</p>
            <LuPhoneCall className="text-xl sm:text-2xl" />
          </div>
          <hr />
          <p className="text-base sm:text-lg md:text-xl text-center">09012352548</p>
          <p className="text-base sm:text-lg md:text-xl text-center">09210658494</p>
        </div>

        {/* آدرس */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-around items-center gap-6">
            <p className="font-bold text-lg sm:text-xl md:text-2xl">آدرس</p>
            <CiLocationOn className="text-xl sm:text-2xl" />
          </div>
          <hr />
          <p className="text-sm sm:text-base md:text-lg text-center flex gap-2 flex-col leading-relaxed">
            <span>شاهرود خیابان مصلا،</span>
            <span>پایین‌تر از مسجد جوادالائمه</span>
          </p>
        </div>

        {/* ساعت کاری */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-around gap-6 items-center">
            <p className="font-bold text-lg sm:text-xl md:text-2xl">ساعت کاری</p>
            <CiTimer className="text-xl sm:text-2xl" />
          </div>
          <hr />
          <p className="text-sm sm:text-base md:text-lg text-center flex flex-col gap-1 leading-relaxed">
            <span>از 12:00 ظهر</span>
            <span>الی 22:00</span>
          </p>
        </div>
      </div>

      {/* بخش پایین */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center p-5 gap-5 sm:gap-10 bg-[#272727] text-white">
        <div className="flex justify-center items-center gap-1">
          <img className="w-8 sm:w-10" src="/icon scissors.png" alt="logo" />
          <p className="font-bold capitalize text-[#f8cc7f] text-sm sm:text-base md:text-lg">
            Amir Mohammad
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 sm:gap-5">
          <span className="border p-2 rounded-full hover:scale-105 transition">
            <Link href={"/"}>
              <BiLogoTelegram size={25} />
            </Link>
          </span>
          <span className="border p-2 rounded-full hover:scale-105 transition">
            <Link href={"/"}>
              <IoLogoInstagram size={25} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
