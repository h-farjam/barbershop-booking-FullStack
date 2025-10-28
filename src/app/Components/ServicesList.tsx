"use client";

import React, { useState, useEffect } from "react";
import { IService } from "@/app/services/page";
import axios from "axios";
import { div } from "framer-motion/client";

interface Props {
  initialServices?: IService[];
}

export default function ServicesList({ initialServices }: Props) {
  const [services, setServices] = useState<IService[]>(initialServices || []);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false);

  const filters = [
    { id: "all", label: "همه" },
    { id: "full", label: "اصلاح کامل" },
    { id: "groom", label: "دامادی" },
    { id: "skin", label: "پاکسازی پوست" },
  ];

  const handleFilter = async (filterId: string) => {
    setActiveFilter(filterId);
    setLoading(true);

    try {
      const res = await axios.get(`/api/services?filter=${filterId}`);
      setServices(res.data.data || []);
    } catch (error) {
      console.error("Error fetching services:", error);
      setServices([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch اولیه همه خدمات
  useEffect(() => {
    handleFilter("all");
  }, []);

  return (
    <div className="w-full px-4">
      {/* دکمه‌های فیلتر */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((item) => (
          <button
            key={item.id}
            onClick={() => handleFilter(item.id)}
            className={`px-4 py-2 rounded-full border transition ${
              activeFilter === item.id
                ? "bg-blue-500 text-white border-blue-500"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* لیست خدمات */}
      {loading ? (
        <main className="flex justify-center items-center">
          <div className="flex flex-col text-center bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4">
            <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md" />
            <div className="flex flex-col gap-2">
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
              <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md" />
              <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md" />
              <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md" />
            </div>
          </div>
        </main>
      ) : (
        <main className="w-full min-h-[60vh] flex flex-wrap justify-center items-start gap-6">
          {services && services.length > 0 ? (
            services.map((item) => (
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
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{item.subtitle}</p>
                  <p className="text-green-600 font-semibold mt-3">
                    {item.price} تومان
                  </p>

                  <button
                    onClick={() => alert(`رزرو ${item.title} انجام شد ✅`)}
                    className="mt-4 w-full cursor-pointer rounded-lg bg-blue-500 py-2 text-white font-semibold hover:bg-blue-600 transition"
                  >
                    رزرو
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              خدماتی برای این فیلتر یافت نشد.
            </p>
          )}
        </main>
      )}
    </div>
  );
}
