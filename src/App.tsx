import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { mockData } from "./mockData/mockData";
import { ListingCard } from "./components/ListingCard";

import { OpenSeaStreamClient } from "@opensea/stream-js";

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
  });
  return (
    <div className="App">
      <div>
        {items.map((item: any) => {
          return <ListingCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
