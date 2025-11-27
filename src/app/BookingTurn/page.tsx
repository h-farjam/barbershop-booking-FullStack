"use client";
import { Suspense } from "react";
import SlotsList from "../Components/BookingTurn";
import Spinner from "../Components/Spinner";





export default function Page() {
  return (
    <Suspense fallback={<Spinner/>}>
      <SlotsList />
    </Suspense>
  );
}
