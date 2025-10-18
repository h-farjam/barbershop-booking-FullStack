import { ValidateToken } from "@/utils/validationToken";
import Comment from "./Components/Comment";
import Footer from "./Components/Footer";
import HeroSection1 from "./Components/HeroSection1";
import HeroSection2 from "./Components/HeroSection2";
import HeroSection3 from "./Components/HeroSection3";
import HeroSection4 from "./Components/HeroSection4";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="relative h-screen w-full flex flex-col justify-around items-start">
      <Navbar/>
      <div className="absolute inset-0 bg-[url('/e800beba25f9d210776ddc693ba4ac8a00852ba0.jpg')] bg-cover bg-no-repeat z-0" />

      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 w-full">
        <HeroSection1 />
        <HeroSection2 />
        <HeroSection3 />
        <HeroSection4 />
        <Comment />
        <Footer />
      </div>
    </main>
  );
}
