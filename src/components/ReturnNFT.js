// components/ReturnNFT.js
import { returnNFT } from "../utils/web3";

function ReturnNFT() {
<<<<<<< HEAD
  const handleSubmit = async (e) => {
    e.preventDefault();
    const minter = e.target.minter.value;
    const tokenID = e.target.tokenID.value;

    try {
      await returnNFT(minter, tokenID);
    } catch (error) {
      console.error("Error returning NFT:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Minter Address:
          <input type="text" name="minter" required />
        </label>
        <label>
          Token ID:
          <input type="text" name="tokenID" required />
        </label>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Return
        </button>
      </form>
    </div>
  );
=======
    const handleSubmit = async (e) => {
        e.preventDefault();
        const minter = e.target.minter.value;
        const tokenID = e.target.tokenID.value;

        try {
            await returnNFT(minter, tokenID);
        } catch (error) {
            console.error("Error returning NFT:", error);
        }
    };

    return (
        <div>
            <h2>Return NFT</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Minter Address:
                    <input type="text" name="minter" required />
                </label>
                <label>
                    Token ID:
                    <input type="text" name="tokenID" required />
                </label>
                <button type="submit">Return</button>
            </form>
        </div>
    );
>>>>>>> origin/main
}

export default ReturnNFT;
