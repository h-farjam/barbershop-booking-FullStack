import React from "react";
import { redirect } from "next/navigation";
import { ValidateToken } from "@/utils/validationToken";

export default async function Services() {
  const token = await ValidateToken();
  if (!token) {
    redirect("/login");
  }

  return (
    <div className="flex justify-center gap-5 items-center flex-col">
      <h1 className="text-2xl">صفحه خدمات</h1>
      <p className="text-2xl">
        سلام خوش اومدی <span className="text-green-500">{token.Fname}</span>{" "}
        عزیز خوشحالیم که مارو انتخاب کردی
      </p>
    </div>
  );
}
