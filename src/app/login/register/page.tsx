"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";

const phoneRegex: RegExp = /^09\d{9}$/;

export default function RegisterTestPage() {
  const router = useRouter();
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    // اعتبارسنجی در سمت کلاینت
    if (!Fname.trim() || !Lname.trim() || !phone.trim()) {
      toast.error("لطفاً همه فیلدها را پر کنید");
      return;
    }
    if (!phoneRegex.test(phone)) {
      toast.error("شماره موبایل معتبر نیست");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/register", { Fname, Lname, phone });

      if (res.status === 201) {
        toast.success("ثبت‌ نام با موفقیت انجام شد");
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "خطایی رخ داده است");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 bg-white w-full md:w-1/2 p-6 text-black rounded-lg shadow-md">
      {/* لوگو */}
      <div className="flex items-center justify-center gap-2">
        <img className="w-8 invert h-13" src="/icon scissors.png" alt="logo" />
        <p className="font-bold text-[#f8cc7f] text-sm md:text-base">
          Amir Mohammad
        </p>
      </div>

      <h1 className="font-bold text-[20px]">ثبت نام در سایت</h1>

      {/* فرم ثبت‌نام */}
      <div className="flex flex-col gap-3 w-full">
        {/* نام */}
        <input
          type="text"
          placeholder="نام خود را وارد کنید"
          value={Fname}
          onChange={(e) => setFname(e.target.value)}
          className={`border w-full px-3 py-2 rounded-[5px] outline-none transition-colors duration-200 ${
            Fname.length === 0
              ? "border-gray-300"
              : Fname.length >= 3 && Fname.length <= 15
              ? "border-green-500 focus:border-green-600"
              : "border-red-500 focus:border-red-600"
          }`}
        />

        {/* نام خانوادگی */}
        <input
          type="text"
          placeholder="نام خانوادگی خود را وارد کنید"
          value={Lname}
          onChange={(e) => setLname(e.target.value)}
          className={`border w-full px-3 py-2 rounded-[5px] outline-none transition-colors duration-200 ${
            Lname.length === 0
              ? "border-gray-300"
              : Lname.length >= 3 && Lname.length <= 15
              ? "border-green-500 focus:border-green-600"
              : "border-red-500 focus:border-red-600"
          }`}
        />

        {/* شماره موبایل */}
        <input
          type="text"
          placeholder="شماره موبایل"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`border w-full px-3 py-2 rounded-[5px] outline-none transition-colors duration-200 ${
            phone.length === 0
              ? "border-gray-300"
              : phoneRegex.test(phone)
              ? "border-green-500 focus:border-green-600"
              : "border-red-500 focus:border-red-600"
          }`}
        />

        {/* دکمه ثبت‌نام */}
        <div className="w-full flex justify-center items-center flex-col gap-5 mt-6">
          <button
            onClick={handleRegister}
            disabled={loading}
            className={`w-full cursor-pointer px-4 py-2 rounded-[5px] transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {loading ? "در حال ارسال..." : "ثبت‌نام"}
          </button>

          <p className="flex justify-center items-center gap-1">
            حساب کاربری دارم!
            <Link className="text-blue-600" href={"/login"}>
              ورود
            </Link>
          </p>
        </div>
      </div>

      {/* لینک بازگشت */}
      <Link
        href="/"
        className="text-blue-600 flex justify-center items-center gap-2 mt-4"
      >
        صفحه اصلی
        <FaArrowLeft />
      </Link>
    </div>
  );
}
