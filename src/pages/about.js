import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-bold">About DCS</h1>
                <p>DCS is revolutionizing the credit score industry by decentralizing it.</p>
            </main>
            <Footer />
        </div>
    );
}
