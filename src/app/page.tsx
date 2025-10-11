import Comment from "./Components/Comment";
import Footer from "./Components/Footer";
import HeroSection1 from "./Components/HeroSection1";
import HeroSection2 from "./Components/HeroSection2";
import HeroSection3 from "./Components/HeroSection3";
import HeroSection4 from "./Components/HeroSection4";

export default function Home() {
  return (
    <main className=" h-screen w-full flex flex-col justify-around items-start  bg-[url('/e800beba25f9d210776ddc693ba4ac8a00852ba0.jpg')] bg-cover bg-no-repeat ">
      <HeroSection1 />
      <HeroSection2/>
      <HeroSection3/>
      <HeroSection4/>
      <Comment/>
      <Footer/>
    </main>
  );
}
