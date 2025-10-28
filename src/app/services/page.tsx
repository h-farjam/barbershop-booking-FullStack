import React from "react";
import { redirect } from "next/navigation";
import { ValidateToken } from "@/utils/validationToken";
import ConnectDB from "@/utils/ConnectDB";
import Service from "@/models/Service";
import ServicesList from "../Components/ServicesList";

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
    <div className="flex flex-col items-center gap-10 py-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">صفحه خدمات</h1>
        <p className="text-lg mt-3">
          خوش اومدی{" "}
          <span className="text-green-500 font-semibold">{token.Fname}</span>{" "}
          عزیز ❤️
        </p>
      </div>

      <ServicesList />
    </div>
  );
}
