import Web3 from "web3";

export default function ConnectWallet ({ onConnect }) {
  const handleConnect = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        onConnect(accounts[0]);
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.error("Ethereum provider is not detected");
    }
  };

  return (
    <button
      onClick={handleConnect}
      className="bg-black text-white px-4 py-2 rounded"
    >
      Connect Wallet to View Your Credit Score
    </button>
  );
}
