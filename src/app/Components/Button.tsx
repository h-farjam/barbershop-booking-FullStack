"use client";
import { FaLongArrowAltLeft } from "react-icons/fa";
import React from "react";

export default function FancyButton() {
  return (
    <button
      className={`
        px-4 w-full flex justify-between items-center gap-4 text-right py-2 rounded-full border cursor-pointer transition
        border-gray-300 text-gray-700 bg-white
        hover:bg-gray-100 hover:shadow-lg hover:scale-105
        active:scale-95
      `}
    >
       صفحه اصلی<FaLongArrowAltLeft/>
    </button>
  );
}
