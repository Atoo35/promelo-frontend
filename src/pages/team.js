import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import TeamMemberCard from "../components/TeamMemberCard";

const teamMembers = [
  {
    name: "Jonny E",
    role: "CEO",
    description: "Co-Founder",
    image:
      "https://media.canva.com/1/image-resize/1/200_200_75_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9hWUNQay9NQUZudGRhWUNQay8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAABamacRLED5CldfOb2E7XRBNyqHAZjmPD4yQcNsm0us8&exp=1698583950&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAEPzy6RARMBtxYiV0ZnWgZ4z3dE7MjJJxpAwuCriCkwv",
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
    image:
      "https://media.canva.com/1/image-resize/1/150_200_75_JPG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9xNzBlWS9NQUZ5b3lxNzBlWS8xL3AuanBn?osig=AAAAAAAAAAAAAAAAAAAAACJP7NMf8hKfsl4jeV-jF7UwP7ULZXmYCHPGPn-uUP-D&exp=1698597531&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAAAMGIsyOIJnbbe5a4a7Pmj8EztBcE2-OunPRot8BvfA5",
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
