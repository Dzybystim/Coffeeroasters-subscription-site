import {WorksCardStyled, 
    WorksCardNumber,
    WorksCardHeader,
    WorksCardText
} from "./WorksCard.styled"


export const WorksCard = ({number, header, text}) => {
    return (
        <WorksCardStyled>
         <WorksCardNumber>{number}</WorksCardNumber>
         <WorksCardHeader>{header}</WorksCardHeader>
         <WorksCardText>{text}</WorksCardText>
       </WorksCardStyled>
    );
  };