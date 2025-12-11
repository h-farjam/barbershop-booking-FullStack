"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface IReservation {
  _id: string;
  userId: { Fname: string; Lname: string; phone: string };
  serviceId: { title: string; price: number };
  slotId: { date: string; time: string };
  bookedAt: string;
}

interface IComment {
  _id: string;
  name: string;
  text: string;
  createdAt: string;
}

export default function AdminLayout() {
  const [activeTab, setActiveTab] = useState<"reservations" | "comments">(
    "reservations"
  );

  const [reservations, setReservations] = useState<IReservation[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [loadingReservations, setLoadingReservations] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);

  // --- Fetch data ---
  const fetchReservations = async () => {
    try {
      const res = await axios.get("/api/reservations");
      setReservations(res.data.data || []);
    } catch (err) {
      console.error(err);
      setReservations([]);
    } finally {
      setLoadingReservations(false);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await axios.get("/api/comment");
      console.log(res);

      setComments(res.data || []);
    } catch (err) {
      console.error(err);
      setComments([]);
    } finally {
      setLoadingComments(false);
    }
  };

  useEffect(() => {
    fetchReservations();
    fetchComments();
  }, []);

  // --- Delete functions ---
  const deleteReservation = async (id: string) => {
    try {
      await axios.delete(`/api/reservations/${id}`);
      toast.success("رزرو حذف شد");
      fetchReservations();
    } catch {
      toast.error("خطا در حذف رزرو");
    }
  };

  const deleteComment = async (id: string) => {
    try {
      await axios.delete(`/api/comment/${id}`);
      toast.success("کامنت حذف شد");
      fetchComments();
    } catch {
      toast.error("خطا در حذف کامنت");
    }
  };

  // --- Helper ---
  const toPersianDate = (dateStr?: string) => {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return d.toLocaleDateString("fa-IR", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="p-6">
      {/* دکمه های انتخاب تب */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("reservations")}
          className={`px-6 py-2 font-semibold rounded-full transition ${
            activeTab === "reservations"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          رزروها
        </button>
        <button
          onClick={() => setActiveTab("comments")}
          className={`px-6 py-2 font-semibold rounded-full transition ${
            activeTab === "comments"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          کامنت‌ها
        </button>
      </div>

      {/* محتوای وسط */}
      <div className="space-y-6">
        {/* تب رزروها */}
        {activeTab === "reservations" &&
          (loadingReservations ? (
            <p className="text-center text-gray-600">
              در حال بارگذاری رزروها...
            </p>
          ) : reservations.length === 0 ? (
            <p className="text-center text-gray-600">هنوز هیچ رزروی ثبت نشده</p>
          ) : (
            <>
              {/* دسکتاپ جدول */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-green-200 text-black">
                    <tr>
                      <th className="py-3 px-6">نام</th>
                      <th className="py-3 px-6">نام خانوادگی</th>
                      <th className="py-3 px-6">شماره تماس</th>
                      <th className="py-3 px-6">سرویس</th>
                      <th className="py-3 px-6">قیمت</th>
                      <th className="py-3 px-6">روز رزرو</th>
                      <th className="py-3 px-6">ساعت رزرو</th>
                      <th className="py-3 px-6">حذف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservations.map((res) => (
                      <tr
                        key={res._id}
                        className="border-b text-center hover:bg-gray-100 transition"
                      >
                        <td className="py-3 px-6">{res.userId.Fname}</td>
                        <td className="py-3 px-6">{res.userId.Lname}</td>
                        <td className="py-3 px-6">{res.userId.phone}</td>
                        <td className="py-3 px-6">{res.serviceId.title}</td>
                        <td className="py-3 px-6">
                          {res.serviceId.price.toLocaleString()} تومان
                        </td>
                        <td className="py-3 px-6">
                          {toPersianDate(res.slotId?.date)}
                        </td>
                        <td className="py-3 px-6">{res.slotId?.time}</td>
                        <td className="py-3 px-6">
                          <button
                            onClick={() => deleteReservation(res._id)}
                            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                          >
                            حذف
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* موبایل کارت‌ها */}
              <div className="md:hidden flex flex-col gap-4">
                {reservations.map((res) => (
                  <div
                    key={res._id}
                    className="bg-white shadow-md rounded-lg border-b-2 border-green-600 p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">نام:</span>{" "}
                      {res.userId.Fname}
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">نام خانوادگی:</span>{" "}
                      {res.userId.Lname}
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">شماره تماس:</span>{" "}
                      {res.userId.phone}
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">سرویس:</span>{" "}
                      {res.serviceId.title}
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">قیمت:</span>{" "}
                      {res.serviceId.price.toLocaleString()} تومان
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">روز رزرو:</span>{" "}
                      {toPersianDate(res.slotId?.date)}
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">ساعت رزرو:</span>{" "}
                      {res.slotId?.time}
                    </div>
                    <button
                      onClick={() => deleteReservation(res._id)}
                      className="w-full cursor-pointer mt-3 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                    >
                      حذف رزرو
                    </button>
                  </div>
                ))}
              </div>
            </>
          ))}

        {/* تب کامنت‌ها */}
        {activeTab === "comments" &&
          (loadingComments ? (
            <p className="text-center text-gray-600">
              در حال بارگذاری کامنت‌ها...
            </p>
          ) : comments.length === 0 ? (
            <p className="text-center text-gray-600">
              هنوز هیچ کامنتی ثبت نشده
            </p>
          ) : (
            <>
              {/* دسکتاپ جدول */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-green-200 text-black">
                    <tr>
                      <th className="py-3 px-6">نام</th>
                      <th className="py-3 px-6">متن کامنت</th>
                      <th className="py-3 px-6">تاریخ</th>
                      <th className="py-3 px-6">حذف</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comments.map((c) => (
                      <tr
                        key={c._id}
                        className="border-b text-center hover:bg-gray-100 transition"
                      >
                        <td className="py-3 px-6">{c.name}</td>
                        <td className="py-3 px-6">{c.text}</td>
                        <td className="py-3 px-6">
                          {new Date(c.createdAt).toLocaleString("fa-IR")}
                        </td>
                        <td className="py-3 px-6">
                          <button
                            onClick={() => deleteComment(c._id)}
                            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                          >
                            حذف
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* موبایل کارت‌ها */}
              <div className="md:hidden flex flex-col gap-4">
                {comments.map((c) => (
                  <div
                    key={c._id}
                    className="bg-white shadow-md rounded-lg border-b-2 border-blue-600 p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">نام:</span> {c.name}
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">کامنت:</span> {c.text}
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">تاریخ:</span>{" "}
                      {new Date(c.createdAt).toLocaleString("fa-IR")}
                    </div>
                    <button
                      onClick={() => deleteComment(c._id)}
                      className="w-full cursor-pointer mt-3 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                    >
                      حذف کامنت
                    </button>
                  </div>
                ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
}
