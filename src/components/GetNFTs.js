import { useEffect, useState } from 'react';
import { getAllNfts } from '../utils/web3';
import NFTCard from './shared/NFTCard';

export default function GetNFTs () {
    const [nfts, setNfts] = useState([])
    // const fetchNFTs = async () => {
    //     const nfts = await getAllNfts()
    //     setNfts(nfts)
    // };
    useEffect(() => {
        const fetchNFTs = async () => {
            const nfts = await getAllNfts()
            setNfts(nfts)
        };
        fetchNFTs()
    }, [])

    return (
        <div className="p-4 rounded shadow-md space-y-2">
            <h2 className="text-xl font-bold">Your NFTS</h2>
            {/* <button onClick={fetchNFTs} className="bg-blue-600 text-white px-4 py-2 rounded">
                Get NFTs
            </button> */}
            <NFTCard nfts={nfts} marketplace={false} />
        </div>
    );
}
