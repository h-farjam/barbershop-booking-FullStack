// app/api/importServices/route.ts
import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import Service from "@/models/Service";


const servicesData = [
  {
    title: "اصلاح صورت",
    subtitle: "اصلاح حرفه ای صورت با جدید ترین روش ها",
    img: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_images/trimming-beard.jpg",
    price: 100,
  },
  {
    title: "پاکسازی پوست",
    subtitle: "پاکسازی با بهترین مواد داخل بازار",
    img: "https://i-media.vyaparify.com/vcards/products/10374/images-(54).jpeg",
    price: 700,
  },
  {
    title: "پکیج دامادی VIP",
    subtitle: "پاکسازی با بهترین مواد داخل بازار",
    img: "https://damadbarber.com/wp-content/uploads/2020/06/img_3989-833x1024.jpg",
    price: 3,
  },
  
  {
    title: "اصلاح کامل سر و صورت",
    subtitle: "اصلاح کامل همراه باحالت دهی",
    img: "https://cafeegraphic.com/wp-content/uploads/edd/2025/07/Barbershop-photo-041135414-Cafeegraphic.com_.jpg",
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

    return NextResponse.json({ message: "Services imported!" }, { status: 200 });
  } catch (error) {
    console.error("Import Services Error:", error);
    return NextResponse.json(
      { message: "خطا در وارد کردن سرویس‌ها" },
      { status: 500 }
    );
  }
}
