import { useEffect, useState } from "react";
import "./App.css";
import { mockData } from "./mockData/mockData";
import { ListingCard } from "./components/ListingCard";
import styled from "styled-components";
// import { Admin } from "./components/Admin";

// import { OpenSeaStreamClient } from "@opensea/stream-js";

// interface ItemState {
//   image_url: string;
//   slug: string;
//   permalink: string;
//   name: string;
//   sale_price: number;
// }

const ListingContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const ListingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5em;
  border: 1px solid black;
  border-radius: 8px;
  margin: 0.1em 1em 0.1em 0;
`;

function App() {
  // const client = new OpenSeaStreamClient({
  //   token: `${process.env.REACT_APP_API_KEY}`,
  // });

  const [listItems, setListItems] = useState<any>(mockData);
  const [soldItems, setSoldItems] = useState<any>(mockData);

  // const config = {
  //   apiKey: process.env.REACT_ALCHEMY_API_KEY,
  //   network: Network.ETH_MAINNET,
  // };
  // const alchemy = new Alchemy(config);

  // const main = async () => {
  //   // Contract address
  //   const address = "0xed5af388653567af2f388e6224dc7c4b3241c544";

  //   // Flag to omit metadata
  //   const omitMetadata = false;

  //   // Get all NFTs
  //   const response = await alchemy.nft.getNftsForContract(address, {
  //     omitMetadata: omitMetadata,
  //   });
  //   // console.log(JSON.stringify(response, null, 2));
  // };

  // const runMain = async () => {
  //   try {
  //     await main();
  //     process.exit(0);
  //   } catch (error) {
  //     console.log(error);
  //     process.exit(1);
  //   }
  // };

  useEffect(() => {
    // client.onItemSold("*", (event) => {
    //   // handle event
    //   setItems((prevItems: any) => {
    //     if (event.payload.item.chain.name === 'ethereum') {
    //           return [...prevItems, event];
    //     }
    //   });
    // });
    // return () => client.disconnect();
    // console.log("listItems", listItems);
    // runMain();
  }, []);

  const [accounts, setAccounts] = useState([]);

  async function connectAccounts() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  useEffect(() => {
    connectAccounts();
  }, []);

  return (
    <div className="App">
      {accounts.length > 0 ? (
        <ListingContainer>
          {/* <Admin /> */}
          <SubContainer>
            <h1>New Listings</h1>
            {listItems.map((item: any, index: number) => {
              // KEY: console.log(item.payload.transaction.hash);
              return (
                <ListingCardContainer key={index}>
                  <ListingCard item={item} />
                </ListingCardContainer>
              );
            })}
          </SubContainer>
          <SubContainer>
            <h1>Sold Listings</h1>
            {soldItems.map((item: any) => {
              return (
                <ListingCardContainer>
                  <ListingCard item={item} />
                </ListingCardContainer>
              );
            })}
          </SubContainer>
        </ListingContainer>
      ) : (
        <div>404 page!</div>
      )}
    </div>
  );
}

export default App;
