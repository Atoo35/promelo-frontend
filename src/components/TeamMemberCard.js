export default function TeamMemberCard({ member }) {
    return (
        <div className="bg-white p-4 rounded shadow-md space-y-2">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto"/>
            <h2 className="text-xl font-bold text-center">{member.name}</h2>
            <p className="text-center">{member.role}</p>
            <p className="text-center text-gray-500">{member.description}</p>
        </div>
    );
}
