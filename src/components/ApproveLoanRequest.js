// components/ApproveLoanRequest.js
import { approveLoanRequest } from "../utils/web3";

function ApproveLoanRequest() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const minter = e.target.minter.value;
        const tokenID = e.target.tokenID.value;
        const borrower = e.target.borrower.value;
        const fee = e.target.fee.value;
        const collateral = e.target.collateral.value;

        try {
            await approveLoanRequest(minter, tokenID, borrower, fee, collateral);
        } catch (error) {
            console.error("Error approving loan request:", error);
        }
    };

    return (
        <div>
            <h2>Approve Loan Request</h2>
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
                    Borrower Address:
                    <input type="text" name="borrower" required />
                </label>
                <label>
                    Fee Amount:
                    <input type="number" name="fee" required />
                </label>
                <label>
                    Collateral Amount:
                    <input type="number" name="collateral" required />
                </label>
                <button type="submit">Approve Request</button>
            </form>
        </div>
    );
}

export default ApproveLoanRequest;
