import Link from "next/link";
import React from "react";

export default function HeroSection3() {
  const services = [
    {
      img: "/Image icon-Cutter.png",
      title: "کوتاهی مو",
      desc: "کوتاهی مو با جدید ترین متد های روز دنیا | فید حرفه ای و مدل های مدرن مردانه مناسب استایل شما",
      price: "200 هزارتومان",
    },
    {
      img: "/Image icon.png",
      title: "فید",
      desc: "انواع فید(low, Mid , high) با دقت بالا وخطوط تمیز | استایلی مدرن و شیک برای هر سلیقه",
      price: "60 هزارتومان",
    },
    {
      img: "/Image iconnn (1).png",
      title: "مراقبت پوستی",
      desc: "مراقبت پوستی | پاکسازی + آبرسانی با پکیج‌های حرفه‌ای",
      price: "500 هزارتومان",
    },
    {
      img: "/Image iconrish (1).png",
      title: "اصلاح ریش و صورت",
      desc: "از اصلاح کلاسیک تا مدل‌های مدرن ریش | تجربه‌ای متفاوت از تمیزی، دقت و استایل مردانه",
      price: "200 هزارتومان",
    },
    {
      img: "/hair-curler-icon-3684901-512 1.png",
      title: "فر و کراتین",
      desc: "احیا و صاف کردن مو | موهایی جذاب و خوش‌حالت با فر ماندگار",
      price: "قیمت با توجه به حجم",
    },
    {
      img: "/groom_8044709 1.png",
      title: "داماد",
      desc: "پکیج دامادی VIP | استایل‌های خاص برای روز خاص شما",
      price: "3 میلیون تومان",
    },
  ];

  return (
    <section className="bg-[#F8F5EF] py-10 px-4 flex flex-col items-center w-full">
      {/* عنوان بخش */}
      <h1 className="font-bold text-center text-2xl sm:text-3xl md:text-4xl mb-8">
        خدمات
      </h1>

      {/* کارت‌ها */}
      <div className="rounded-[20px] py-8 px-6 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <div className="text-justify flex w-full flex-col gap-2">
              <p className="font-bold text-lg sm:text-xl md:text-2xl leading-snug">
                {item.title}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                {item.desc}
              </p>
              <div className="flex w-full justify-center">
              
              </div>
              <p className="font-semibold text-[#dba952] text-sm sm:text-base md:text-lg text-right sm:text-start">
                {item.price}
              </p>
            </div>
          </div>
        ))}

        {/* دکمه رزرو نوبت */}
        <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
          <Link href="/services">
            <button className="font-bold text-sm sm:text-base md:text-lg cursor-pointer w-[150px] sm:w-[180px] h-[42px] sm:h-[45px] rounded-3xl bg-[#f8cc7f] text-black hover:bg-[#e0b85a] transition">
              رزرو نوبت
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
