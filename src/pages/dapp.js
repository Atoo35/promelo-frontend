import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ConnectWallet from "../components/ConnectWallet";
import CreditScore from "../components/CreditScore";
import MintScoreNFT from "../components/MintScoreNFT";
import OfferNFTForLoan from "../components/OfferNFTForLoan";
import RequestToBorrow from "../components/RequestToBorrow";
import ApproveLoanRequest from "../components/ApproveLoanRequest";
import BorrowNFT from "../components/BorrowNFT";
import ReturnNFT from "../components/ReturnNFT";
import ClaimCollateral from "../components/ClaimCollateral";
import UserNFTsFromAllCollections from "../components/UserNFTsFromAllCollections";
import { offerNFTForLoaning, scoreContract } from "../utils/web3";

export default function Dapp() {
  const [userAddress, setUserAddress] = useState(null);
  const [hasScoreNFT, setHasScoreNFT] = useState(false);
  const [showMintScoreNFT, setShowMintScoreNFT] = useState(false);
  const [showOfferNFTForLoan, setShowOfferNFTForLoan] = useState(false);
  const [showRequestToBorrow, setShowRequestToBorrow] = useState(false);
  const [showApproveLoanRequest, setShowApproveLoanRequest] = useState(false);
  const [showBorrowNFT, setShowBorrowNFT] = useState(false);
  const [showReturnNFT, setShowReturnNFT] = useState(false);
  const [showClaimCollateral, setShowClaimCollateral] = useState(false);

  useEffect(() => {
    const checkNFTOwnership = async () => {
      if (userAddress) {
        const balance = await scoreContract.methods
          .balanceOf(userAddress)
          .call();
        if (balance > 0) {
          setHasScoreNFT(true);
        }
      }
    };

    checkNFTOwnership();
  }, [userAddress]);

  const handleOfferForLoan = async (contractAddress, tokenID) => {
    try {
      await offerNFTForLoaning(contractAddress, tokenID, userAddress);
      alert("NFT offered for loan successfully!");
    } catch (error) {
      console.error("Error offering NFT for loan:", error);
      alert("Failed to offer NFT for loan.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {!userAddress ? (
        <div className="flex flex-grow justify-center items-center">
          <ConnectWallet onConnect={setUserAddress} />
        </div>
      ) : (
        <div className="flex-grow p-4 space-y-6">
          <CreditScore userAddress={userAddress} />
          <hr />
          {!hasScoreNFT && (
            <div>
              <button onClick={() => setShowMintScoreNFT(!showMintScoreNFT)}>
                Mint NFT
              </button>
              {showMintScoreNFT && <MintScoreNFT userAddress={userAddress} />}
            </div>
          )}
          {/* <UserNFTsFromAllCollections userAddress={userAddress} onOfferForLoan={handleOfferForLoan} /> */}
          <div>
            <button
              onClick={() => setShowOfferNFTForLoan(!showOfferNFTForLoan)}
            >
              Offer NFT For Loan
            </button>
            {showOfferNFTForLoan && <OfferNFTForLoan />}
          </div>
          <div>
            <button
              onClick={() => setShowRequestToBorrow(!showRequestToBorrow)}
            >
              Request To Borrow
            </button>
            {showRequestToBorrow && <RequestToBorrow />}
          </div>
          <div>
            <button
              onClick={() => setShowApproveLoanRequest(!showApproveLoanRequest)}
            >
              Approve Loan Request
            </button>
            {showApproveLoanRequest && <ApproveLoanRequest />}
          </div>
          <div>
            <button onClick={() => setShowBorrowNFT(!showBorrowNFT)}>
              Borrow NFT
            </button>
            {showBorrowNFT && <BorrowNFT />}
          </div>
          <div>
            <button onClick={() => setShowReturnNFT(!showReturnNFT)}>
              Return NFT
            </button>
            {showReturnNFT && <ReturnNFT />}
          </div>
          <div>
            <button
              onClick={() => setShowClaimCollateral(!showClaimCollateral)}
            >
              Claim Collateral
            </button>
            {showClaimCollateral && <ClaimCollateral />}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
