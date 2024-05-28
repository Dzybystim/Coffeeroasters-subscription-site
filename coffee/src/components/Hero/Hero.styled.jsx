import styled from "styled-components";

export const HeroBox = styled.div`
margin-top: 40px;

position: relative;
`

export const HeroImageBox = styled.div`
position: absolute;
z-index: -1;

width: 100%;

border-radius: 10px;
`
export const HeroImage = styled.img`
border-radius: 10px;
`

export const HeroTextBox = styled.div`
padding-left: 24px;
padding-right: 24px;
`
export const HeroHeader = styled.h1`
padding-top: 100px;
font-family: Fraunces;

text-align: center;
font-size: 40px;
line-height: 1;
color: #FEFCF7;
`
export const HeroText = styled.p`
margin-top: 24px;
font-family: Barlow;

text-align: center;
font-size: 15px;
line-height: 1.67;
color: #FEFCF7;
`

export const HeroButtonBox = styled.div`
margin-top: 39px;
margin-bottom: 100px;
display: flex;
justify-content: center;
align-items: center;
`