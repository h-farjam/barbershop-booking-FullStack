"use client";

import React, { useEffect, useState } from "react";
import { Slot } from "../CustomHook/useSlots";

interface Props {
  item: Slot;
  index: number;
  serviceId: string;
  onBook: (id: string, serviceId: string) => void;
}

export default function SlotCard({ item, serviceId, index, onBook }: Props) {
  const Book = () => {
    onBook(item._id, serviceId);
  };

  return (
    <div className="relative w-80 flex flex-col rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div
        className={`h-32 flex items-center justify-center text-white text-lg font-bold
        ${item.isBooked ? "bg-red-400" : "bg-green-500"}`}
      >
        {`نوبت ${index + 1}`}
      </div>

      <div className="p-5 text-center">
        <h5 className="text-xl font-bold mb-2">{item.time}</h5>
        <p className="text-gray-500 text-sm mb-2">{item.date}</p>
        <p
          className={`text-sm font-medium ${
            item.isBooked ? "text-red-600" : "text-green-600"
          }`}
        >
          {item.isBooked ? `رزرو شده توسط ${item.bookedBy}` : "رزرو نشده"}
        </p>
      </div>

      <div className="p-5 pt-0">
        <button
          onClick={Book}
          disabled={item.isBooked}
          className={`w-full py-3 rounded-xl font-semibold text-white transition
          ${
            item.isBooked
              ? "bg-red-400 cursor-not-allowed"
              : "bg-green-500 cursor-pointer hover:bg-green-600"
          }`}
        >
          {item.isBooked ? "رزرو شده" : "رزرو"}
        </button>
      </div>
    </div>
  );
}
