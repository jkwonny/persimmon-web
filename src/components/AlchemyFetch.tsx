import { Alchemy, Network } from "alchemy-sdk";

export const AlchemyFetch = () => {
  const config = {
    apiKey: process.env.REACT_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);

  const main = async () => {
    // Contract address
    const address = "0xed5af388653567af2f388e6224dc7c4b3241c544";

    // Flag to omit metadata
    const omitMetadata = false;

    // Get all NFTs
    const response = await alchemy.nft.getNftsForContract(address, {
      omitMetadata: omitMetadata,
    });
    console.log(JSON.stringify(response, null, 2));
  };

  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  runMain();
};
