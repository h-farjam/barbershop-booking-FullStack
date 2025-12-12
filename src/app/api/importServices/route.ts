import ConnectDB from "@/utils/ConnectDB";
import Service from "@/models/Service";

const servicesData = [
  {
    title: "اصلاح صورت",
    subtitle: "اصلاح حرفه ای صورت با جدید ترین روش ها",
    img: "https://cdn11.bigcommerce.com/s-h7l2pcerei/product_images/uploaded_ima…",
    price: "100 هزار",
  },
  {
    title: "پاکسازی پوست",
    subtitle: "پاکسازی با بهترین مواد داخل بازار",
    img: "https://i-media.vyaparify.com/vcards/products/10374/images-(54).jpeg",
    price: "700 هزار",
  },
  {
    title: "پکیج دامادی VIP",
    subtitle: "پاکسازی با بهترین مواد داخل بازار",
    img: "https://damadbarber.com/wp-content/uploads/2020/06/img_3989-833x1024.j…",
    price: "3 میلیون",
  },
  {
    title: "اصلاح کامل سر و صورت",
    subtitle: "اصلاح کامل همراه باحالت دهی",
    img: "https://cafeegraphic.com/wp-content/uploads/edd/2025/07/Barbershop-pho…",
    price: "230 هزار",
  },
];

export async function POST() {
  await ConnectDB();
  await Service.deleteMany({}); // اگر میخوای ابتدا خالی شود
  await Service.insertMany(servicesData);
  return new Response(JSON.stringify({ message: "Services imported!" }), {
    status: 200,
  });
}
