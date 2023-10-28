import { approveLoanContract, loanContractAddress } from '../../utils/web3';
import { useState } from 'react';

export default function NFTCard ({ nfts }) {
    const [time, setTime] = useState(0)
    const loanNFT = async (contractAddress, tokenID) => {
        await approveLoanContract(contractAddress, loanContractAddress, tokenID, time.toString())
    }
    return (
        <div class="bg-white">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {nfts.map((nft) => (
                        <div>
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-7 xl:aspect-w-6">
                                <img src={nft.media[0]?.thumbnail} alt={nft.title} class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div class="mt-4 flex justify-between">
                                <div>
                                    <h3 class="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                            {nft.title} #{nft.tokenId}
                                        </a>
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-500">{nft.description}</p>
                                    <p class="mt-1 text-sm text-gray-500">Contract address: {`${nft.contract.address.slice(0, 4)}...${nft.contract.address.slice(nft.contract.address.length - 4, nft.contract.address)}`}</p>
                                    <input type="number" name="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder='Time to loan (seconds)' />
                                    <button
                                        onClick={() => { loanNFT(nft.contract.address, nft.tokenId) }}
                                        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                        Approve
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}