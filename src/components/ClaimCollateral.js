// components/ClaimCollateral.js
import { claimCollateral } from "../utils/web3";

function ClaimCollateral() {
<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tokenId = e.target.tokenId.value;

    try {
      await claimCollateral(tokenId);
    } catch (error) {
      console.error("Error claiming collateral:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Loan Token ID:
          <input type="text" name="tokenId" required />
        </label>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Claim
        </button>
      </form>
    </div>
  );
=======
    const handleSubmit = async (e) => {
        e.preventDefault();
        const tokenId = e.target.tokenId.value;

        try {
            await claimCollateral(tokenId);
        } catch (error) {
            console.error("Error claiming collateral:", error);
        }
    };

    return (
        <div>
            <h2>Claim Collateral</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Loan Token ID:
                    <input type="text" name="tokenId" required />
                </label>
                <button type="submit">Claim</button>
            </form>
        </div>
    );
>>>>>>> origin/main
}

export default ClaimCollateral;
