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
}

export default RequestToBorrow;
