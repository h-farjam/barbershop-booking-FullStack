// src/app/admin/dashboard/ReservationTable.tsx
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
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReservations();
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-700">
        در حال بارگذاری رزروها...
      </p>
    );

  return (
    <div className="overflow-x-auto">
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
            <tr key={res._id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-6">{res.userId.Fname}</td>
              <td className="py-3 px-6">{res.userId.Lname}</td>
              <td className="py-3 px-6">{res.userId.phone}</td>
              <td className="py-3 px-6">{res.serviceId.title}</td>
              <td className="py-3 px-6">
                {res.serviceId.price.toLocaleString()} تومان
              </td>
              <td className="py-3 px-6">{res.slotId.date}</td>
              <td className="py-3 px-6">{res.slotId.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
