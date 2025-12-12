"use client";
import React from "react";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { CiLocationOn, CiTimer } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";

function HeroSection1() {
  return (
    <motion.section
      className="flex flex-col w-full min-h-screen px-4 py-10 gap-10 md:gap-16 mt-10 md:mt-20 text-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* ---------------------- عنوان اصلی ---------------------- */}
      <motion.div
        className="text-center md:pr-9 md:text-right"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed">
          <span className="text-[#f8cc7f]">هنر کات، </span>
          در دست ماست __ هر حرکت قیچی
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mt-2">
          یک داستان از دقت، استایل و اعتماد
        </h2>
      </motion.div>

      {/* ---------------------- دکمه و تلگرام ---------------------- */}
      <motion.div
        className="flex flex-wrap pr-9 justify-center md:justify-start items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href={"/services"}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="font-bold cursor-pointer w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[45px] rounded-3xl bg-[#f8cc7f] text-black hover:bg-[#e0b85a] transition text-sm sm:text-base md:text-lg"
          >
            رزرو نوبت
          </motion.button>
        </Link>

        <motion.p
          className="text-lg sm:text-2xl md:text-3xl text-[#f8cc7f]"
          whileHover={{ scale: 1.1 }}
        >
          Story
        </motion.p>

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
      </motion.div>

      {/* ---------------------- بخش اطلاعات تماس ---------------------- */}
      <motion.div
        className="self-center w-full sm:w-[90%] md:w-[800px] lg:w-[900px] bg-transparent border border-gray-700/40 rounded-3xl backdrop-blur-2xl p-6 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
          {/* تماس */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col gap-3 text-center"
          >
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                تماس
              </p>
              <LuPhoneCall className="text-base sm:text-xl md:text-2xl text-[#f8cc7f]" />
            </div>
            <hr className="border-gray-500 w-2/3 mx-auto" />
            <p>09012352548</p>
            <p>09210658494</p>
          </motion.div>

          {/* آدرس */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col gap-3 text-center"
          >
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                آدرس
              </p>
              <CiLocationOn className="text-base sm:text-xl md:text-2xl text-[#f8cc7f]" />
            </div>
            <hr className="border-gray-500 w-2/3 mx-auto" />
            <p className="leading-relaxed">
              <span>شاهرود، خیابان مصلا،</span>
              <br />
              <span>پایین‌تر از مسجد جوادالائمه</span>
            </p>
          </motion.div>

          {/* ساعت کاری */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col gap-3 text-center"
          >
            <div className="flex justify-center items-center gap-2 sm:gap-3">
              <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                ساعت کاری
              </p>
              <CiTimer className="text-base sm:text-xl md:text-2xl text-[#f8cc7f]" />
            </div>
            <hr className="border-gray-500 w-2/3 mx-auto" />
            <p className="leading-relaxed">
              <span>از 12:00 ظهر</span>
              <br />
              <span>الی 22:00</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default HeroSection1;
