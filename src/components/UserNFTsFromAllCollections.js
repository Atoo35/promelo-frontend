import { useState, useEffect } from 'react';

function UserNFTsFromAllCollections({ userAddress, onOfferForLoan }) {
    const [userNFTs, setUserNFTs] = useState([]);

    useEffect(() => {
        const fetchUserNFTs = async () => {
            if (userAddress) {
                const API_KEY = 'a5e7ccbcfd754b1db68be9907aa25934'; // Replace with your actual API key
                const response = await fetch(`https://testnets-api.opensea.io/v2/chain/mumbai/account/${userAddress}/nfts`
                // , 
                // {
                //     headers: {
                //         'X-API-KEY': API_KEY
                //     }
                // }
                );
                const data = await response.json();
                console.log("data")
                console.log(data)
                setUserNFTs(data.assets);
            }
        };

        fetchUserNFTs();
    }, [userAddress]);

    const handleOfferForLoan = (contractAddress, tokenID) => {
        if (onOfferForLoan) {
            onOfferForLoan(contractAddress, tokenID);
        }
    };

    return (
        <div>
            <h2>Your NFTs from All Collections</h2>
            {userNFTs && userNFTs.length === 0 ? (
                <p>You don't have any NFTs.</p>
            ) : (
                <ul>
                    {userNFTs.map((nft) => (
                        <li key={nft.token_id}>
                            <img src={nft.image_url} alt={nft.name} width="100" />
                            <p>Name: {nft.name}</p>
                            <p>Contract Address: {nft.asset_contract.address}</p>
                            <p>Token ID: {nft.token_id}</p>
                            <button onClick={() => handleOfferForLoan(nft.asset_contract.address, nft.token_id)}>
                                Offer for Loan
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UserNFTsFromAllCollections;