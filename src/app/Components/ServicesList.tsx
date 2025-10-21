"use client";

import React from "react";
import { IService } from "@/app/services/page";

interface Props {
  services: IService[];
}

export default function ServicesList({ services }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {services.map((item) => (
        <div
          key={item._id}
          className="w-80 rounded-xl bg-white shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
        >
          <div className="h-48">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-5">
            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.subtitle}</p>
            <p className="text-green-600 font-semibold mt-3">{item.price}</p>

            <button
              onClick={() => alert(`رزرو ${item.title} انجام شد ✅`)}
              className="mt-4 w-full cursor-pointer rounded-lg bg-blue-500 py-2 text-white font-semibold hover:bg-blue-600 transition"
            >
              رزرو
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
