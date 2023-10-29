// components/RequestToBorrow.js
import { requestToBorrow } from "../utils/web3";

function RequestToBorrow() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const minter = e.target.minter.value;
    const tokenID = e.target.tokenID.value;

    try {
      await requestToBorrow(minter, tokenID);
    } catch (error) {
      console.error("Error requesting to borrow NFT:", error);
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
          Request Borrow
        </button>
      </form>
    </div>
  );
}

export default RequestToBorrow;
