import Link from "next/link";
import React from "react";

export default function HeroSection3() {
  return (
    <>
      <section className=" bg-[#F8F5EF] py-4 flex justify-center gap-10 items-center flex-col w-full">
        <h1 className="font-bold text-center text-4xl">خدمات</h1>
        <div className="border-none rounded-[20px] py-10 px-10 shadow-2xl grid md:grid-cols-2 gap-15 grid-cols-1  md:w-2/3 w-full">
          <div className="flex justify-center items-start gap-3">
            <img src="/Image icon-Cutter.png" alt="" />
            <div className="text-justify flex flex-col gap-1">
              <p className="font-bold text-2xl">کوتاهی مو</p>
              <p>
                کوتاهی مو با جدید ترین متد های روز دنیا | فید حرفه ای و مدل های
                مدرن مردانه مناسب استایل شما{" "}
              </p>
              <hr />
              <p className="font-bold text-[#dba952]">200 هزارتومان</p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3">
            <img src="/Image icon.png" alt="" />
            <div className="text-justify flex flex-col gap-1">
              <p className="font-bold text-2xl">فید</p>
              <p>
                انواع فید(low, Mid , high) با دقت بالا وخطوط تمیز | استایلی مدرت
                و شیک برای هر سلیقه{" "}
              </p>
              <hr />
              <p className="font-bold text-[#dba952]">60 هزارتومان</p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3">
            <img src="/Image iconnn (1).png" alt="" />
            <div className="text-justify flex flex-col gap-3">
              <p className="font-bold text-2xl">مراقبت پوستی</p>
              <p>مراقبت پوستی | پاکسازی + آبرسانی با پکیچ های حرفه ای</p>
              <hr />
              <p className="font-bold text-[#dba952]">500هزارتومان</p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3">
            <img src="/Image iconrish (1).png" alt="" />
            <div className="text-justify flex flex-col gap-1">
              <p className="font-bold text-2xl">اصلاح ریش و صورت </p>
              <p>
                از اصلاح کلاسیک تا مدل های مدرن ریش | تجربه های متفاوت از تمیزی،
                دقت و استایل مردانه{" "}
              </p>
              <hr />
              <p className="font-bold text-[#dba952]">200هزارتومان</p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3">
            <img src="/hair-curler-icon-3684901-512 1.png" alt="" />
            <div className="text-justify flex flex-col gap-1">
              <p className="font-bold text-2xl">فر و کراتین </p>
              <p>
                احیا و صاف کردن مو با | موهایی جذاب و خوش حالت با فر ماندگار
              </p>
              <hr />
              <p className="font-bold text-[#dba952]">قیمت با توجه به حجم</p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3">
            <img src="/groom_8044709 1.png" alt="" />
            <div className="text-justify flex flex-col gap-1">
              <p className="font-bold text-2xl">داماد</p>
              <p>پکیج دامادی VIP | استایل های خاص برای روز خاص شما </p>
              <hr />
              <p className="font-bold text-[#dba952]">3 ملیون تومان </p>
            </div>
          </div>
          <div className="col-span-1  md:col-span-2 flex items-center justify-center">
            <Link className="" href={"/"}>
              <button
                className=" font-bold
         px-3 py-1 w-[184px] h-[48px] rounded-4xl cursor-pointer bg-[#f8cc7f]"
              >
                رزرو نوبت
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
