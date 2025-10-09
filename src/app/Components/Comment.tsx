import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Comment() {
  return (
    <div className="w-full">
      <h1 className="text-3xl text-center my-10 font-bold">نظرات</h1>
      <div className="flex px-10 justify-between items-center w-full">
        <button className=" bg-[#00000033] p-4 rounded-full cursor-pointer">
          <FaAngleRight />
        </button>
        <button className=" bg-[#00000033] p-4 rounded-full cursor-pointer">
          <FaAngleLeft />
        </button>
      </div>

      <div className="flex justify-around items-center my-10 gap-4 w-full">
        {/* ستون سمت راست */}
        <div className="bg-[#1E1F1C] w-1/2 p-4 rounded-xl">
          <div className="flex justify-between items-center w-full">
            <div className="text-white">
              <p>سعید رضایی</p>
              <p>تاریخ : 1/1/1401</p>
            </div>
            <div>
              <img src="/quote-up.png" alt="" />
            </div>
          </div>
          <div className="text-center text-white">
            <p>عالی بود پیشنهاد من به همه همین ارایشگاه هست</p>
          </div>
        </div>

        {/* ستون سمت چپ */}
        <div className="bg-[#1E1F1C] w-1/2 p-4 rounded-xl">
          <div className="flex justify-between items-center w-full">
            <div className="text-white">
              <p>سعید رضایی</p>
              <p>تاریخ : 1/1/1401</p>
            </div>
            <div>
              <img src="/quote-up.png" alt="" />
            </div>
          </div>
          <div className="text-center text-white">
            <p>عالی بود پیشنهاد من به همه همین ارایشگاه هست</p>
          </div>
        </div>
      </div>
    </div>
  );
}
