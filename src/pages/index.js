import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-bold">Welcome to DCS</h1>
                <p>Decentralized Credit Scores for the future.</p>
            </main>
            <Footer />
        </div>
    );
}
