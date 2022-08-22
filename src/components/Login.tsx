import { ethers, BigNumber } from "ethers";
import { useEffect, useState } from "react";

export const Login = () => {
  const [accountId, setAccountId] = useState([]);
  const connectMMAccount = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner();
    console.log("signer", signer);
  };

  useEffect(() => {
    connectMMAccount();
  });

  return <div>hello</div>;
};
