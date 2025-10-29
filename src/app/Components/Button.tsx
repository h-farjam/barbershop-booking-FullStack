"use client";
import React from "react";

export default function FancyButton() {
  return (
    <button
      className="relative cursor-pointer shadow inline-block font-medium text-[17px] uppercase px-10 py-4 rounded-full bg-white text-black transition-all duration-200 overflow-hidden z-[1]
                 hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]
                 active:translate-y-[-1px] active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
    >
      <span className="relative z-[2]">برگشت به صفحه اصلی </span>
      <span
        className="absolute top-0 left-0 w-full h-full bg-white rounded-full transition-transform duration-400 ease-in-out z-[1]
                   hover:scale-[1.6] hover:opacity-0"
      />
    </button>
  );
}
