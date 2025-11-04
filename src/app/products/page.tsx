import { ValidateToken } from "@/utils/validationToken";
import { redirect } from "next/navigation";

export default async function Page() {
  const token = await ValidateToken();

  // اگر توکن معتبر نبود، به صفحه ورود بره
  if (!token) {
    redirect("/login");
  }

  return <div>Dashboard Page</div>;
}
