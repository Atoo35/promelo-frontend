import Web3 from 'web3';
import LoanABI from "./ABIs/LoanNFT.json"
import ScoreABI from "./ABIs/ScoreNFT.json"
<<<<<<< HEAD
=======
import ApproveABI from "./ABIs/approve.json"
import { Alchemy, Network } from "alchemy-sdk";

const config = {
    apiKey: "TOGfIOTVPJAICPTfyVLMGSXhXuYtp886",
    network: Network.MATIC_MUMBAI,
};
const alchemy = new Alchemy(config);

>>>>>>> origin/main

const loanContractAddress = '0x7A2c773039F462779FeEfD9EfB885d5FdfdEd8be';
const scoreContractAddress = '0xEE92130D279037BBa28b4C8d842D3Ee74bD3d587';

// Initialize Web3 with a provider (e.g., MetaMask, Infura, etc.)
const web3 = new Web3(Web3.givenProvider || "https://polygon-mumbai.g.alchemy.com/v2/VLWsZk9tKHgYfF5kuBLPsq29N1nzAMLu");

const loanContract = new web3.eth.Contract(LoanABI, loanContractAddress);
const scoreContract = new web3.eth.Contract(ScoreABI, scoreContractAddress);

<<<<<<< HEAD
const getCreditScore = async(userAddress) => {
=======
const approveLoanContract = async (contractAddress, to, tokenId, time) => {
    const accounts = await web3.eth.getAccounts();
    const nftContract = new web3.eth.Contract(ApproveABI, contractAddress); // Assuming the NFT has the same ABI as the loan contract

    try {
        await nftContract.methods.approve(to, tokenId).send({ from: accounts[0] });
        await loanContract.methods.offerNFTForLoaning(contractAddress, tokenId, time).send({ from: accounts[0] });
    } catch (error) {
        console.error("Error approving loan contract:", error);
    }
}

const getMyLoanNFTs = async () => {
    const [address] = await web3.eth.getAccounts();
    return await loanContract.methods.lendersActiveTokens(address).call();
}

const _getAllNfts = async (address) => {
    // Get all NFTs
    const nfts = await alchemy.nft.getNftsForOwner(address);

    // Parse output
    const numNfts = nfts["totalCount"];
    const nftList = nfts["ownedNfts"];
    console.log(nftList)

    console.log(`Total NFTs owned by ${address}: ${numNfts} \n`);

    let i = 1;

    for (let nft of nftList) {
        console.log(`${i}. ${nft.title}`);
        i++;
    }
    return nftList;
}

const getAllNfts = async () => {
    const [address] = await web3.eth.getAccounts();

    return await _getAllNfts(address);
}

const getCreditScore = async (userAddress) => {
>>>>>>> origin/main
    try {
        const score = await scoreContract.methods.calculateScore(userAddress).call();
        return score;
    } catch (error) {
        console.error("Error fetching credit score:", error);
    }
};

<<<<<<< HEAD
const mintScoreNFT = async() => {
=======
const mintScoreNFT = async () => {
>>>>>>> origin/main
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

<<<<<<< HEAD
const offerNFTForLoaning = async(minter, tokenID, time) => {
=======
const offerNFTForLoaning = async (minter, tokenID, time) => {
>>>>>>> origin/main
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

<<<<<<< HEAD
const requestToBorrow = async(minter, tokenID) => {
=======
const requestToBorrow = async (minter, tokenID) => {
>>>>>>> origin/main
    const accounts = await web3.eth.getAccounts();
    try {
        await loanContract.methods.requestToBorrow(minter, tokenID).send({ from: accounts[0] });
    } catch (error) {
        console.error("Error requesting to borrow NFT:", error);
    }
};

<<<<<<< HEAD
const approveLoanRequest = async(minter, tokenID, borrower, fee, collateral) => {
=======
const approveLoanRequest = async (minter, tokenID, borrower, fee, collateral) => {
>>>>>>> origin/main
    const accounts = await web3.eth.getAccounts();
    try {
        await loanContract.methods.approveLoanRequest(minter, tokenID, borrower, web3.utils.toWei(fee.toString(), 'ether'), web3.utils.toWei(collateral.toString(), 'ether')).send({ from: accounts[0] });
    } catch (error) {
        console.error("Error approving loan request:", error);
    }
};

<<<<<<< HEAD
const borrowNFT = async(minter, tokenID, value) => {
    const accounts = await web3.eth.getAccounts();
    try {
        
=======
const borrowNFT = async (minter, tokenID, value) => {
    const accounts = await web3.eth.getAccounts();
    try {

>>>>>>> origin/main
        await loanContract.methods.borrowNFT(minter, tokenID).send({ from: accounts[0], value: web3.utils.toWei(value.toString(), 'ether') });
    } catch (error) {
        console.error("Error borrowing NFT:", error);
    }
};

<<<<<<< HEAD
const returnNFT = async(minter, tokenID) => {
=======
const returnNFT = async (minter, tokenID) => {
>>>>>>> origin/main
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

<<<<<<< HEAD
const claimCollateral = async(tokenId) => {
=======
const claimCollateral = async (tokenId) => {
>>>>>>> origin/main
    const accounts = await web3.eth.getAccounts();
    try {
        await loanContract.methods.claimCollateral(tokenId).send({ from: accounts[0] });
    } catch (error) {
        console.error("Error claiming collateral:", error);
    }
};

<<<<<<< HEAD
async function getLendersActiveTokens(address) {
=======
async function getLendersActiveTokens (address) {
>>>>>>> origin/main
    try {
        const tokens = await loanContract.methods.lendersActiveTokens(address).call();
        console.log(tokens);
        return tokens;
    } catch (error) {
        console.error('Error fetching lendersActiveTokens:', error);
    }
}

<<<<<<< HEAD
async function fetchAmountToPay(minter, tokenID, query) {
=======
async function fetchAmountToPay (minter, tokenID, query) {
>>>>>>> origin/main
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
<<<<<<< HEAD
    scoreContract
=======
    getAllNfts,
    approveLoanContract,
    scoreContract,
    loanContractAddress,
    getMyLoanNFTs,
>>>>>>> origin/main
}