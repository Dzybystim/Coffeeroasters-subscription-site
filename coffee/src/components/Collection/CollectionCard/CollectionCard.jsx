import {CollectionCardBox, 
    CardImageBox, 
    CardImage, 
    CardHeader} from "./CollectionCard.styled"

export const CollectionCard = ({image,header,text,name}) => {
    return (
<CollectionCardBox name={name}>
    <CardImageBox>
        <CardImage src={image} alt={header}></CardImage>
    </CardImageBox>
    <CardHeader>{header}</CardHeader>
    <p>{text}</p>
</CollectionCardBox>
    );
  };