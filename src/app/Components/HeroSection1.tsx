import React from "react";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";

function HeroSection1() {
  return (
    <section className="flex flex-col  w-full h-screen pr-3  gap-10   mt-35">
      <div>
        <h2 className="text-4xl px-4 flex text-white font-bold">
          <span className="text-[#f8cc7f]">هنر کات ، </span> در دست ماست __ هر
          حرکت قیچی{" "}
        </h2>
        <br />

        <h2 className="text-4xl flex px-4 text-white font-bold">
          {" "}
          یک داستان از دقت ، استایل و اعتماد
        </h2>
      </div>
{/* ---------------------------------------------------------------------------------------------- */}
      <div className="flex px-4 justify-start items-center gap-10 ">
        <button
          className=" font-bold
         px-3 py-1 w-[184px] h-[48px] rounded-4xl cursor-pointer bg-[#f8cc7f]"
        >
          رزرو نوبت
        </button>
        <p className="text-3xl text-[#f8cc7f]">Story</p>
        <span className="border p-2 text-[#f8cc7f] rounded-full">
          <Link href={"/"}>
            <BiLogoTelegram size={"25px"} />
          </Link>
        </span>
      </div>
{/* ---------------------------------------------------------------------------------------------------- */}
      <div className="self-center border-0  flex backdrop-blur-3xl overflow-hidden rounded-3xl justify-center items-center">
        <div className="w-[900px]  flex justify-around items-center text-4xl h-[200px] border rounded-3xl">
          <div className="flex flex-col gap-3">
            <div className="flex justify-around gap-15">
              <p className="font-bold text-2xl">تماس</p>
              <LuPhoneCall className="text-2xl" />
            </div>
            <hr />
            <p className="text-[20px] text-center">09012352548</p>
            <p className="text-[20px] text-center">09210658494</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-around">
              <p className="font-bold text-2xl">آدرس</p>
              <CiLocationOn className="text-2xl" />
            </div>
            <hr />
            <p className="text-[20px] text-center flex gap-2 flex-col">
              <span>شاهرود خیابان مصلا ،</span>
              <span>پایین تر از مسجد جوادالائمه</span>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-around gap-6 items-center">
              <p className="font-bold text-2xl">ساعت کاری</p>
              <CiTimer className="text-2xl" />
            </div>
            <hr />
            <p className="text-[20px] text-center flex flex-col gap-2">
              <span>از 12:00 ظهر</span>
              <span>الی 22:00</span>
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
