"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
const phoneRegex: RegExp = /^09\d{9}$/;

export default function LoginTestPage() {
  const router = useRouter();
  const [phone, setPhone] = useState(""); // ذخیره مقدار ورودی
  const [loading, setLoading] = useState(false); // وضعیت لودینگ

  const SubmitPhone = async () => {
    if (!phone.trim()) {
      toast.error("لطفاً شماره موبایل را وارد کنید");
      return;
    }
    if (!phoneRegex.test(phone)) {
      toast.error("لطفا شماره موبایل معتبر وارد کنید ");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post("/api/login", { phone });

      if (res.status === 200) {
        toast.success("با موفقیت وارد شدید");
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "مشکلی پیش آمده است");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const CheckLogiin = async () => {
      const { data }: any = await axios.get("/api/status");
      if (data.loggedIn) {
        router.push("/");
      }
    };
    CheckLogiin();
  });
  return (
    <>
      <div className="flex flex-col items-center gap-6 bg-[#ffffff] w-full md:w-1/2 p-6 text-black rounded-lg shadow-md">
        {/* لوگو و نام */}
        <div className="flex items-center justify-center gap-2">
          <img
            className="w-8 invert h-13"
            src="/icon scissors.png"
            alt="logo"
          />
          <p className="font-bold text-[#f8cc7f] text-sm md:text-base">
            Amir Mohammad
          </p>
        </div>

        {/* عنوان */}
        <h1 className="font-bold text-[20px]">ورود به سایت</h1>

        {/* فرم ورود */}
        <div className="flex flex-col gap-3 w-full">
          <p className="text-sm text-gray-700">
            کد تایید شما به شماره موبایلی که وارد می‌کنید ارسال خواهد شد
          </p>

          <input
            type="text"
            placeholder="شماره موبایل"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`border w-full px-3 py-2 rounded-[5px] outline-none transition-colors duration-200 ${
              phone.length === 0
                ? "border-gray-300" // وقتی هنوز چیزی وارد نشده
                : phoneRegex.test(phone)
                ? "border-green-500 focus:border-green-600" // شماره درست ✅
                : "border-red-500 focus:border-red-600" // شماره اشتباه ❌
            }`}
          />

          <div className="w-full flex justify-center items-center flex-col gap-5 mt-6">
            <button
              onClick={SubmitPhone}
              disabled={loading}
              className={`w-full cursor-pointer px-4 py-2 rounded-[5px] transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {loading ? "در حال ارسال..." : "تایید و ادامه"}
            </button>
            <p className="flex flex-col md:flex md:flex-row gap-1">
              حساب کاربری ندارید?
              <span>
                <Link className="text-blue-600" href={"/login/register"}>
                  ساخت حساب کاربری
                </Link>
              </span>
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
    </>
  );
}
