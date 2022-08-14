import styled from "styled-components";

interface ListingCardProps {
  image_url: string;
  slug: string;
  permalink: string;
  name: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ListingCard = (item: any) => {
  console.log("item", item);
  return (
    <Container>
      <a href={item.item.payload.item.permalink}>
        <div>{item.item.payload.collection.slug}</div>
        <img
          src={item.item.payload.item.metadata.image_url}
          alt={item.item.payload.item.metadata.name}
        />
      </a>
      <div>
        {item.item.payload.payment_token.symbol}:
        {Math.round(
          parseInt(item.item.payload.sale_price) * 0.0000000000000001
        ) / 100}
      </div>
    </Container>
  );
};
