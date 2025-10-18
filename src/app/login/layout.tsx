import type { ReactNode } from "react";
import { Vazirmatn } from "next/font/google";
import Link from "next/link";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  weight: ["200"],
  variable: "--font-vazirmatn",
});

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${vazirmatn.className} antialiased flex justify-center items-center pt-20 px-10 md:px-3 `}>{children}</div>
  );
}
