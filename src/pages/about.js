import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";

import pic1 from "../../public/assets/1.png";
import pic2 from "../../public/assets/2.png";
import pic3 from "../../public/assets/3.png";
import pic4 from "../../public/assets/4.png";
import pic5 from "../../public/assets/5.png";
import pic6 from "../../public/assets/6.png";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold">About Promelo</h1>
        <p>
          Promelo is revolutionizing the credit score industry by decentralizing
          it.
        </p>
        <div className="flex flex-col gap-2 p-4">
          <Image
            src={pic6}
            width={700}
            height={2400}
            alt="logo"
            // className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
