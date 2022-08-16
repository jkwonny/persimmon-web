import { useEffect, useState } from "react";
import "./App.css";
import { mockData } from "./mockData/mockData";
import { ListingCard } from "./components/ListingCard";
import styled from "styled-components";

import { OpenSeaStreamClient } from "@opensea/stream-js";

interface ItemState {
  image_url: string;
  slug: string;
  permalink: string;
  name: string;
  sale_price: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
`;

const ListingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  /* background-color: red; */
  border: 1px solid black;
`;

function App() {
  const client = new OpenSeaStreamClient({
    token: `${process.env.REACT_APP_API_KEY}`,
  });

  const [items, setItems] = useState<any>(mockData);

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
  }, []);

  return (
    <div className="App">
      <Container>
        {items.map((item: any) => {
          return (
            <ListingCardContainer>
              <ListingCard item={item} />
            </ListingCardContainer>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
