// app/api/importServices/route.ts
import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import Service from "@/models/Service";

const servicesData = [
  {
    title: "اصلاح صورت",
    subtitle: "اصلاح حرفه ای صورت با جدید ترین روش ها",
    img: "https://example.com/face.jpg",
    price: 100,
  },
  {
    title: "پاکسازی پوست",
    subtitle: "پاکسازی با بهترین مواد داخل بازار",
    img: "https://example.com/skin.jpg",
    price: 700,
  },
  {
    title: "پکیج دامادی VIP",
    subtitle: "پاکسازی با بهترین مواد داخل بازار",
    img: "https://example.com/vip.jpg",
    price: 3,
  },

  {
    title: "اصلاح کامل سر و صورت",
    subtitle: "اصلاح کامل همراه باحالت دهی",
    img: "https://example.com/full.jpg",
    price: 230,
  },
];

export async function POST() {
  try {
    await ConnectDB(); // اتصال به دیتابیس لیارا

    // اگر می‌خوای ابتدا کالکشن خالی شود
    await Service.deleteMany({});

    // درج همه سرویس‌ها
    await Service.insertMany(servicesData);

    return NextResponse.json(
      { message: "Services imported!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Import Services Error:", error);
    return NextResponse.json(
      { message: "خطا در وارد کردن سرویس‌ها" },
      { status: 500 }
    );
  }
}
