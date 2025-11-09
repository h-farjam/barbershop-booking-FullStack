import ReservationTable from "@/app/Components/ReservationTable";

export default function AdminDashboardPage() {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">
        داشبورد مدیریت رزروها
      </h1>
      <ReservationTable />
    </div>
  );
}
