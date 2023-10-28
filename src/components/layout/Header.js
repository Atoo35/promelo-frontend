import Link from "next/link";

export default function Header() {
  return (
    <header className="p-10 bg-black text-white">
      <div className="grid  grid-cols-3 px-4">
        <Link href="/">
          <a className="text-6xl font-bold">Promelo</a>
        </Link>
        <nav className="grid grid-cols-2 items-center">
          <Link href="/about">
            <a className="flex justify-center text-2xl font-bold">About</a>
          </Link>
          <Link href="/team">
            <a className="flex justify-center text-2xl font-bold ">Team</a>
          </Link>
        </nav>
        <nav className="flex justify-end items-center">
          <Link href="/dapp">
            <a className=" text-3xl font-bold">Launch App</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
