import Link from "next/link";
import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";

function Navbar() {
  return (
    <nav className=" absolute w-full flex justify-between items-center p-4">
      <div className="flex justify-center items-center">
        <img className="scale-90" src="/icon scissors.png" alt="" />
        <p className="font-bold text-[#f8cc7f]">Amir Mohammad</p>
      </div>

      <div className="text-white border-l shadow border-t flex justify-center items-center  backdrop-blur-xl p-4 rounded-3xl font-semibold">
        <ul className="flex gap-8">
          <Link href={"/"}>صفحه اصلی </Link>
          <Link href={"/products"}>محصولات پوستی</Link>
          <Link href={"/services"}>خدمات</Link>
          <Link href={"/contactus"}>تماس با ما</Link>
          <Link href={"/about"}>درباره ما </Link>
        </ul>
      </div>

      <div className="text-white flex justify-center items-center gap-4 font-semibold">
        <span className="border p-2 rounded-full"><Link href={'/'}><BiLogoTelegram size={'25px'}/></Link></span>
        <span className="border p-2 rounded-full"><Link href={'/'}><IoLogoInstagram size={'25px'}/></Link></span>
        <Link href={"/services"}>
          <p className="w-[184px] flex justify-center items-center rounded-4xl h-[48px] border border-[#f8cc7f]">
            رزرو نوبت{" "}
          </p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
