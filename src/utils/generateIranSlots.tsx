// utils/generateIranSlots.ts

export function generateIranTimeSlots() {
  const slots: string[] = [];

  const startHour = 10; // شروع: 10 صبح
  const endHour = 22;   // پایان: 10 شب
  const duration = 40;  // فاصله هر اسلات: 40 دقیقه

  const start = startHour * 60;
  const end = endHour * 60;

  for (let m = start; m < end; m += duration) {
    const h = Math.floor(m / 60);
    const min = m % 60;

    const hh = String(h).padStart(2, "0");
    const mm = String(min).padStart(2, "0");

    slots.push(`${hh}:${mm}`);
  }

  return slots;
}

export function getIranToday() {
  const now = new Date();
  const iranTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Tehran" })
  );

  const formatted = iranTime.toLocaleDateString("fa-IR", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const iso = iranTime.toISOString().split("T")[0];

  return { iso, formatted };
}
