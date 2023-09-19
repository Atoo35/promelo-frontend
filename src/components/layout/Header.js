import Link from 'next/link';

export default function Header() {
    return (
        <header className="p-4 bg-blue-600 text-white">
            <div className="container mx-auto">
                <Link href="/">
                    <a className="text-2xl font-bold">DCS</a>
                </Link>
                <nav className="space-x-4">
                    <Link href="/about">About</Link>
                    <Link href="/team">Team</Link>
                    <Link href="/dapp">Dapp</Link>
                </nav>
            </div>
        </header>
    );
}
