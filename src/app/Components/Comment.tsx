import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Comment() {
  return (
    <>
      {/* عنوان و دکمه‌های اسلایدر */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-6 sm:my-10 font-bold">
          نظرات
        </h1>

        <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-10">
          <button className="bg-[#00000033] p-2 sm:p-3 md:p-4 rounded-full cursor-pointer hover:bg-[#00000055] transition">
            <FaAngleRight size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          <button className="bg-[#00000033] p-2 sm:p-3 md:p-4 rounded-full cursor-pointer hover:bg-[#00000055] transition">
            <FaAngleLeft size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* کارت نظر */}
      <div className="flex flex-col items-center justify-center my-8 sm:my-10 px-3 sm:px-6 md:px-10 gap-4 w-full">
        <div className="bg-[#1E1F1C] w-full sm:w-[90%] md:w-2/3 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5 items-center w-full mb-4">
            <div className="text-white flex flex-col items-center sm:items-start gap-1 sm:gap-2">
              <p className="text-lg sm:text-xl md:text-2xl font-bold">
                سعید رضایی
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                <span className="text-[#ffde91]">تاریخ</span> : 1404/7/19
              </p>
            </div>
            <div>
              <img
                src="/quote-up.png"
                alt="quote"
                className="w-6 sm:w-8 md:w-10"
              />
            </div>
          </div>

          <div className="text-center text-white">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              عالی بود! پیشنهاد من به همه همین آرایشگاه هست.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
