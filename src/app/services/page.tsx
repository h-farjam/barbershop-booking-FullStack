export const dynamic = "force-dynamic";

import React from "react";
import { redirect } from "next/navigation";
import { ValidateToken } from "@/utils/validationToken";
import ConnectDB from "@/utils/ConnectDB";
import ServicesList from "../Components/ServicesList";
import Link from "next/link";
import FancyButton from "../Components/Button";

export interface IService {
  _id: string;
  title: string;
  subtitle: string;
  img: string;
  price: string;
}

export default async function ServicesPage() {
  await ConnectDB();

  const token = await ValidateToken();
  if (!token) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col  items-center gap-10 ">
      <div className="text-center  w-full py-5 lg:pr-60 text-white">
        <h1 className="text- text-gray-500 font-bold">صفحه خدمات</h1>
        <p className="text-lg text-gray-500 mt-3">
          کاربر گرامی ({" "}
          <span className="text-blue-500 font-semibold">
            {token.Fname} {token.Lname}
          </span>{" "}
          ) خوش اومدی ❤️
        </p>
      </div>

      <ServicesList />
    </div>
  );
}
