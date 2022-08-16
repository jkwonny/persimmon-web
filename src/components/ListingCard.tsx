import { useEffect, useState } from "react";
import styled from "styled-components";

interface ListingCardProps {
  image_url: string;
  slug: string;
  permalink: string;
  name: string;
}

const MainContainer = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

const StyledThumbnail = styled.img`
  align-self: center;
  height: 100px;
  width: 20%;
`;

const StyledRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0.5em;
  width: 15%;
`;

const StyledMetadata = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  height: 100%;
  width: 100%;
  flex-grow: 2;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
`;

const StyledButton = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: black;
  color: white;
  height: 50%;
  padding: 0.5em;
`;

const StyledTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
`;

export const ListingCard = (item: any) => {
  console.log("item", item);
  return (
    <MainContainer>
      <StyledThumbnail
        src={item.item.payload.item.metadata.image_url}
        alt={item.item.payload.item.metadata.name}
      />
      <StyledRankContainer>
        <div>Rank: 1</div>
        <div>#TOKENID</div>
      </StyledRankContainer>
      <StyledMetadata>
        <ActionContainer>
          {item.item.payload.payment_token.symbol}:
          {Math.round(
            parseInt(item.item.payload.sale_price) * 0.0000000000000001
          ) / 100}
          <StyledButton>BUY OS</StyledButton>
        </ActionContainer>
        <StyledTimeContainer>
          <div>13 minutes ago</div>
        </StyledTimeContainer>
        {/* <div>{timeSince(item.item.payload.event_timestamp)}</div> */}
      </StyledMetadata>
    </MainContainer>
  );
};
