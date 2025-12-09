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

  // فرم
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // نام کاربر لاگین شده
  const [userName, setUserName] = useState("");

  // fetch comments
  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch("/api/comment");
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

  // fetch logged-in user info
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/status");
        const data = await res.json();

        if (data.loggedIn && data.user) {
          const fullName = `${data.user.Fname} ${data.user.Lname}`;
          setUserName(fullName);
          setName(fullName); // پر کردن اتوماتیک
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    }

    fetchUser();
  }, []);

  // اسلایدر بعدی
  const nextComment = () => {
    setCurrentIndex((prev) => (prev + 1) % comments.length);
  };

  // اسلایدر قبلی
  const prevComment = () => {
    setCurrentIndex((prev) => (prev === 0 ? comments.length - 1 : prev - 1));
  };

  // ارسال کامنت جدید
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !text.trim()) {
      alert("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    const newComment = {
      name,
      text,
      date: new Date().toLocaleDateString("fa-IR"),
    };

    const res = await fetch("/api/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newComment),
    });

    if (!res.ok) {
      alert("خطا در ارسال نظر");
      return;
    }

    const saved = await res.json();

    // افزودن به UI بدون رفرش
    setComments((prev) => [saved, ...prev]);
    setCurrentIndex(0);

    // خالی کردن فرم (اگر کاربر لاگین نبود)
    if (!userName) setName("");

    setText("");
  };

  if (loading) {
    return (
      <p className="text-white text-center my-10">در حال بارگذاری نظرات...</p>
    );
  }

  if (comments.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <p className="text-white text-center my-10">هیچ نظری ثبت نشده است.</p>

        {/* فرم */}
        <FormSection
          name={name}
          text={text}
          setName={setName}
          setText={setText}
          handleSubmit={handleSubmit}
          disabledName={Boolean(userName)}
        />
      </div>
    );
  }

  const comment = comments[currentIndex];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 flex flex-col items-center">
      {/* عنوان */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center my-6 sm:my-10 font-bold">
        نظرات
      </h1>

      {/* کارت کامنت + اسلایدر */}
      <div className="relative w-full flex mb-10 justify-center items-center">
        <div className="bg-[#1E1F1C] w-full sm:w-[90%] md:w-2/3 p-6 md:p-8 rounded-xl shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-center mb-4">
            <div className="text-white flex flex-col items-center sm:items-start gap-1">
              <p className="text-lg sm:text-xl md:text-2xl font-bold">
                {comment.name}
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                <span className="text-[#ffde91]">تاریخ</span> : {comment.date}
              </p>
            </div>
            <img
              src="/quote-up.png"
              alt="quote"
              className="w-6 sm:w-8 md:w-10"
            />
          </div>

          <p className="text-center text-white text-sm sm:text-base md:text-lg leading-relaxed">
            {comment.text}
          </p>
        </div>

        {/* دکمه قبلی */}
        <button
          onClick={prevComment}
          className="absolute left-[8px] sm:left-[-30px] bg-[#00000033] p-3 rounded-full hover:bg-[#00000055] transition text-white"
        >
          <FaAngleLeft size={22} />
        </button>

        {/* دکمه بعدی */}
        <button
          onClick={nextComment}
          className="absolute right-[8px] sm:right-[-30px] bg-[#00000033] p-3 rounded-full hover:bg-[#00000055] transition text-white"
        >
          <FaAngleRight size={22} />
        </button>
      </div>

      {/* فرم ثبت نظر */}
      <FormSection
        name={name}
        text={text}
        setName={setName}
        setText={setText}
        handleSubmit={handleSubmit}
        disabledName={Boolean(userName)}
      />
    </div>
  );
}

// کامپوننت فرم
function FormSection({
  name,
  text,
  setName,
  setText,
  handleSubmit,
  disabledName,
}: {
  name: string;
  text: string;
  setName: (v: string) => void;
  setText: (v: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  disabledName: boolean;
}) {
  return (
    <div className="w-full sm:w-[90%] md:w-2/3 bg-[#1E1F1C] p-6 rounded-xl mb-10">
      <h2 className="text-white text-xl font-bold mb-4 text-center">
        ثبت نظر جدید
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="نام شما"
          className="p-3 rounded bg-[#2a2b28] text-white outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disabledName}
        />

        <textarea
          placeholder="متن نظر..."
          className="p-3 rounded bg-[#2a2b28] text-white h-28 outline-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          type="submit"
          className="bg-[#ffde91] cursor-pointer hover:bg-[#f5cf6d] text-black font-bold p-3 rounded transition"
        >
          ارسال نظر
        </button>
      </form>
    </div>
  );
}
