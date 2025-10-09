import Link from "next/link";
import React from "react";

function HeroSection4() {
  return (
    <>
      <section className="gird w-full p-5 bg-[#262626] grid-cols-1">
        <div className="grid  grid-cols-1 md:grid-cols-2 relative gap-20 md:gap-2  items-center">
          <div className="  flex justify-end md:justify-start">
            <div className="w-[390px] h-[435px] mx-0 md:mx-10 border border-[#f8cc7f]"></div>
            <img
              className="max-w-[390px] absolute top-10 right-5 md:right-20 max-h-[428px]"
              src="/Rectangle 2@2x.png"
              alt=""
            />
          </div>
          <div className=" text-white px-10 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">اصلاح ریش و صورت </h1>
            <p className="text-justify">
              با استفاده از جدید ترین متد های روز دنیا از فید حرفه ای تا مدل های
              مدرن و کلاسیک ، ظاهری شیک و ماندگار برای شما خلق می‌کنیم. اصلاح
              ریش و خط گیری با نهایت ظرافت انجام می‌شود تا استایل مردانه شما
              کامل تر شود اگر به دنبال ترکیبی از مهارت ، دقت ، ظرافت در محیط
              حرفه ای هستید ، اینجا همان جایی است که باید باشد{" "}
            </p>
            <Link className="" href={"/"}>
              <button className=" font-bold text-black px-3 py-1 w-[184px] h-[48px] rounded-4xl cursor-pointer bg-[#f8cc7f]">
                رزرو نوبت
              </button>
            </Link>
          </div>
        </div>
        {/* -------------------------------------------------------- */}
        <div
          dir="ltr"
          className="grid grid-cols-1 md:grid-cols-2 relative my-15 gap-20 md:gap-2  items-center"
        >
          <div className="  flex justify-end md:justify-start">
            <div className="w-[390px]  mx-0 md:mx-10 h-[435px] border border-[#f8cc7f]"></div>
            <img
              className="max-w-[390px] absolute top-10 left-5 md:left-20 max-h-[428px]"
              src="/Rectangle 1.jpg"
              alt=""
            />
          </div>
          <div dir="rtl" className=" text-white px-10 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">مراقبت پوستی</h1>
            <p className="text-justify">
              پوست سالم و شاداب نشانه ی استایل خوب و اعتماد به نفس فرد است .
              درسالن ما مراقبت های پوستی ، با جدید ترین روش ها و پکیج های تخصصی
              انجام می‌شود ;از پاکسازی عمیق و لایه برداری گرفته تا آبرسانی و
              ماسک های درمانی . خدمات نه تنها پوست شما را تازه و درخشان می‌کند
              بلکه به حفظ سلامت و جوانی آن کمک میکند
            </p>
            <Link className="" href={"/"}>
              <button className=" font-bold text-black px-3 py-1 w-[184px] h-[48px] rounded-4xl cursor-pointer bg-[#f8cc7f]">
                رزرو نوبت
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection4;
