import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TeamMemberCard from '../components/TeamMemberCard';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO',
        description: 'Founder of DCS',
        image: '/path/to/image.jpg'
    },
    // ... other team members
];
export default function Team() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-bold">Meet the Team</h1>
                <p>Our dedicated team behind DCS.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.map(member => (
                        <TeamMemberCard key={member.name} member={member} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
