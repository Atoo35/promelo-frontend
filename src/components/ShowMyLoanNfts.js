import { useEffect } from "react"
import { getMyLoanNFTs } from '../utils/web3'

export default function ShowMyLoanNfts () {
    useEffect(() => {
        const fetchLoanNFTs = async () => {
            const nfts = await getMyLoanNFTs()
            console.log(nfts)
        };
        fetchLoanNFTs()
    }, [])
    return (
        <div>
            <h2>My Loan NFTs</h2>
        </div>
    )
}