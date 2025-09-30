import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="absolute w-full flex justify-between items-center p-4">
      <div>
        <img src="/Frame 3.svg" alt="Logo" className="h-10 scale-150 mr-10" />
      </div>

      <div className="text-white border  backdrop-blur-xl p-4 rounded-3xl font-semibold">
        <ul className="flex gap-4">
          <Link href={"/"}>صفحه اصلی </Link>
          <Link href={"/products"}>محصولات پوستی</Link>
          <Link href={"/services"}>خدمات</Link>
          <Link href={"/contactus"}>تماس با ما</Link>
          <Link href={"/about"}>درباره ما </Link>
        </ul>
      </div>

      <div className="text-white font-semibold">Left Menu</div>
    </nav>
  );
}

export default Navbar;
