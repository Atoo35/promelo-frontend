// components/RequestToBorrow.js
import { requestToBorrow } from "../utils/web3";

function RequestToBorrow() {
<<<<<<< HEAD
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
=======
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
            <h2>Request to Borrow NFT</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Minter Address:
                    <input type="text" name="minter" required />
                </label>
                <label>
                    Token ID:
                    <input type="text" name="tokenID" required />
                </label>
                <button type="submit">Request Borrow</button>
            </form>
        </div>
    );
>>>>>>> origin/main
}

export default RequestToBorrow;
