import {ChooseCardStyled,
  ChooseCardImageBox,
  ChooseCardHeader,
  ChooseCardText
} from "./ChooseCard.styled"

export const ChooseCard = ({image, header, text}) => {
    return (
  <ChooseCardStyled>
    <ChooseCardImageBox>
    <img src={image} alt={header}/>
    </ChooseCardImageBox>
    <ChooseCardHeader>{header}</ChooseCardHeader>
    <ChooseCardText>{text}</ChooseCardText>
  </ChooseCardStyled>
    );
}