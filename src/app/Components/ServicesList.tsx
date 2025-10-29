"use client";
import React, { useState, useEffect } from "react";
import { IService } from "@/app/services/page";
import axios from "axios";
import { motion } from "framer-motion";
import Spinner from "./Spinner";

interface Props {
  initialServices?: IService[];
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

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

  useEffect(() => {
    handleFilter("all");
  }, []);

  return (
    <div className="w-full ">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-5 mb-7">
        {filters.map((item) => (
          <button
            key={item.id}
            onClick={() => handleFilter(item.id)}
            className={`px-4 py-2 rounded-full border transition ${
              activeFilter === item.id
                ? "bg-blue-500 text-white border-blue-500 shadow-lg scale-105"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Services */}
      {loading ? (
        <main className="flex justify-center items-center min-h-[40vh]">
          <Spinner />
        </main>
      ) : (
        <motion.main
          className="w-full min-h-[60vh] flex flex-wrap justify-center items-start gap-6"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {services && services.length > 0 ? (
            services.map((item) => (
              <motion.div
                key={item._id}
                className="w-80 rounded-xl bg-white shadow-md overflow-hidden cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-48 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                  <p className="text-green-600 font-semibold">
                    {item.price} تومان
                  </p>

                  <motion.button
                    onClick={() => alert(`رزرو ${item.title} انجام شد ✅`)}
                    className="mt-4 cursor-pointer w-full rounded-lg bg-blue-500 py-2 text-white font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    رزرو
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              خدماتی برای این فیلتر یافت نشد.
            </p>
          )}
        </motion.main>
      )}
    </div>
  );
}
