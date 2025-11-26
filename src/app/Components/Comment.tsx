"use client";

import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface CommentType {
  _id: string;
  name: string;
  text: string;
  date: string;
}

export default function Comment() {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // fetch comments from API
  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch("/api/comment"); // مسیر API
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, []);

  const nextComment = () => {
    setCurrentIndex((prev) => (prev + 1) % comments.length);
  };

  const prevComment = () => {
    setCurrentIndex((prev) => (prev === 0 ? comments.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <p className="text-white text-center my-10">در حال بارگذاری نظرات...</p>
    );
  }

  if (comments.length === 0) {
    return (
      <p className="text-white text-center my-10">هیچ نظری ثبت نشده است.</p>
    );
  }

  const comment = comments[currentIndex];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 flex flex-col items-center">
      {/* عنوان */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-6 sm:my-10 font-bold">
        نظرات
      </h1>

      {/* کارت کامنت */}
      <div className="relative w-full flex mb-10 justify-center items-center">
        {/* کارت */}
        <div className="bg-[#1E1F1C] w-full sm:w-[90%] md:w-2/3 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg transition-all duration-500">
          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5 items-center w-full mb-4">
            <div className="text-white flex flex-col items-center sm:items-start gap-1 sm:gap-2">
              <p className="text-lg sm:text-xl md:text-2xl font-bold">
                {comment.name}
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                <span className="text-[#ffde91]">تاریخ</span> : {comment.date}
              </p>
            </div>
            <div>
              <img
                src="/quote-up.png"
                alt="quote"
                className="w-6 sm:w-8 md:w-10"
              />
            </div>
          </div>

          <div className="text-center text-white">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              {comment.text}
            </p>
          </div>
        </div>

        {/* دکمه قبلی */}
        <button
          onClick={prevComment}
          className="absolute mx-3 left-[10px] sm:left-[-30px] bg-[#ffffff33] sm:bg-[#00000033] p-2 sm:p-3 md:p-4 rounded-full cursor-pointer hover:bg-[#09090955] transition z-10"
        >
          <FaAngleLeft
            size={20}
            className="sm:w-5 text-white sm:h-5 md:w-6 md:h-6"
          />
        </button>

        {/* دکمه بعدی */}
        <button
          onClick={nextComment}
          className="absolute mx-3 right-[10px] sm:right-[-30px]  bg-[#ffffff33] sm:bg-[#00000033]  p-2 sm:p-3 md:p-4 rounded-full cursor-pointer hover:bg-[#00000055] transition z-10"
        >
          <FaAngleRight
            size={20}
            className="sm:w-5 sm:h-5 text-white md:w-6 md:h-6"
          />
        </button>
      </div>
    </div>
  );
}
