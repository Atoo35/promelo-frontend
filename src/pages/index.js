import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

export default function Home () {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex grid-cols-2 flex-grow p-4">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">DeFi Credit Score</h1>
          <p className="text-2xl">Undercollateralized Borrowing.</p>
        </div>
        <div>
          <Image
            // src={logo}
            width={900}
            height={550}
            alt="logo"
          // className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
