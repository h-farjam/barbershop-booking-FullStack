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
    <div className="flex flex-col items-center gap-10 ">
      <div className="text-center  w-full p-5 text-white bg-[#373737]">
        <h1 className="text-2xl font-bold">صفحه خدمات</h1>
        <p className="text-lg mt-3">
          کاربر گرامی ({" "}
          <span className="text-blue-500 font-semibold">{token.Fname} {token.Lname}</span> )
          خوش اومدی ❤️
        </p>
      </div>
      <div>
        <Link href={"/"}>
          <FancyButton />
        </Link>
      </div>

      <ServicesList />
    </div>
  );
}
