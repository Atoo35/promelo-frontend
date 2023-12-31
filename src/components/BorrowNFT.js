// components/BorrowNFT.js
import { borrowNFT } from "../utils/web3";

function BorrowNFT() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const minter = e.target.minter.value;
    const tokenID = e.target.tokenID.value;
    const value = e.target.value.value;

    try {
      await borrowNFT(minter, tokenID, value);
    } catch (error) {
      console.error("Error borrowing NFT:", error);
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
        <label>
          Value in Matic:
          <input type="text" name="value" required />
        </label>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Borrow
        </button>
      </form>
    </div>
  );
}

export default BorrowNFT;
