"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface IReservation {
  _id: string;
  userId: { Fname: string; Lname: string; phone: string };
  serviceId: { title: string; price: number };
  slotId: { date: string; time: string };
  bookedAt: string;
}

export default function ReservationTable() {
  const [reservations, setReservations] = useState<IReservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await axios.get("/api/reservations");
        setReservations(res.data.data);
      } catch (err) {
        console.error("❌ خطا در گرفتن رزروها:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-700">در حال بارگذاری رزروها...</p>
    );

  return (
    <div className="w-full mt-6">
      {/* 📱 حالت دسکتاپ */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6">نام</th>
              <th className="py-3 px-6">نام خانوادگی</th>
              <th className="py-3 px-6">شماره تماس</th>
              <th className="py-3 px-6">سرویس</th>
              <th className="py-3 px-6">قیمت</th>
              <th className="py-3 px-6">تاریخ رزرو</th>
              <th className="py-3 px-6">زمان اسلات</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr
                key={res._id}
                className="border-b text-center hover:bg-gray-100 transition"
              >
                <td className="py-3 px-6">{res.userId?.Fname || "-"}</td>
                <td className="py-3 px-6">{res.userId?.Lname || "-"}</td>
                <td className="py-3 px-6">{res.userId?.phone || "-"}</td>
                <td className="py-3 px-6">{res.serviceId?.title || "-"}</td>
                <td className="py-3 px-6">
                  {res.serviceId?.price
                    ? `${res.serviceId.price.toLocaleString()} تومان`
                    : "-"}
                </td>
                <td className="py-3 px-6">{res.slotId?.date || "-"}</td>
                <td className="py-3 px-6">{res.slotId?.time || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📱 حالت موبایل */}
      <div className="md:hidden flex flex-col gap-4">
        {reservations.map((res) => (
          <div
            key={res._id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">نام:</span>
              <span>{res.userId?.Fname || "-"}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">نام خانوادگی:</span>
              <span>{res.userId?.Lname || "-"}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">شماره تماس:</span>
              <span>{res.userId?.phone || "-"}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">سرویس:</span>
              <span>{res.serviceId?.title || "-"}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">قیمت:</span>
              <span>
                {res.serviceId?.price
                  ? `${res.serviceId.price.toLocaleString()} تومان`
                  : "-"}
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">تاریخ:</span>
              <span>{res.slotId?.date || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">زمان:</span>
              <span>{res.slotId?.time || "-"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
