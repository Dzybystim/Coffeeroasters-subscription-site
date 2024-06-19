import {FooterBoxStyled,
    NavMenu,
    NavMenuLi,
    NavMenuElement,
    LogoFooter,
    LogoFooterBox,
    SocialBox,
    SocialElement
} from "./Footer.styled";

import image from "../../assets/shared/desktop/logo-footer.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg"



export const Footer = () => {
    return (
    <FooterBoxStyled>
        <LogoFooterBox>
        <LogoFooter>
        <img
          src={image}
          alt="coffee"
        ></img>
        </LogoFooter>
        </LogoFooterBox>
        <NavMenu>
            <NavMenuLi><NavMenuElement>HOME</NavMenuElement></NavMenuLi>
            <NavMenuLi><NavMenuElement>ABOUT US</NavMenuElement></NavMenuLi>
            <NavMenuLi><NavMenuElement>CREATE YOUR PLAN</NavMenuElement></NavMenuLi>
        </NavMenu>
        <SocialBox>
            <SocialElement><img src={facebook} alt="facebook"></img></SocialElement>
            <SocialElement><img src={instagram} alt="instagram"></img></SocialElement>
            <SocialElement><img src={twitter} alt="twitter"></img></SocialElement>
        </SocialBox>
    </FooterBoxStyled>
    );
  };