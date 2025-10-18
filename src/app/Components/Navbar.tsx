"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";

export default function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-1 w-full flex justify-between md:justify-start lg:justify-between gap-10 items-center p-4 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-8 h-13" src="/icon scissors.png" alt="logo" />
          <p className="font-bold text-[#f8cc7f] text-sm md:text-base">
            Amir Mohammad
          </p>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex text-white border-l shadow border-t backdrop-blur-xl p-4 rounded-3xl font-semibold">
          <ul className="flex gap-4 lg:gap-8">
            <Link href={"/"}>صفحه اصلی </Link>
            <Link href={"/products"}>محصولات پوستی</Link>
            <Link href={"/services"}>خدمات</Link>
            <Link href={"/contactus"}>تماس با ما</Link>
            <Link href={"/about"}>درباره ما </Link>
          </ul>
        </div>

        {/* Icons + Button (Desktop) */}
        <div className="hidden lg:flex text-white justify-center items-center gap-2 font-semibold">
          <span className="border p-2 rounded-full">
            <Link href="/">
              <BiLogoTelegram size={22} />
            </Link>
          </span>
          <span className="border p-2 rounded-full">
            <Link href="/">
              <IoLogoInstagram size={22} />
            </Link>
          </span>
          <Link href="/login">
            <p className="w-[140px] flex justify-center items-center rounded-3xl h-[40px] border border-[#f8cc7f] hover:bg-[#f8cc7f] hover:text-black transition">
             ورود به سایت 
            </p>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden text-white">
          <button onClick={() => setOpenModal(true)}>
            <RxHamburgerMenu size={28} />
          </button>
        </div>
      </nav>

      {/* Modal Box */}
      {openModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-sm z-[100]">
          <div className="w-[260px] flex flex-col p-4 bg-gray-800 border border-gray-700 shadow-xl rounded-2xl text-center">
            <h2 className="text-xl font-bold py-4 text-gray-200">منوی سایت</h2>

            {/* Menu Links inside modal */}
            <div className="flex flex-col gap-3 text-gray-300 font-medium">
              <Link href="/" onClick={() => setOpenModal(false)}>
                صفحه اصلی
              </Link>
              <Link href="/products" onClick={() => setOpenModal(false)}>
                محصولات پوستی
              </Link>
              <Link href="/services" onClick={() => setOpenModal(false)}>
                خدمات
              </Link>
              <Link href="/contactus" onClick={() => setOpenModal(false)}>
                تماس با ما
              </Link>
              <Link href="/about" onClick={() => setOpenModal(false)}>
                درباره ما
              </Link>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex justify-center gap-3">
              <Link
                href="/services"
                className="bg-green-400 hover:bg-green-500 px-4 py-2 text-sm border-2 border-green-300 text-white rounded-full transition"
              >
                رزرو نوبت
              </Link>
              <button
                onClick={() => setOpenModal(false)}
                className="bg-gray-700 px-4 py-2 text-sm border-2 border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 transition"
              >
                لفو
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
