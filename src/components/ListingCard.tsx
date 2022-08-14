interface ListingCardProps {
  image_url: string;
  slug: string;
  permalink: string;
  name: string;
}

export const ListingCard = (item: any) => {
  return (
    <div>
      <div>{item.item.payload.collection.slug}</div>
      <a href={item.item.payload.item.permalink}>
        <img
          src={item.item.payload.item.metadata.image_url}
          alt={item.item.payload.item.metadata.name}
        />
      </a>
      <div>{item.item.payload.collection.slug}</div>
    </div>
  );
};
