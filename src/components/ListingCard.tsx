import styled from "styled-components";

interface ListingCardProps {
  image_url: string;
  slug: string;
  permalink: string;
  name: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListingCard = (item: any) => {
  return (
    <Container>
      <div>{item.item.payload.collection.slug}</div>
      <a href={item.item.payload.item.permalink}>
        <img
          src={item.item.payload.item.metadata.image_url}
          alt={item.item.payload.item.metadata.name}
        />
      </a>
      <div>{item.item.payload.collection.slug}</div>
    </Container>
  );
};
