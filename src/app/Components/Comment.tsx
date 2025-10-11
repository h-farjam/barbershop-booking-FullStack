import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export default function Comment() {
  return (
    <>
      <div className="w-full px-10">
        <h1 className="text-3xl text-center my-10 font-bold">نظرات</h1>
        <div className="flex px-10 justify-between items-center w-full">
          <button className=" bg-[#00000033] p-4 rounded-full cursor-pointer">
            <FaAngleRight />
          </button>
          <button className=" bg-[#00000033] p-4 rounded-full cursor-pointer">
            <FaAngleLeft />
          </button>
        </div>
      </div>

      <div className="flex px-5 md:px-15 justify-around items-center my-10 gap-4 w-full">
       
        <div className="bg-[#1E1F1C] w-full md:w-2/3 p-4 rounded-xl">
          <div className="flex justify-between gap-3 items-center w-full">
            <div className="text-white flex flex-col gap-2">
              <p className="text-2xl font-bold">سعید رضایی</p>
              <p><span className="text-[#ffde91]">تاریخ</span> : 1404/7/19</p>
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
    </>
  );
}
