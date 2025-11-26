"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { TokenPayload } from "@/utils/validationToken";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

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

  const isAdmin = user?.phone === "09125733402";

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-1 w-full flex justify-between md:justify-around lg:justify-between gap-10 items-center p-4 z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-8 h-13" src="/icon scissors.png" alt="logo" />
          <p className="font-bold text-[#f8cc7f] text-xs sm:text-sm md:text-base lg:text-lg">
            Amir Mohammad
          </p>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden md:flex text-white border-l shadow border-t backdrop-blur-xl px-17 py-4 rounded-3xl font-semibold">
          <ul className="flex gap-4 lg:gap-10 text-sm md:text-base lg:text-lg">
            <Link href={"/"}>صفحه اصلی</Link>
            <Link href={"/services"}>خدمات</Link>
            <Link href={"/about"}>درباره ما</Link>
          </ul>
        </div>

        {/* Icons + Buttons */}
        <div className="hidden lg:flex text-white justify-center items-center gap-2 font-semibold text-sm md:text-base">

          {/* Telegram */}
          <span className="border border-white/40 p-2 rounded-full hover:bg-white/10 transition">
            <a
              href="https://t.me/Amirmohammad520"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoTelegram size={22} />
            </a>
          </span>

          {/* Instagram */}
          <span className="border border-white/40 p-2 rounded-full hover:bg-white/10 transition">
            <a
              href="https://www.instagram.com/amirmohammad_ghorbanpur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram size={22} />
            </a>
          </span>

          {/* Auth Buttons */}
          {!loading &&
            (user ? (
              <>
                {/* رزرو نوبت */}
                <Link href="/services">
                  <p className="w-[120px] md:w-[140px] flex justify-center items-center rounded-3xl h-[38px] md:h-[40px] border border-[#f8cc7f] hover:bg-[#f8cc7f] hover:text-black transition">
                    رزرو نوبت
                  </p>
                </Link>

                {/* Admin Dashboard Button */}
                {isAdmin && (
                  <Link href="/admin/dashboard">
                    <p className="w-[120px] md:w-[140px] flex justify-center items-center rounded-3xl h-[38px] md:h-[40px] border border-blue-400 hover:bg-blue-400 hover:text-black transition">
                      مدیریت سایت
                    </p>
                  </Link>
                )}

                {/* Logout */}
                <button onClick={Logout}>
                  <p className="w-[60px] md:w-[65px] cursor-pointer flex justify-center items-center rounded-3xl h-[38px] md:h-[40px] border border-red-500 hover:bg-red-500 hover:text-white transition">
                    خروج
                  </p>
                </button>
              </>
            ) : (
              <Link href="/login">
                <p className="w-[120px] md:w-[140px] flex justify-center items-center rounded-3xl h-[38px] md:h-[40px] border border-[#f8cc7f] hover:bg-[#f8cc7f] hover:text-black transition">
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

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-center items-start pt-10"
          >
            {/* Blur Background */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            {/* White Panel */}
            <motion.div
              initial={{ y: "-10%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-10%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative w-5/6 sm:w-1/2 bg-white p-6 rounded-3xl shadow-xl flex flex-col gap-6 z-10"
            >
              {/* Close */}
              <button
                onClick={() => setOpenModal(false)}
                className="self-end text-gray-500 hover:text-black text-2xl transition"
              >
                <FaArrowLeft />
              </button>

              {/* Menu Links */}
              <div className="flex flex-col gap-4">
                {[
                  { href: "/", label: "صفحه اصلی" },
                  { href: "/services", label: "خدمات" },
                  { href: "/about", label: "درباره ما" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenModal(false)}
                    className="border border-gray-300 rounded-xl p-3 text-center text-gray-700 font-medium transition-all hover:shadow"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-3 mt-4">
                {!loading &&
                  (user ? (
                    <>
                      {/* رزرو */}
                      <Link
                        href="/services"
                        onClick={() => setOpenModal(false)}
                        className="bg-gray-100 px-4 py-2 rounded-xl text-center font-semibold text-green-600 hover:bg-gray-200"
                      >
                        رزرو نوبت
                      </Link>

                      {/* Admin Button (mobile) */}
                      {isAdmin && (
                        <Link
                          href="/admin/dashboard"
                          onClick={() => setOpenModal(false)}
                          className="bg-blue-100 px-4 py-2 rounded-xl text-center font-semibold text-blue-700 hover:bg-blue-200"
                        >
                          مدیریت سایت
                        </Link>
                      )}

                      {/* خروج */}
                      <button
                        onClick={Logout}
                        className="bg-gray-100 cursor-pointer px-4 py-2 rounded-xl text-center font-semibold text-red-600 hover:bg-gray-200"
                      >
                        خروج از سایت
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      onClick={() => setOpenModal(false)}
                      className="bg-gray-100 px-4 py-2 rounded-xl text-center font-semibold text-gray-800 hover:bg-gray-200"
                    >
                      ورود به سایت
                    </Link>
                  ))}

                <button
                  onClick={() => setOpenModal(false)}
                  className="bg-gray-100 cursor-pointer px-4 py-2 rounded-xl text-center font-semibold text-gray-800 hover:bg-gray-200"
                >
                  لغو
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
