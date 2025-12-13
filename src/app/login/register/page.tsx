"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const phoneRegex: RegExp = /^09\d{9}$/;
const persianRegex: RegExp = /^[\u0600-\u06FF\s]+$/;

export default function RegisterTestPage() {
  const router = useRouter();
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const [errorFname, setErrorFname] = useState("");
  const [errorLname, setErrorLname] = useState("");

  const validateFname = (value: string) => {
    if (value.trim().length === 0) return "";
    if (!persianRegex.test(value)) return "نام باید فقط شامل حروف فارسی باشد";
    if (value.length < 3) return "نام باید حداقل ۳ حرف باشد";
    if (value.length > 15) return "نام نمی‌تواند بیشتر از ۱۵ حرف باشد";
    return "";
  };

  const validateLname = (value: string) => {
    if (value.trim().length === 0) return "";
    if (!persianRegex.test(value))
      return "نام خانوادگی باید فقط شامل حروف فارسی باشد";
    if (value.length < 3) return "نام خانوادگی باید حداقل ۳ حرف باشد";
    if (value.length > 15) return "نام خانوادگی نمی‌تواند بیشتر از ۱۵ حرف باشد";
    return "";
  };

  const handleRegister = async () => {
    if (!Fname.trim() || !Lname.trim() || !phone.trim()) {
      toast.error("لطفاً همه فیلدها را پر کنید");
      return;
    }

    if (errorFname || errorLname) {
      toast.error("لطفاً خطاهای فرم را برطرف کنید");
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
        setTimeout(() => {
          router.push("/login");
        }, 500); // نیم ثانیه delay کافی است
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "خطایی رخ داده است");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:mx-50  lg:mx-80  md:w-1/2 h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-6 bg-white w-full max-w-md p-6 text-black rounded-xl shadow-xl"
      >
        {/* لوگو */}
        <div className="flex items-center justify-center gap-2">
          <img className="w-8 h-8 invert" src="/icon scissors.png" alt="logo" />
          <p className="font-bold text-[#f8cc7f] text-sm md:text-base">
            Amir Mohammad
          </p>
        </div>

        <h1 className="font-bold text-2xl">ثبت نام در سایت</h1>

        {/* فرم */}
        <div className="flex flex-col gap-4 w-full">
          {/* نام */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="نام خود را وارد کنید"
              value={Fname}
              onChange={(e) => {
                setFname(e.target.value);
                setErrorFname(validateFname(e.target.value));
              }}
              className={`border w-full px-3 py-2 rounded-md outline-none transition-colors duration-200 ${
                errorFname
                  ? "border-red-500 focus:border-red-600"
                  : Fname.length === 0
                  ? "border-gray-300"
                  : "border-green-500 focus:border-green-600"
              }`}
            />
            <AnimatePresence>
              {errorFname && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-red-500"
                >
                  {errorFname}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* نام خانوادگی */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="نام خانوادگی خود را وارد کنید"
              value={Lname}
              onChange={(e) => {
                setLname(e.target.value);
                setErrorLname(validateLname(e.target.value));
              }}
              className={`border w-full px-3 py-2 rounded-md outline-none transition-colors duration-200 ${
                errorLname
                  ? "border-red-500 focus:border-red-600"
                  : Lname.length === 0
                  ? "border-gray-300"
                  : "border-green-500 focus:border-green-600"
              }`}
            />
            <AnimatePresence>
              {errorLname && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-red-500"
                >
                  {errorLname}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* شماره موبایل */}
          <input
            type="text"
            placeholder="شماره موبایل"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`border w-full px-3 py-2 rounded-md outline-none transition-colors duration-200 ${
              phone.length === 0
                ? "border-gray-300"
                : phoneRegex.test(phone)
                ? "border-green-500 focus:border-green-600"
                : "border-red-500 focus:border-red-600"
            }`}
          />

          {/* دکمه ثبت‌نام */}
          <div className="w-full flex flex-col items-center gap-4 mt-6">
            <button
              onClick={handleRegister}
              disabled={loading}
              className={`w-full px-4 py-2 rounded-md  transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-300"
              } font-bold text-black`}
            >
              {loading ? "در حال ارسال..." : "ثبت‌نام"}
            </button>

            <p className="text-sm flex justify-center items-center gap-1">
              حساب کاربری دارم!
              <Link className="text-blue-600 font-medium" href={"/login"}>
                ورود
              </Link>
            </p>
          </div>
        </div>

        {/* لینک بازگشت */}
        <Link
          href="/"
          className="text-blue-600 flex justify-center items-center gap-2 mt-4 text-sm hover:underline"
        >
          صفحه اصلی
          <FaArrowLeft />
        </Link>
      </motion.div>
    </div>
  );
}
