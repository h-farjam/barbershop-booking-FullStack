import ReservationTable from "@/app/Components/ReservationTable";
import { ValidateToken } from "@/utils/validationToken";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  const token = await ValidateToken();
  if (token?.phone !== "09125733402") {
    redirect("/");
  }
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">
        داشبورد مدیریت رزروها
      </h1>
      <ReservationTable />
    </div>
  );
}
