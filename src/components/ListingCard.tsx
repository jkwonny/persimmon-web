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
        {item.item. }
      </div>
    </Container>
  );
};
