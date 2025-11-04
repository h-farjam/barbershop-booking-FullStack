import React from "react";
import { Slot } from "../CustomHook/useSlots";

interface Props {
  item: Slot;
  index: number;
  serviceId: string;
  onBook: (id: string, serviceId: string) => void;
}

export default function SlotCard({ item, serviceId, index, onBook }: Props) {
  return (
    <div
      key={item._id}
      className="relative flex w-80 flex-col rounded-2xl bg-white text-gray-700 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
    >
      <div
        className={`relative mx-4 -mt-6 h-36 overflow-hidden rounded-xl
          ${item.isBooked ? "bg-[#ca8282]" : "bg-[#6f9b6d]"}
          shadow-md flex items-center justify-center text-white text-lg font-semibold`}
      >
        {`نوبت ${index + 1}`}
      </div>

      <div className="p-6 text-center">
        <h5 className="text-xl font-bold mb-2">{item.time}</h5>
        <p className="text-sm text-gray-600">{item.date}</p>
        <p
          className={`mt-3 text-sm font-medium ${
            item.isBooked ? "text-red-500" : "text-green-600"
          }`}
        >
          {item.isBooked ? `رزرو شده توسط ${item.bookedBy}` : "رزرو نشده"}
        </p>
      </div>

      <div className="p-4 pt-0">
        <button
          onClick={() => onBook(item._id, serviceId)}
          disabled={item.isBooked}
          className={`w-full rounded-lg 
            ${item.isBooked ? "cursor-no-drop" : "cursor-pointer"}
            py-3 font-bold text-white transition-all ${
              item.isBooked ? "bg-[#ca8282]" : "bg-[#6f9b6d]"
            }`}
        >
          {item.isBooked ? "نوبت رزرو شده " : "رزرو"}
        </button>
      </div>
    </div>
  );
}
