// components/OfferNFTForLoan.js
import {offerNFTForLoaning} from "../utils/web3"
function OfferNFTForLoan() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const minter = e.target.minter.value;
        const tokenID = e.target.tokenID.value;
        const timeInHours = e.target.time.value;
        const timeInSeconds = timeInHours * 3600; // Convert hours to seconds

        // Call the smart contract function to offer the NFT for loan
        try {
            await offerNFTForLoaning(minter, tokenID, timeInSeconds);
        } catch (error) {
            console.error("Error offering NFT for loan:", error);
        }
    };

    return (
        <div>
            <h2>Offer NFT for Loan</h2>
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
                    Loan Duration (in hours):
                    <input type="number" name="time" required />
                </label>
                <button type="submit">Offer NFT</button>
            </form>
        </div>
    );
}

export default OfferNFTForLoan;
