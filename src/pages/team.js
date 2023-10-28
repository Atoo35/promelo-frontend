import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TeamMemberCard from "../components/TeamMemberCard";

const teamMembers = [
  {
    name: "Jonny E",
    role: "CEO",
    description: "Co-Founder",
    image: "/path/to/image.jpg",
  },
  {
    name: "Raid Ateir",
    role: "CTO",
    description: "Co-Founder",
    image: "/path/to/image.jpg",
  },
  {
    name: "Atharva Deshpande",
    role: "CMO",
    description: "Co-Founder",
    image: "/path/to/image.jpg",
  },
  {
    name: "Yury R",
    role: "COO",
    description: "Co-Founder",
    image: "/path/to/image.jpg",
  },
  // ... other team members
];
export default function Team() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h1 className="flex justify-center text-3xl font-bold p-4">
          Meet the Team
        </h1>
        {/* <p>Our dedicated team behind DCS.</p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
