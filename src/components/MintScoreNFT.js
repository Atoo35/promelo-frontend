import { mintScoreNFT } from "../utils/web3"; // Assuming you've placed the web3 functions in a separate file

export default function MintScoreNFT() {
  const handleMint = async () => {
    await mintScoreNFT();
  };

  return (
    <div className="p-4 rounded shadow-md space-y-2">
      <h2 className="text-xl font-bold">Mint Credit Score SBT </h2>
      <button
        onClick={handleMint}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Mint
      </button>
    </div>
  );
}
