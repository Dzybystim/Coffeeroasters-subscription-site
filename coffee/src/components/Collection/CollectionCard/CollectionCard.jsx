import {CollectionCardBox, 
    CardImageBox, 
    CardImage, 
    CardHeader,
    CardText} from "./CollectionCard.styled"

export const CollectionCard = ({image,header,text,name}) => {
    return (
<CollectionCardBox name={name}>
    <CardImageBox>
        <CardImage src={image} alt={header}></CardImage>
    </CardImageBox>
    <CardHeader>{header}</CardHeader>
    <CardText>{text}</CardText>
</CollectionCardBox>
    );
  };