import Web3 from 'web3';
import LoanABI from "./ABIs/LoanNFT.json"
import ScoreABI from "./ABIs/ScoreNFT.json"

const loanContractAddress = '0x7A2c773039F462779FeEfD9EfB885d5FdfdEd8be';
const scoreContractAddress = '0xEE92130D279037BBa28b4C8d842D3Ee74bD3d587';

// Initialize Web3 with a provider (e.g., MetaMask, Infura, etc.)
const web3 = new Web3(Web3.givenProvider || "https://polygon-mumbai.g.alchemy.com/v2/VLWsZk9tKHgYfF5kuBLPsq29N1nzAMLu");

const loanContract = new web3.eth.Contract(LoanABI, loanContractAddress);
const scoreContract = new web3.eth.Contract(ScoreABI, scoreContractAddress);

const getCreditScore = async(userAddress) => {
    try {
        const score = await scoreContract.methods.calculateScore(userAddress).call();
        return score;
    } catch (error) {
        console.error("Error fetching credit score:", error);
    }
};

const mintScoreNFT = async() => {
    const accounts = await web3.eth.getAccounts();
    try {
        await scoreContract.methods.mintNFT().send({
            from: accounts[0],
            value: web3.utils.toWei('0.2', 'ether')
        });
    } catch (error) {
        console.error("Error minting NFT:", error);
    }
};

const offerNFTForLoaning = async(minter, tokenID, time) => {
    const accounts = await web3.eth.getAccounts();
    const nftContract = new web3.eth.Contract(LoanABI, minter); // Assuming the NFT has the same ABI as the loan contract

    try {
        // Approve the loan contract to spend the NFT
        await nftContract.methods.approve(loanContractAddress, tokenID).send({ from: accounts[0] });

        // Offer the NFT for loaning
        await loanContract.methods.offerNFTForLoaning(minter, tokenID, time).send({ from: accounts[0] });
    } catch (error) {
        console.error("Error offering NFT for loan:", error);
    }
};

const requestToBorrow = async(minter, tokenID) => {
    const accounts = await web3.eth.getAccounts();
    try {
        await loanContract.methods.requestToBorrow(minter, tokenID).send({ from: accounts[0] });
    } catch (error) {
        console.error("Error requesting to borrow NFT:", error);
    }
};

const approveLoanRequest = async(minter, tokenID, borrower, fee, collateral) => {
    const accounts = await web3.eth.getAccounts();
    try {
        await loanContract.methods.approveLoanRequest(minter, tokenID, borrower, web3.utils.toWei(fee.toString(), 'ether'), web3.utils.toWei(collateral.toString(), 'ether')).send({ from: accounts[0] });
    } catch (error) {
        console.error("Error approving loan request:", error);
    }
};

const borrowNFT = async(minter, tokenID, value) => {
    const accounts = await web3.eth.getAccounts();
    try {
        
        await loanContract.methods.borrowNFT(minter, tokenID).send({ from: accounts[0], value: web3.utils.toWei(value.toString(), 'ether') });
    } catch (error) {
        console.error("Error borrowing NFT:", error);
    }
};

const returnNFT = async(minter, tokenID) => {
    const accounts = await web3.eth.getAccounts();
    const nftContract = new web3.eth.Contract(LoanABI, minter); // Assuming the NFT has the same ABI as the loan contract

    try {
        // Approve the loan contract to spend the NFT
        await nftContract.methods.approve(loanContractAddress, tokenID).send({ from: accounts[0] });

        // Return the NFT
        await loanContract.methods.returnNFT(minter, tokenID).send({ from: accounts[0] });
    } catch (error) {
        console.error("Error returning NFT:", error);
    }
};

const claimCollateral = async(tokenId) => {
    const accounts = await web3.eth.getAccounts();
    try {
        await loanContract.methods.claimCollateral(tokenId).send({ from: accounts[0] });
    } catch (error) {
        console.error("Error claiming collateral:", error);
    }
};

async function getLendersActiveTokens(address) {
    try {
        const tokens = await loanContract.methods.lendersActiveTokens(address).call();
        console.log(tokens);
        return tokens;
    } catch (error) {
        console.error('Error fetching lendersActiveTokens:', error);
    }
}

async function fetchAmountToPay(minter, tokenID, query) {
    try {
        const result = await loanContract.methods.getAmountToPay(minter, tokenID, query).call();
        console.log('Fee Amount:', result.feeAmount);
        console.log('Collateral Amount:', result.collateralAmount);
        return result;
    } catch (error) {
        console.error('Error fetching getAmountToPay:', error);
    }
}

module.exports = {
    getCreditScore,
    mintScoreNFT,
    offerNFTForLoaning,
    requestToBorrow,
    approveLoanRequest,
    borrowNFT,
    returnNFT,
    claimCollateral,
    getLendersActiveTokens,
    fetchAmountToPay,
    scoreContract
}