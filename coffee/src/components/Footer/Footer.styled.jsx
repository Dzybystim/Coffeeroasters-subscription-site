import styled from "styled-components";
import {LogoBox} from "../Header/Logo/Logo.styled"


export const FooterBoxStyled = styled.div`
background-color: #2C343E;
margin-top: 120px;
margin-bottom: 72px;
`;

export const NavMenu = styled.ul`
margin-top: 48.5px;

display: flex;
justify-content: center;
align-items: center;
gap: 24px;

flex-direction: column;
`
export const NavMenuLi = styled.li`
list-style-type: none;
`
export const NavMenuElement = styled.a`
font-family: Barlow;
text-align: center;
font-size: 12px;
line-height: 1.25;
font-weight: 900;
letter-spacing: 0.92px;

color: #83888F;
`

export const LogoFooterBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const LogoFooter = styled(LogoBox)`
width: 217px;
height: auto;
padding-top: 54px;
fill: red;
`
export const SocialBox = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 24px;

margin-top: 48px;
padding-bottom: 54px;
`
export const SocialElement = styled.li`
list-style-type: none;
`