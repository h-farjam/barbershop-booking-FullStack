"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { TokenPayload } from "@/utils/validationToken";

export default function Navbar() {
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [user, setUser] = useState<TokenPayload | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/status");
        const data = await res.json();
        if (data.loggedIn) setUser(data.user);
        else setUser(null);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  const Logout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      setUser(null);
      router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-1 w-full flex justify-between md:justify-start lg:justify-between gap-10 items-center p-4 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-8 h-13" src="/icon scissors.png" alt="logo" />
          <p className="font-bold text-[#f8cc7f] text-xs sm:text-sm md:text-base lg:text-lg">
            Amir Mohammad
          </p>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex text-white border-l shadow border-t backdrop-blur-xl p-4 rounded-3xl font-semibold">
          <ul className="flex gap-4 lg:gap-8 text-sm md:text-base lg:text-lg">
            <Link href={"/"}>صفحه اصلی </Link>
            <Link href={"/products"}>محصولات پوستی</Link>
            <Link href={"/services"}>خدمات</Link>
            <Link href={"/about"}>درباره ما </Link>
          </ul>
        </div>

        {/* Icons + Buttons */}
        <div className="hidden lg:flex text-white justify-center items-center gap-2 font-semibold text-sm md:text-base">
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

          {!loading &&
            (user ? (
              <>
                <Link href="/services">
                  <p className="w-[120px] md:w-[140px] flex justify-center items-center rounded-3xl h-[38px] md:h-[40px] border border-[#f8cc7f] hover:bg-[#f8cc7f] hover:text-black text-xs sm:text-sm md:text-base transition">
                    رزرو نوبت
                  </p>
                </Link>
                <button onClick={Logout}>
                  <p className="w-[60px] md:w-[65px] cursor-pointer flex justify-center items-center rounded-3xl h-[38px] md:h-[40px] border border-red-500 hover:bg-red-500 hover:text-white text-xs sm:text-sm md:text-base transition">
                    خروج
                  </p>
                </button>
              </>
            ) : (
              <Link href="/login">
                <p className="w-[120px] md:w-[140px] flex justify-center items-center rounded-3xl h-[38px] md:h-[40px] border border-[#f8cc7f] hover:bg-[#f8cc7f] hover:text-black text-xs sm:text-sm md:text-base transition">
                  ورود به سایت
                </p>
              </Link>
            ))}
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
        <div className="fixed inset-0 w-full flex justify-center items-center bg-black/70 backdrop-blur-sm z-[100]">
          <div className="w-5/6 sm:w-2/3 flex flex-col p-4 bg-gray-800 border border-gray-700 shadow-xl rounded-2xl text-center">
            <h2 className="text-lg sm:text-xl font-bold py-4 text-gray-200">
              منوی سایت
            </h2>

            {/* Menu Links inside modal */}
            <div className="flex flex-col gap-3 text-gray-300 font-medium text-sm sm:text-base">
              <Link href="/" onClick={() => setOpenModal(false)}>
                صفحه اصلی
              </Link>
              <Link href="/products" onClick={() => setOpenModal(false)}>
                محصولات پوستی
              </Link>
              <Link href="/services" onClick={() => setOpenModal(false)}>
                خدمات
              </Link>
              <Link href="/about" onClick={() => setOpenModal(false)}>
                درباره ما
              </Link>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex justify-center gap-3">
              {!loading &&
                (user ? (
                  <>
                    <Link
                      href="/services"
                      className="bg-green-400 hover:bg-green-500 px-3 sm:px-4 py-2 text-xs sm:text-sm border-2 border-green-300 text-white rounded-full transition"
                    >
                      رزرو نوبت
                    </Link>
                    <button
                      onClick={Logout}
                      className="bg-red-500 hover:bg-red-600 px-3 sm:px-4 py-2 text-xs sm:text-sm border-2 border-red-400 text-white rounded-full transition"
                    >
                      خروج
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="bg-gray-400 hover:bg-gray-500 px-3 sm:px-4 py-2 text-xs sm:text-sm border-2 border-gray-300 text-white rounded-full transition"
                  >
                    ورود به سایت
                  </Link>
                ))}
              <button
                onClick={() => setOpenModal(false)}
                className="bg-gray-700 px-3 sm:px-4 py-2 text-xs sm:text-sm border-2 border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 transition"
              >
                لغو
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
