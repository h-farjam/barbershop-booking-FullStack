"use client";

import { Suspense } from "react";
import SlotsList from "../Components/BookingTurn";


export default function Page() {
  return (
    <Suspense fallback={<p>در حال بارگذاری...</p>}>
      <SlotsList />
    </Suspense>
  );
}
