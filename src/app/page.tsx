import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="relative h-screen  flex bg-[url('/e800beba25f9d210776ddc693ba4ac8a00852ba0.jpg')] bg-center bg-cover">
      <Navbar />
      <section className="flex-1 flex justify-center items-center">
        Hero Content
      </section>
    </main>
  );
}
