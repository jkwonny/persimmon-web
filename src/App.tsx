import { useEffect, useState } from "react";
import "./App.css";
import { mockData } from "./mockData/mockData";
import { ListingCard } from "./components/ListingCard";
import styled from "styled-components";

import { OpenSeaStreamClient } from "@opensea/stream-js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
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
    //     return [...prevItems, event];
    //   });
    // });

    console.log(items);
  }, []);
  return (
    <div className="App">
      <Container>
        {items.map((item: any) => {
          return <ListingCard item={item} />;
        })}
      </Container>
    </div>
  );
}

export default App;
