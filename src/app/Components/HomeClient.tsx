"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";
import HeroSection3 from "./HeroSection3";
import HeroSection4 from "./HeroSection4";
import Comment from "./Comment";
import Footer from "./Footer";


interface Props {
  token: any;
}

export default function HomeClient({ token }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const router = useRouter();

  // فقط یک بار نمایش داده شود
  useEffect(() => {
    if (!token) {
      const alreadyShown = localStorage.getItem("loginModalShown");
      if (!alreadyShown) {
        const timer = setTimeout(() => {
          setShowModal(true);
          localStorage.setItem("loginModalShown", "true");
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [token]);

  // انیمیشن خروج
  const closeWithAnimation = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 300);
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-start items-start overflow-y-auto">
      {/* پس‌زمینه */}
      <div className="absolute inset-0 bg-[url('/e800beba25f9d210776ddc693ba4ac8a00852ba0.jpg')] bg-cover bg-no-repeat z-0" />
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* محتوا */}
      <div className="relative z-20 w-full">
        <Navbar />
        <HeroSection1 />
        <HeroSection2 />
        <HeroSection3 />
        <HeroSection4 />
        <Comment />
        <Footer />
      </div>

      {/* مودال خوش‌استایل */}
      {!token && showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          {/* بک‌گراند نرم و قابل عبور کلیک */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-none" />

          {/* خود مودال */}
          <div
            className={`relative pointer-events-auto bg-white/90 backdrop-blur-md text-black rounded-3xl shadow-2xl w-[90%] max-w-md p-8 text-center border border-white/40 transform transition-all duration-300 ${
              closing ? "animate-modalOut" : "animate-modalIn"
            }`}
          >
     
            <p className="text-gray-600 mb-6 leading-relaxed">
              برای ادامه لطفاً وارد حساب کاربری خود شوید.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={closeWithAnimation}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl px-6 py-2 transition-all duration-200 border border-gray-300 shadow-sm"
              >
                بعدا لاگین میکنم
              </button>
              <button
                onClick={() => router.push("/login")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl px-6 py-2 transition-all duration-200 shadow-sm"
              >
                لاگین
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
