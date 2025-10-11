import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="border w-full p-15 bg-[#272727]  text-white grid grid-cols-1 md:grid-cols-3 gap-15 md:gap-5">
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

      <div className="w-full flex justify-center items-center p-5 gap-10 bg-[#272727]  text-white">
        <div className="flex justify-center items-center gap-1">
          <img className="scale-90" src="/icon scissors.png" alt="" />
          <p className="font-bold capitalize text-[#f8cc7f]">Amir Mohammad</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <span className="border p-2 rounded-full">
            <Link href={"/"}>
              <BiLogoTelegram size={"25px"} />
            </Link>
          </span>
          <span className="border p-2 rounded-full">
            <Link href={"/"}>
              <IoLogoInstagram size={"25px"} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

Footer;
