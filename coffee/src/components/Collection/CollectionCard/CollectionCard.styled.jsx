import styled from "styled-components";

export const CollectionCardBox = styled.li`
list-style-type: none;
margin-top: ${({name}) => name? "13px" : "48px"};
`

export const CardImageBox = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
export const CardImage = styled.img`
width: 200px;
height: 151px;
`

export const CardHeader = styled.h3`
font-family: Fraunces;
text-align: center;
font-size: 24px;
line-height: 1.34;
color: #333D4B;

margin-top: 24px;
`

export const CardText = styled.p`
font-family: Barlow;
text-align: center;
font-size: 15px;
line-height: 1.67;
color: #333D4B;

margin-left: 22px;
margin-right: 22px;

margin-top: 16px;
`