// utils/generateIranSlots.ts
export function generateIranTimeSlots() {
  const slots = [];
  const timeZone = "Asia/Tehran";

  for (let hour = 10; hour < 22; hour += 2) {
    const start = new Date();
    start.setHours(hour, 0, 0, 0);
    const end = new Date();
    end.setHours(hour + 2, 0, 0, 0);

    const startStr = start.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });
    const endStr = end.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });

    slots.push(`${startStr} - ${endStr}`);
  }

  return slots;
}

export function getIranToday() {
  const iranDate = new Date().toLocaleDateString("fa-IR", {
    timeZone: "Asia/Tehran",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return iranDate;
}
