import HeroSection1 from "./Components/HeroSection1";
import HeroSection2 from "./Components/HeroSection2";

export default function Home() {
  return (
    <main className=" h-screen w-full flex flex-col justify-around items-start  bg-[url('/vecteezy_modern-barbershop-interior-with-mirrors-chair-and-other_26579361.jpg')] bg-cover bg-no-repeat ">
      <HeroSection1 />
      <HeroSection2/>
    </main>
  );
}
