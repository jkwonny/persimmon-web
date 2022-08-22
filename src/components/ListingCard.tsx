import styled from "styled-components";

// this file is getting too bloated. need to modularize the files
interface ListingCardProps {
  image_url: string;
  slug: string;
  permalink: string;
  name: string;
}

export const ListingCard = (item: any) => {
  return (
    <MainContainer>
      <StyledThumbnail
        src={item.item.payload.item.metadata.image_url}
        alt={item.item.payload.item.metadata.name}
      />
      <StyledRankContainer>
        {/* TODO: rank data */}
        <StyledRankText>Rank: 1</StyledRankText>
        <StyledRankText>#TOKENID</StyledRankText>
      </StyledRankContainer>
      <StyledMetadata>
        <ActionContainer>
          {`${item.item.payload.payment_token.symbol}: ${
            Math.round(
              parseInt(item.item.payload.sale_price) * 0.0000000000000001
            ) / 100
          }`}
          <StyledButton>BUY OS</StyledButton>
        </ActionContainer>
        <StyledTimeContainer>13 minutes ago</StyledTimeContainer>
        {/* TODO: math for minutes ago... <div>{timeSince(item.item.payload.event_timestamp)}</div> */}
      </StyledMetadata>
    </MainContainer>
  );
};

const MainContainer = styled.button`
  --margin: 0.5em;
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  margin: 0.5em 0;
`;

const StyledThumbnail = styled.img`
  align-self: center;
  height: 70px;
  width: 90px;
  border-radius: 8px;
`;

const StyledRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 15%;
  height: 100%;
`;

const StyledRankText = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: bold;
  height: 50%;
`;

const StyledMetadata = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  display: flex;
  border-radius: 4px;
  background-color: black;
  color: white;
  padding: var(--margin);
  margin: 0 var(--margin);
`;

const StyledTimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  margin-top: var(--margin);
  justify-content: flex-end;
`;
