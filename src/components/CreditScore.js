import { useEffect, useState } from 'react';
import { getCreditScore } from '../utils/web3.js'; // Assuming you've placed the web3 functions in a separate file

export default function CreditScore({ userAddress }) {
    const [score, setScore] = useState(null);

    useEffect(() => {
        const fetchScore = async () => {
            const userScore = await getCreditScore(userAddress);
            setScore(userScore);
        };

        fetchScore();
    }, [userAddress]);

    return (
        <div className="p-4 rounded shadow-md space-y-2">
            <h2 className="text-xl font-bold">Your Credit Score</h2>
            <p>{score}</p>
        </div>
    );
}
