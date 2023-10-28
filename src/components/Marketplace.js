import { useEffect, useState } from 'react';
import { _getAllNfts, loanContractAddress } from '../utils/web3';
import NFTCard from './shared/NFTCard';

export default function MarketPlace () {
    const [nfts, setNfts] = useState([])
    useEffect(() => {
        const fetchNFTs = async () => {
            const nfts = await _getAllNfts(loanContractAddress)
            setNfts(nfts)
        };
        fetchNFTs()
    }, [])

    return (
        <div className="p-4 rounded shadow-md space-y-2">
            <h2 className="text-xl font-bold">MarketPlace</h2>
            <NFTCard nfts={nfts} marketplace={true} />
        </div>
    );
}
