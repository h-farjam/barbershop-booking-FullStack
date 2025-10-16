"use client";

import { useState } from "react";

export default function LoginTestPage() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("در حال ارسال...");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
        credentials: "include", // 👈 بسیار مهم برای کوکی
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(`❌ خطا: ${data.message}`);
        return;
      }

      setMessage(`✅ ${data.message}`);
    } catch (err) {
      console.error(err);
      setMessage("❌ خطا در ارتباط با سرور");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 bg-gray-100">
      <h1 className="text-2xl font-bold">تست لاگین و کوکی</h1>

      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="شماره موبایل (مثلاً 09123456789)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          ورود
        </button>
      </form>

      {message && (
        <p
          className={`text-sm ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
