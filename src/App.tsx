import { useEffect, useState } from "react";
import "./App.css";
import { mockData } from "./mockData/mockData";
import { ListingCard } from "./components/ListingCard";
import styled from "styled-components";

import { OpenSeaStreamClient } from "@opensea/stream-js";

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
    console.log("listItems", listItems);
  }, []);

  return (
    <div className="App">
      <ListingContainer>
        <SubContainer>
          <h1>New Listings</h1>
          {listItems.map((item: any) => {
            return (
              <ListingCardContainer>
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
    </div>
  );
}

export default App;
