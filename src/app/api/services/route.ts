import { NextResponse } from "next/server";
import ConnectDB from "@/utils/ConnectDB";
import Service from "@/models/Service";

interface IService {
  _id: string;
  title: string;
  subtitle: string;
  img: string;
  price: string;
}

export async function GET(req: Request) {
  try {
    await ConnectDB();

    const { searchParams } = new URL(req.url);
    const filter = searchParams.get("filter") || "all";

    let services = await Service.find().select("-__v").lean<IService[]>();

    if (filter === "full") {
      services = services.filter((s) => s.title.includes("اصلاح کامل"));
    } else if (filter === "groom") {
      services = services.filter((s) => s.title.includes("دامادی"));
    } else if (filter === "skin") {
      services = services.filter((s) => s.title.includes("پاکسازی پوست"));
    }

    const ServiceData = services.map((s) => ({
      _id: s._id.toString(),
      title: s.title,
      subtitle: s.subtitle,
      img: s.img,
      price: s.price,
    }));

    return NextResponse.json({ success: true, data: ServiceData });
  } catch (error) {
    console.error("Error in /api/services:", error);
    return NextResponse.json(
      { success: false, message: "خطا در دریافت خدمات" },
      { status: 500 }
    );
  }
}
