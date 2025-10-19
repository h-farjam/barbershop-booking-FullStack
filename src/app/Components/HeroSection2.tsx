import React from "react";

export default function HeroSection2() {
  return (
    <div className="bg-[#2f2f2f] w-full h-auto py-10 sm:py-12 md:py-15 text-white">
      {/* نوار طلایی چرخیده */}
      <div className="bg-[#f8cc7f] w-full overflow-hidden flex rotate-3 justify-around items-center py-3 sm:py-4 md:py-5 text-black text-xs sm:text-sm md:text-base lg:text-lg font-semibold">
        <p className="flex items-center gap-1">
          <img className="w-4 h-6 sm:w-5 sm:h-8" src="/icon scissors.png" alt="" />
          Book My Barber
        </p>
        <p>Book My Barber</p>
        <p>Book My Barber</p>
        <p>Book My Barber</p>
        <p className="flex items-center gap-1">
          <img className="w-4 h-6 sm:w-5 sm:h-8" src="/icon scissors.png" alt="" />
          Book My Barber
        </p>
        <p>Book My Barber</p>
        <p>Book My Barber</p>
        <p>Book My Barber</p>
      </div>

      {/* نوار پایین خاکستری تیره */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-3 md:gap-4 mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-medium">
        <p>Be beautiful</p>
        <p>Be beautiful</p>
        <p>Be beautiful</p>
        <p>Be beautiful</p>
        <p>Be beautiful</p>
        <p>Be beautiful</p>
        <p>Be beautiful</p>
        <p>Be beautiful</p>
        <p>Be beautiful</p>
      </div>
    </div>
  );
}
