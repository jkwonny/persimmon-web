import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

interface AzukiMockData {
  "contract address": {
    slug: string;
    floorPrice: string;
    listings: [];
  };
}

const temp = [
  {
    event_type: "item_sold",
    payload: {
      closing_date: "2022-08-14T20:14:21.000000+00:00",
      collection: {
        slug: "ratstreetnft",
      },
      event_timestamp: "2022-08-14T20:14:21.000000+00:00",
      is_private: false,
      item: {
        chain: {
          name: "matic",
        },
        metadata: {
          animation_url: null,
          image_url:
            "https://lh3.googleusercontent.com/NCbsKwN0_FY7VeUc_Vv-JMQgEThS2rBgRe1VgfTPVviD3L5ARkT7pp26rjhWqA6597KZ5Spcn6mT1hz3RNZLvSEC3UpFea0It8CmkQ=s250",
          metadata_url:
            "https://opensea.mypinata.cloud/ipfs/QmVcQT5MimqndAgPyPvncBbtoBZJDYxFR4RLk9phUJFM6K/1507.json",
          name: "Rat Street #1507",
        },
        nft_id: "matic/0x35bdbf3997fc17011d62f7cc4d7f54c80c76d5f3/1507",
        permalink:
          "https://opensea.io/assets/matic/0x35bdbf3997fc17011d62f7cc4d7f54c80c76d5f3/1507",
      },
      listing_type: null,
      maker: {
        address: "0x49aeab402cb5f5ac840cca81b9eee8bea38975a4",
      },
      payment_token: {
        address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        decimals: 18,
        eth_price: "1.000000000000000",
        name: "Ether",
        symbol: "ETH",
        usd_price: "1935.069999999999936000",
      },
      quantity: 1,
      sale_price: "2520000000000000",
      taker: {
        address: "0xaf18f4eaf3577a2bc68aa2a64a133f49d8bf05aa",
      },
      transaction: {
        hash: "0x8a75f745d507663458315571c87e5bbb6e736434079f756e7b8dfc08875e9d06",
        timestamp: "2022-08-14T20:14:21.000000+00:00",
      },
    },
    sent_at: "2022-08-14T20:14:31.895888+00:00",
  },
  {
    event_type: "item_sold",
    payload: {
      closing_date: "2022-08-14T20:14:21.000000+00:00",
      collection: {
        slug: "ratstreetnft",
      },
      event_timestamp: "2022-08-14T20:14:21.000000+00:00",
      is_private: false,
      item: {
        chain: {
          name: "matic",
        },
        metadata: {
          animation_url: null,
          image_url:
            "https://lh3.googleusercontent.com/NCbsKwN0_FY7VeUc_Vv-JMQgEThS2rBgRe1VgfTPVviD3L5ARkT7pp26rjhWqA6597KZ5Spcn6mT1hz3RNZLvSEC3UpFea0It8CmkQ=s250",
          metadata_url:
            "https://opensea.mypinata.cloud/ipfs/QmVcQT5MimqndAgPyPvncBbtoBZJDYxFR4RLk9phUJFM6K/1507.json",
          name: "Rat Street #1507",
        },
        nft_id: "matic/0x35bdbf3997fc17011d62f7cc4d7f54c80c76d5f3/1507",
        permalink:
          "https://opensea.io/assets/matic/0x35bdbf3997fc17011d62f7cc4d7f54c80c76d5f3/1507",
      },
      listing_type: null,
      maker: {
        address: "0x49aeab402cb5f5ac840cca81b9eee8bea38975a4",
      },
      payment_token: {
        address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
        decimals: 18,
        eth_price: "1.000000000000000",
        name: "Ether",
        symbol: "ETH",
        usd_price: "1935.069999999999936000",
      },
      quantity: 1,
      sale_price: "2520000000000000",
      taker: {
        address: "0xaf18f4eaf3577a2bc68aa2a64a133f49d8bf05aa",
      },
      transaction: {
        hash: "0x8a75f745d507663458315571c87e5bbb6e736434079f756e7b8dfc08875e9d06",
        timestamp: "2022-08-14T20:14:21.000000+00:00",
      },
    },
    sent_at: "2022-08-14T20:14:31.895888+00:00",
  },
];

export const Admin = () => {
  const initializeFireBase = () => {
    const firebaseConfig = {
      apiKey: process.env.REACT_FIREBASE_KEY,
      authDomain: "persimmon-aca22.firebaseapp.com",
      databaseURL: "https://persimmon-aca22-default-rtdb.firebaseio.com",
      projectId: "persimmon-aca22",
      storageBucket: "persimmon-aca22.appspot.com",
      messagingSenderId: process.env.REACT_MESSAGING_SENDERID,
      appId: process.env.REACT_FIREBASE_APPID,
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
  };

  useEffect(() => {
    initializeFireBase();
  }, []);
  const handleDBWrite = () => {
    const db = getDatabase();
    set(ref(db, "/collections"), {
      "0xed5af388653567af2f388e6224dc7c4b3241c544": {
        slug: "Azuki",
        floorPrice: "6.5",
        listings: temp,
      },
    });
  };
  return (
    <div>
      <button onClick={handleDBWrite}>Click here to push data in</button>
    </div>
  );
};
