import React from "react";
import Link from "next/link";
import { BiLogoTelegram } from "react-icons/bi";

function HeroSection1() {
  return (
    <section className="flex flex-col  w-full h-screen pr-3  gap-5 mr-4   mt-35">
      <div>
        <h2 className="text-4xl flex text-white font-bold">
          <span className="text-[#f8cc7f]">هنر کات ، </span> در دست ماست __ هر
          حرکت قیچی{" "}
        </h2>
        <br />
        <h2 className="text-4xl flex text-white font-bold">
          {" "}
          یک داستان از دقت ، استایل و اعتماد
        </h2>
      </div>

      <div className="flex justify-start items-center gap-10 ">
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

      <div className="self-center border-0  flex backdrop-blur-3xl overflow-hidden rounded-3xl justify-center items-center">
        <div className="w-[900px]  flex justify-center items-center text-4xl h-[200px] border rounded-3xl">
          <p>hossein</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
